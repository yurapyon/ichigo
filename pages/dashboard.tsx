import React, { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import type { Message } from "@prisma/client";
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";

import Header from "../lib/Header";
import styles from "../styles/Submit.module.css";
import { trpc } from "../utils/trpc";

import type { AppRouter } from "./api/trpc/[trpc]";
import { createTRPCClient } from "@trpc/client";

const client = createTRPCClient<AppRouter>({
  url: "http://localhost:3000/api/trpc",
});

const MessageView: React.FC<{
  message: Message;
  deleteMessage: (id: number) => {};
}> = (props) => {
  return (
    <div className={styles.message} key={props.message.id}>
      <p>{props.message.content}</p>
      <p>{props.message.createdAt.toString()}</p>
      <button onClick={() => props.deleteMessage(props.message.id)}>
        delete
      </button>
    </div>
  );
};

const Dashboard: NextPage<{messages: Message[]}> = (props) => {
  const [messages, setMessages] = useState(props.messages);

  const deleteMessage = async (id: number) => {
    await client.mutation("messages.delete", id);
    setMessages(messages.filter((msg) => msg.id != id));
  };

  return (
    <div className={styles.dashboard}>
      {messages.map((message) => MessageView({ message, deleteMessage }))}
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
    props: { session, messages },
  };
};

export default Dashboard;
