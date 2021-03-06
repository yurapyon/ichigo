import type { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "./api/trpc/[trpc]";

import Header from "../lib/Header";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head> </Head>
      <div className="container max-w-full mx-auto flex flex-col">
        <Header session={pageProps.session} />
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
