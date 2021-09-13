import React, { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import type { Message } from "@prisma/client";
import { getSession } from "next-auth/react";

import Header from "../lib/Header";
import styles from "../styles/Submit.module.css";

const MessageView: React.FC<{
  message: Message;
  deleteMessage: (id: number) => {};
}> = (props) => {
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

const Dashboard: NextPage<{ messages: Message[] }> = (props) => {
  const [messages, setMessages] = useState(props.messages);

  const deleteMessage = async (id: number) => {
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
          .map((message) => MessageView({ message, deleteMessage }))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const prisma = new PrismaClient();

  // TODO handle !session !user

  const messages = await prisma.message.findMany({
    where: {
      user: {
        name: session?.user?.name,
      },
    },
  });

  return {
    props: { messages },
  };
};

export default Dashboard;
