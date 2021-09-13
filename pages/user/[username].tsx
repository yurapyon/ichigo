import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";

import Header from "../../lib/Header.tsx";
import LengthReadout, { within } from "../../lib/LengthReadout.tsx";
import styles from "../../styles/Submit.module.css";

const useMessageSubmitter = (username) => {
  const [message, setMessage] = useState("");

  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/user/${username}`, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: message,
      });
    } catch (error) {
      console.error(error);
    }

    setMessage("");
  };

  return { message, changeMessage, submitMessage };
};

const ProfileView: React.FC = (props) => {
  return (
    <div className={styles.profileView}>
      <div style={{ marginRight: "12px" }}>
        <Image src={props.user.image} width={100} height={100} />
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

const AskBox: React.FC = (props) => {
  return (
    <div className={styles.askBox}>
      <form onSubmit={props.submitter.submitMessage}>
        <textarea
          style={{ resize: "none" }}
          rows={5}
          onChange={props.submitter.changeMessage}
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

const SubmitPage: NextPage = (props) => {
  const router = useRouter();
  const { username } = router.query;

  if (!props.user) {
    return (
      <div className={styles.container}>
        <Header />
        user not found: {username}
      </div>
    );
  }

  const submitter = useMessageSubmitter(props.user.name);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.submitPage}>
        <ProfileView user={props.user} />
        <AskBox submitter={submitter} maxLen={100} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const prisma = new PrismaClient();

  const username = context.params.username;
  const user = await prisma.user.findUnique({
    where: { name: username },
  });
  return {
    props: { user },
  };
}

export default SubmitPage;
