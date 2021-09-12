import type { NextPage } from "next";
import React, { useState } from "react";

import prisma from "../lib/prisma.ts";
import { getSession } from "next-auth/react";

import Header from "../lib/Header.tsx";
import styles from "../styles/Submit.module.css";

const BioBox: React.FC = (props) => {};

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: {
        bio: props.user.bio,
      },
    };
  }

  handleChange(val, name) {
    var s = { ...this.state.settings };
    s[name] = val;
    this.setState({ settings: s });
  }

  submit() {
    console.log("submitting: ", this.state.settings);
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.settings}>
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
                disabled={
                  !within(props.submitter.message.length, 1, props.max_len)
                }
              />
              <LengthReadout
                len={props.submitter.message.length}
                max_len={props.max_len}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const user = await prisma.user.findUnique({
    where: {
      name: session.user.name,
    },
  });
  return {
    props: { session, user },
  };
}

export default Settings;
