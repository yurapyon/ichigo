import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import type { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";

const MaybeActiveLink: React.FC<{ href: string; linkName: string }> = ({
  href,
  linkName,
}) => {
  return useRouter().asPath === href ? (
    <span className="font-bold">{linkName}</span>
  ) : (
    <Link href={href}>{linkName}</Link>
  );
};

const LeftNav: React.FC = () => {
  return (
    <div className="float-left width-1/2">
      <MaybeActiveLink href="/" linkName="ichigo Q+A" />
    </div>
  );
};

const RightNav: React.FC<{ session?: Session }> = ({ session }) => {
  if (!session) {
    return (
      <div className="float-right width-1/2">
        <Link href="/api/auth/signin">log in</Link>
      </div>
    );
  } else {
    return (
      <div className="float-right width-1/2">
        <MaybeActiveLink
          href={"/user/" + session.user?.name}
          linkName="submissions"
        />{" "}
        <MaybeActiveLink href="/dashboard" linkName="dashboard" />{" "}
        <MaybeActiveLink href="/settings" linkName="settings" /> {"- "}
        {session.user?.name}{" "}
        <button onClick={() => signOut()}>
          <a>log out</a>
        </button>
      </div>
    );
  }
};

const Header: React.FC<{ session?: Session }> = ({ session }) => {
  return (
    <div className="bg-gray-300 mx-auto w-full">
      <nav className="">
        <LeftNav />
        <RightNav session={session || undefined} />
      </nav>
    </div>
  );
};

export default Header;
