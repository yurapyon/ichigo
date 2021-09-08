import React, { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head'

import prisma from '../../lib/prisma.ts';

function within(val, min, max) {
  return val <= max && val >= min;
}

const LengthReadout: React.FC = (props) => {
  if (!within(props.len, 1, props.max_len)) {
    return <><span style={{color: "red"}}>{props.len}</span>/{props.max_len}</>;
  } else {
    return <>{props.len}/{props.max_len}</>;
  }
}

const AskBox: React.FC = (props) => {
  return (
    <form onSubmit={props.onSubmit} >
      <div>
        <textarea
          style={{resize: "none"}}
          rows={5}
          cols={50}
          onChange={props.changeMessage}
        />
      </div>
      <div>
        <LengthReadout len={props.message.length} max_len={props.max_len} />
        <input
          type="submit"
          value="submit"
          disabled={!within(props.message.length, 1, props.max_len)}
        />
      </div>
    </form>
  );
};

const Home: NextPage = (props) => {
  const router = useRouter();
  const { user } = router.query;

  if (!props.user_found) {
    return (<>
      <Head> </Head>
      user not found: {user}
    </>);
  }

  const [ message, setMessage ] = useState('');
  const changeMessage = (e) => {
    setMessage(e.target.value)
  };
  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      await fetch(`/api/user/${user}`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: message,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
      <>
      <Head> </Head>
      {user}
      <AskBox
        onSubmit={submitMessage}
        changeMessage={changeMessage}
        message={message}
        max_len={100}
      />
      </>
  )
}

export async function getServerSideProps(context) {
  const user = context.params.user;
  const user_found = await prisma.user.findUnique({
    where: { name: user }
  });
  return {
    props: { user_found }
  };
}

export default Home
