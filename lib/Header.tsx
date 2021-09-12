import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

import styles from "../styles/Submit.module.css";

import type { Session } from "next-auth";

const MaybeActiveLink: React.FC<{ href: string; linkName: string }> = (
  props
) => {
  return useRouter().asPath === props.href ? (
    <span
      style={{
        fontWeight: "bold",
        textDecoration: "none",
      }}
    >
      {props.linkName}
    </span>
  ) : (
    <Link href={props.href}>{props.linkName}</Link>
  );
};

const LeftNav: React.FC = () => {
  return (
    <div className={styles.navLeft}>
      <MaybeActiveLink href="/" linkName="ichigo Q+A" />
    </div>
  );
};

const RightNav: React.FC<{ status: string; session?: Session }> = (props) => {
  if (props.status == "loading") {
    return <div className={styles.navRight}>loading...</div>;
  } else {
    if (!props.session) {
      return (
        <div className={styles.navRight}>
          <Link href="/api/auth/signin">log in</Link>
        </div>
      );
    } else {
      return (
        <div className={styles.navRight}>
          {props.session.user?.name}{" "}
          <MaybeActiveLink
            href={"/user/" + props.session.user?.name}
            linkName="submissions"
          />{" "}
          <MaybeActiveLink href="/dashboard" linkName="dashboard" />{" "}
          <MaybeActiveLink href="/settings" linkName="settings" />{" "}
          <button onClick={() => signOut()}>
            <a>log out</a>
          </button>
        </div>
      );
    }
  }
};

const Header: React.FC = () => {
  const { data: session, status } = useSession({ required: false });

  return (
    <>
      <Head> </Head>
      <div className={styles.header}>
        <nav className={styles.topNav}>
          <LeftNav />
          <RightNav status={status} session={session || undefined} />
        </nav>
      </div>
    </>
  );
};

export default Header;
