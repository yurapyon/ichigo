import React, { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { getSession } from "next-auth/react";

import LengthReadout, { within } from "../../lib/LengthReadout";
import styles from "../../styles/Submit.module.css";

import type { AppRouter } from "../api/trpc/[trpc]";
import { createTRPCClient } from "@trpc/client";

const client = createTRPCClient<AppRouter>({
  url: "http://localhost:3000/api/trpc",
});

interface MessageSubmitter {
  message: string;
  changeMessage: (s: string) => void;
  submitMessage: React.FormEventHandler<HTMLFormElement>;
}

const useMessageSubmitter = (username: string): MessageSubmitter => {
  const [message, setMessage] = useState("");

  const changeMessage = (s: string) => {
    setMessage(s);
  };

  const submitMessage: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await client.mutation("users.sendMessage", {
      username,
      message,
    });
    setMessage("");
  };

  return { message, changeMessage, submitMessage };
};

const ProfileView: React.FC<{ user: User }> = (props) => {
  // TODO handle !(user.image)
  return (
    <div className={styles.profileView}>
      <div style={{ marginRight: "12px" }}>
        <Image src={props.user.image || ""} width={100} height={100} />
      </div>
      <div>
        <div style={{ fontWeight: "bold" }}>{props.user.name}</div>
        <div style={{ maxWidth: "300px", wordWrap: "break-word" }}>
          {props.user.bio}
        </div>
      </div>
    </div>
  );
};

const AskBox: React.FC<{ submitter: MessageSubmitter; maxLen: number }> = (
  props
) => {
  return (
    <div className={styles.askBox}>
      <form onSubmit={props.submitter.submitMessage}>
        <textarea
          style={{ resize: "none" }}
          rows={5}
          onChange={(e) => props.submitter.changeMessage(e.target.value)}
          placeholder="say something nice~"
          value={props.submitter.message}
        />
        <div>
          <input
            type="submit"
            value="submit"
            disabled={!within(props.submitter.message.length, 1, props.maxLen)}
          />
          <LengthReadout
            len={props.submitter.message.length}
            maxLen={props.maxLen}
          />
        </div>
      </form>
    </div>
  );
};

const SubmitPage: NextPage<{ user: User }> = (props) => {
  const router = useRouter();
  const { username } = router.query;

  // TODO handle !(user.name) ? seems like a prisma problem or something
  const submitter = useMessageSubmitter(props.user?.name || "");

  if (!props.user) {
    // TODO
    return <>user not found: {username} </>;
  }

  return (
    <div className={styles.submitPage}>
      <ProfileView user={props.user} />
      <AskBox submitter={submitter} maxLen={100} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  const prisma = new PrismaClient();

  const username = context.params?.username;
  // TODO handle this differently
  if (typeof username != "string") {
    return {
      props: { session, user: null },
    };
  }

  const user = await prisma.user.findUnique({
    where: { name: username },
  });

  return {
    props: { session, user },
  };
};

export default SubmitPage;
