import type { NextPage } from 'next';
import { GetStaticProps } from "next"
import prisma from '../lib/prisma.ts';

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.message.findMany({
    include: {
      user: {
        select: { name: true },
      },
    },
  });
  return { props: { feed } };
};

function Post(props) {
  return (
    <p>
      { props.content }
    </p>
  );
}

function PostView(props) {
  /*
  return (
    <>
    <h1> { props.feed[0].user.name } </h1>
    { props.feed.map(Post) }
    </>
  );
  */
  return null;
}

const Home: NextPage = ({ feed }) => {
  return (
      <>
      <Head> </Head>
      <PostView feed={feed}/>
      </>
  )
}

export default Home
