import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "./api/trpc/[trpc]";

import Header from "../lib/Header";
import "../styles/globals.css";
import styles from "../styles/Submit.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head> </Head>
      <div className={styles.container}>
        <Header session={pageProps.session}/>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default withTRPC<AppRouter>({
  config({ ctx }) {
    // TODO
    /*
    if (typeof window === "undefined") {
      return { url: "/api/trpc" };
    }
    */

    const url = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    return {
      url,
    };
  },
  ssr: false,
})(MyApp);
