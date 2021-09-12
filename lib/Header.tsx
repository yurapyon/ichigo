import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const RightNav: React.FC = (props) => {
  if (props.status == "loading") {
    return <p>loading...</p>;
  } else {
    if (!props.session) {
      return <Link href="/api/auth/signin">log in</Link>;
    } else {
      return (
        <p>
          {props.session.user.name} ({props.session.user.email})
          <button onClick={() => signOut()}>
            <a>log out</a>
          </button>
        </p>
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
    <nav>
      <RightNav status={status} session={session} />
    </nav>
  );
};

export default Header;
