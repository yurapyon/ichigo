import React, { useState } from "react";
import type { NextPage } from "next";
import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";

import Header from "../lib/Header.tsx";
import LengthReadout from "../lib/LengthReadout.tsx";
import styles from "../styles/Submit.module.css";

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
                maxLen={100}
              />
            </div>
            <div>
              <input
                type="submit"
                value="submit"
                disabled={
                  // TODO disable
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
  const prisma = new PrismaClient();

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
