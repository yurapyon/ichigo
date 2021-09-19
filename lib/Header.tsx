import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { Session } from "next-auth";
import { signOut, useSession } from "next-auth/react";

import styles from "../styles/Submit.module.css";

const MaybeActiveLink: React.FC<{ href: string; linkName: string }> = (
  props
) => {
  return useRouter().asPath === props.href ? (
    <strong>{props.linkName} </strong>
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

const RightNav: React.FC<{ session?: Session }> = (props) => {
  if (!props.session) {
    return (
      <div className={styles.navRight}>
        <Link href="/api/auth/signin">log in</Link>
      </div>
    );
  } else {
    return (
      <div className={styles.navRight}>
        <MaybeActiveLink
          href={"/user/" + props.session.user?.name}
          linkName="submissions"
        />{" "}
        <MaybeActiveLink href="/dashboard" linkName="dashboard" />{" "}
        <MaybeActiveLink href="/settings" linkName="settings" /> {"- "}
        {props.session.user?.name}{" "}
        <button onClick={() => signOut()}>
          <a>log out</a>
        </button>
      </div>
    );
  }
};

const Header: React.FC<{ session?: Session }> = ({ session }) => {
  return (
    <div className={styles.header}>
      <nav className={styles.topNav}>
        <LeftNav />
        <RightNav session={session || undefined} />
      </nav>
    </div>
  );
};

export default Header;
