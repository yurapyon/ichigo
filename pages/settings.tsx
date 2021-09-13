import React, { useState } from "react";
import type { NextPage, GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { getSession } from "next-auth/react";

import Header from "../lib/Header";
import LengthReadout from "../lib/LengthReadout";
import styles from "../styles/Submit.module.css";

type UserBio = string | null;

interface UserSettings {
  bio: UserBio;
}

const Settings: React.FC<{ user: User }> = (props) => {
  const [settings, setSettings] = useState({
    bio: props.user.bio,
  });

  const setBio = (to: UserBio) => {
    var s = { ...settings };
    s.bio = to;
    setSettings(s);
  };

  const submitSettings = async () => {
    try {
      await fetch(`/api/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.settings}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitSettings();
          }}
        >
          <div>
            bio{" "}
            <textarea
              style={{ resize: "none" }}
              rows={5}
              onChange={(e) => setBio(e.target.value || null)}
              value={settings.bio || ""}
            />{" "}
            <LengthReadout
              len={settings.bio ? settings.bio.length : 0}
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
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });
  const prisma = new PrismaClient();

  // TODO handle !session !user

  const user = await prisma.user.findUnique({
    where: {
      name: session?.user?.name || undefined,
    },
  });

  return {
    props: { user },
  };
};

export default Settings;
