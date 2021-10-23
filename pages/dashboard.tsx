import React from "react";
import type { NextPage, GetServerSideProps } from "next";
import type { Message } from "@prisma/client";
import { getSession } from "next-auth/react";

import styles from "../styles/Submit.module.css";
import { trpc } from "../utils/trpc";

const MessageView: React.FC<{ message: Message }> = ({ message }) => {
  const utils = trpc.useContext();

  const deleteMessageMutation = trpc.useMutation("messages.delete", {
    onSuccess: () => {
      utils.invalidateQuery(["users.get-messages"]);
    },
  });

  return (
    <div className={styles.message}>
      <p>{message.content}</p>
      <p>{message.createdAt.toString()}</p>
      <button onClick={() => deleteMessageMutation.mutate(message.id)}>
        delete
      </button>
    </div>
  );
};

const Dashboard: NextPage<{ messages: Message[] }> = (props) => {
  const { data } = trpc.useQuery(["users.get-messages"]);
  if (!data) return null;

  return (
    <div className={styles.dashboard}>
      {data.map((message) => (
        <MessageView key={message.id} message={message} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
};

export default Dashboard;
