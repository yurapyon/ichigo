import type { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <div className="mx-auto flex flex-col">
      <p>
        <Image src="/logo_words.png" width={380} height={150} />
      </p>
      <p>
        ichigo is an anonymous q+a service for streamers!{" "}
        <Link href="https://github.com/yurapyon/ichigo">ichigo on github</Link>
      </p>
      <h3 className="font-bold">Planned Features:</h3>
      <ul className="list-disc">
        <li>
          provide tools for streamers to organize messages they{"'"}ve recieved
          for presentation on-stream.
          <ul>
            <li>
              provide tools (or integrate with existing tools) to customize the
              look of the presentation.
            </li>
          </ul>
        </li>
        <li>integrate well with existing tools such as OBS.</li>
        <li>screen incoming messages for spam.</li>
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  return {
    props: { session },
  };
};

export default Home;
