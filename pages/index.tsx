import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Header from "../lib/Header.tsx";
import styles from "../styles/Submit.module.css";

const Home: NextPage = ({ feed }) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.home}>
        <p>
          <Image src="/logo_words.png" width={380} height={150} />
        </p>
        <p>
          ichigo is an anonymous q+a service for streamers!{" "}
          <Link href="https://github.com/yurapyon/ichigo">
            ichigo on github
          </Link>
        </p>
        <h3>Planned Features:</h3>
        <ul>
          <li>
            provide tools for streamers to organize messages they've recieved for
            presentation on-stream.
            <ul>
              <li>
                provide tools (or integrate with existing tools) to customize
                the look of the presentation.
              </li>
            </ul>
          </li>
          <li>integrate well with existing tools such as OBS.</li>
          <li>
            screen incoming messages for spam, inappropriate messages and hate
            mail.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
