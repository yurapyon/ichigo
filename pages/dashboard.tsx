import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head'

import prisma from '../lib/prisma.ts';

const Message: React.FC = (props) => {
  return <p key={props.message.id}>{props.message.content}</p>;
};

const Dashboard: NextPage = (props) => {
  console.log(props);
  return (
    <>
    <Head> </Head>
    <p>
    dashboard for: {props.user}
    </p>
    {props.messages.map((message)=>Message({message}))}
    </>
  );
}

export async function getServerSideProps(context) {
  const user = "mel";
  const messages = await prisma.message.findMany({
    where: {
      user: {
        name: user
      }
    }
  });
  return {
    props: { user, messages }
  };
}

export default Dashboard
