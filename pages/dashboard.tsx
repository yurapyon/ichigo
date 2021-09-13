import React, {useState } from "react";
import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

import Header from "../lib/Header.tsx";
import styles from "../styles/Submit.module.css";

// TODO
const Message: React.FC = (props) => {
  return (
    <div className={styles.message} key={props.message.id}>
      <p>{props.message.content}</p>
      <p>{props.message.createdAt}</p>
      <button onClick={() => props.deleteMessage(props.message.id)}>
        delete
      </button>
    </div>
  );
};

const Dashboard: NextPage = (props) => {
  const [messages, setMessages] = useState(props.messages);

  const deleteMessage = async (id) => {
    try {
      await fetch(`/api/delete`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
      });
    } catch (error) {
      console.error(error);
    }

    setMessages(messages.filter((msg) => msg.id != id));
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.dashboard}>
        {messages
          .reverse()
          .map((message) => Message({ message, deleteMessage }))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  const prisma = new PrismaClient();

  const messages = await prisma.message.findMany({
    where: {
      user: {
        name: session.user.name,
      },
    },
  });
  // TODO
  for (var msg of messages) {
    msg.createdAt = JSON.stringify(msg.createdAt);
  }
  return {
    props: { session, messages },
  };
}

export default Dashboard;
