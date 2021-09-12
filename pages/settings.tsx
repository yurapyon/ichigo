import type { NextPage } from "next";
import React, { useState } from "react";

import prisma from "../lib/prisma.ts";
import { getSession } from "next-auth/react";

import Header from "../lib/Header.tsx";
import styles from "../styles/Submit.module.css";

function within(val, min, max) {
  return val <= max && val >= min;
}

// TODO refactor
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

  async submit() {
    try {
      await fetch(`/api/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(this.state.settings),
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <div className={styles.settings}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              this.submit();
            }}
          >
            <div>
              bio{" "}
              <textarea
                style={{ resize: "none" }}
                rows={5}
                onChange={(e) => this.handleChange(e.target.value, "bio")}
                value={this.state.settings.bio}
              />{" "}
              <LengthReadout
                len={this.state.settings.bio.length}
                max_len={100}
              />
            </div>
            <div>
              <input
                type="submit"
                value="submit"
                disabled={
                  //!within(this.props.submitter.message.length, 1, props.max_len)
                  false
                }
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
