/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";
import { FC, ReactNode } from "react";
import Link from "next/link";

const name = "takuya noguchi";
export const siteTitle = "Next.js blog";

type props = {
  children: ReactNode;
  home?: boolean;
};

const Layout: FC<props> = ({ children, home }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {home ? (
        <>
          <header className={styles.header}>
            <img
              src="/images/profile.png"
              alt=""
              className={`${utilsStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilsStyles.heading2Xl}>{name}</h1>
          </header>
        </>
      ) : (
        <header className={styles.header}>
          <img
            src="/images/profile.png"
            alt=""
            className={`${utilsStyles.borderCircle} ${styles.headerImage}`}
          />
          <h1 className={utilsStyles.heading2Xl}>{name}</h1>
        </header>
      )}
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">←　ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
