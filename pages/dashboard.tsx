import React from "react";

import type { NextPage } from "next";

import prisma from "../lib/prisma.ts";
import { getSession } from "next-auth/react";

import Header from "../lib/Header.tsx";
import styles from "../styles/Submit.module.css";

const Message: React.FC = (props) => {
  return (
    <div className={styles.message} key={props.message.id}>
      <p>{props.message.content}</p>
      <button>delete</button>
    </div>
  );
};

const Dashboard: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.dashboard}>
        <p>
          <strong>dashboard for: {props.session.user.name}</strong>
        </p>
        {props.messages.map((message) => Message({ message }))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const messages = await prisma.message.findMany({
    where: {
      user: {
        name: session.user.name,
      },
    },
  });
  return {
    props: { session, messages },
  };
}

export default Dashboard;
