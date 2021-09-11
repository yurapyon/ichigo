import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession({required: false });

  let right;

  if (status == "loading") {
    right = <p>loading...</p>
  } else {
    if (!session) {
      right = <Link href="/api/auth/signin">log in</Link>
    } else {
      right = <p>{session.user.name} ({session.user.email})
      <button onClick={()=>signOut()}>
        <a> log out </a>
      </button>
      </p>
    }
  }

  return (
    <nav>
      {right}
    </nav>
  );
}

export default Header;
