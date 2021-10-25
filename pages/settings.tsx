import React, { useState } from "react";
import type { GetServerSideProps } from "next";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { getSession } from "next-auth/react";

import LengthReadout from "../lib/LengthReadout";

import { trpc } from "../utils/trpc";

type UserBio = string | null;

const Settings: React.FC<{ user: User }> = ({ user }) => {
  const pushSettingsMutation = trpc.useMutation("users.pushSettings");

  const [settings, setSettings] = useState({
    bio: user.bio,
  });

  const setBio = (to: UserBio) => {
    var s = { ...settings };
    s.bio = to;
    setSettings(s);
  };

  return (
    <div className="flew flex-col mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          pushSettingsMutation.mutate(settings);
        }}
      >
        <div>
          bio{" "}
          <textarea
            className="border-2"
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
    props: { session, user },
  };
};

export default Settings;
