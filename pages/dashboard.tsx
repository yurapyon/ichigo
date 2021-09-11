import React from 'react';

import type { NextPage } from 'next';
import Head from 'next/head'

import prisma from '../lib/prisma.ts';
import { getSession } from 'next-auth/react';

const Message: React.FC = (props) => {
  return <p key={props.message.id}>{props.message.content}</p>;
};

const Dashboard: NextPage = (props) => {
  console.log(props);
  return (
    <>
    <Head> </Head>
    <p>
    dashboard for: {props.session.user.name}
    </p>
    {props.messages.map((message)=>Message({message}))}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req});

  const messages = await prisma.message.findMany({
    where: {
      user: {
        name: session.user.name
      }
    }
  });
  return {
    props: { session, messages }
  };
}

export default Dashboard
