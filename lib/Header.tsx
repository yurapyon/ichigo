import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

import styles from "../styles/Submit.module.css";

const LeftNav: React.FC = (props) => {
  return <div className={styles.navLeft}>ichigo Q+A</div>;
};

const RightNav: React.FC = (props) => {
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
          {props.session.user.name} <Link href="/settings">settings</Link>{" "}
          <button onClick={() => signOut()}>
            <a>log out</a>
          </button>
        </div>
      );
    }
  }
};

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession({ required: false });

  return (
    <>
      <Head> </Head>
      <div className={styles.header}>
        <nav className={styles.topNav}>
          <LeftNav />
          <RightNav status={status} session={session} />
        </nav>
      </div>
    </>
  );
};

export default Header;
