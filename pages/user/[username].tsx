import React, { useState } from "react";

import type { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import Image from "next/image";

import prisma from "../../lib/prisma.ts";

import Header from "../../lib/Header.tsx";

import styles from "../../styles/Submit.module.css";

function within(val, min, max) {
  return val <= max && val >= min;
}

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

const LengthReadout: React.FC = (props) => {
  if (!within(props.len, 1, props.max_len)) {
    return (
      <>
        <span style={{ color: "red" }}>{props.len}</span>/{props.max_len}
      </>
    );
  } else {
    return (
      <>
        {props.len}/{props.max_len}
      </>
    );
  }
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
            disabled={!within(props.submitter.message.length, 1, props.max_len)}
          />
          <LengthReadout
            len={props.submitter.message.length}
            max_len={props.max_len}
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
        <AskBox submitter={submitter} max_len={100} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const username = context.params.username;
  const user = await prisma.user.findUnique({
    where: { name: username },
  });
  return {
    props: { user },
  };
}

export default SubmitPage;
