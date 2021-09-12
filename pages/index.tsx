import type { NextPage } from "next";

import Header from "../lib/Header.tsx";

import { GetStaticProps } from "next";
import prisma from "../lib/prisma.ts";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ feed }) => {
  return (
    <>
      <Head> </Head>
      <Header />
      index page
    </>
  );
};

export default Home;
