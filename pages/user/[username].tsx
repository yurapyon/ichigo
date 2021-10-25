import React, { useState } from "react";
import type { GetServerSideProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { PrismaClient } from "@prisma/client";
import type { User } from "@prisma/client";
import { getSession } from "next-auth/react";

import LengthReadout, { within } from "../../lib/LengthReadout";

import { trpc } from "../../utils/trpc";

interface MessageSubmitter {
  message: string;
  changeMessage: (s: string) => void;
  submitMessage: React.FormEventHandler<HTMLFormElement>;
}

const useMessageSubmitter = (username: string): MessageSubmitter => {
  const [message, setMessage] = useState("");

  const sendMessageMutation = trpc.useMutation("users.sendMessage");

  const changeMessage = (s: string) => {
    setMessage(s);
  };

  const submitMessage: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    sendMessageMutation.mutate({ username, message });
    setMessage("");
  };

  return { message, changeMessage, submitMessage };
};

const ProfileView: React.FC<{ user: User }> = ({ user }) => {
  // TODO handle !(user.image)
  return (
    <div className="flex flex-row mx-5">
      <div style={{ marginRight: "12px" }}>
        <Image src={user.image || ""} width={100} height={100} />
      </div>
      <div>
        <div style={{ fontWeight: "bold" }}>{user.name}</div>
        <div style={{ maxWidth: "300px", wordWrap: "break-word" }}>
          {user.bio}
        </div>
      </div>
    </div>
  );
};

const AskBox: React.FC<{ submitter: MessageSubmitter; maxLen: number }> = ({
  submitter,
  maxLen,
}) => {
  return (
    <div className="flex flex-col">
      <form onSubmit={submitter.submitMessage}>
        <textarea
          style={{ resize: "none" }}
          rows={5}
          onChange={(e) => submitter.changeMessage(e.target.value)}
          placeholder="say something nice~"
          value={submitter.message}
        />
        <div>
          <input
            type="submit"
            value="submit"
            disabled={!within(submitter.message.length, 1, maxLen)}
          />
          <LengthReadout len={submitter.message.length} maxLen={maxLen} />
        </div>
      </form>
    </div>
  );
};

const SubmitPage: React.FC<{ user: User }> = ({ user }) => {
  const router = useRouter();
  const { username } = router.query;

  // TODO handle !(user.name) ? seems like a prisma problem or something
  const submitter = useMessageSubmitter(user?.name || "");

  if (!user) {
    // TODO
    return <>user not found: {username} </>;
  }

  return (
    <div className="flex flex-col">
      <ProfileView user={user} />
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
