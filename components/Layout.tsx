/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "./layout.module.css";
import utilsStyles from "../styles/utils.module.css";

const name = "takuya noguchi";
export const siteTitle = "Next.js blog";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <img
          src="/images/profile.png"
          alt=""
          className={utilsStyles.borderCircle}
        />
        <h1>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
