import React, { useState } from 'react';

import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Head from 'next/head'

const MAX_MESSAGE_LEN = 100;

const LengthReadout: React.FC = (props) => {
  if (props.len > props.max_len) {
    return <><span style={{color: "red"}}>{props.len}</span>/{props.max_len}</>;
  } else {
    return <>{props.len}/{props.max_len}</>;
  }
}

const AskBox: React.FC = (props) => {
  const [ contents, setContents ] = useState('');

  const submit = () => {
    console.log(props.user, contents)
  };

  const message_too_long = contents.length > MAX_MESSAGE_LEN;

  return (
    <>

    <p>
    <textarea
      style={{resize: "none"}}
      rows={5}
      cols={50}
      onChange={(e)=>{setContents(e.target.value)}}
    />
    </p>

    <p>
    <LengthReadout len={contents.length} max_len={MAX_MESSAGE_LEN} />

    <button
      onClick={submit}
      disabled={contents.length == 0 || message_too_long}
    >
    submit
    </button>
    </p>

    </>
  );
};

const Home: NextPage = () => {
  const router = useRouter();
  console.log(router);
  const { user } = router.query;
  return (
      <>
      <Head> </Head>
      {user}
      <AskBox user={user}/>
      </>
  )
}

export default Home
