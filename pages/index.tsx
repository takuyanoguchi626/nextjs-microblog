import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// //SSRの場合
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       //コンポーネントの渡すためのprops
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <section className={utilStyles.headingMd}>
          <p>
            私はフロントエンドエンジニアです。会社員として働いています。好きな言語はTypeScriptです。
          </p>
        </section>
        <section className={styles.main}>
          <h2>📝エンジニアのブログ</h2>
          <div className={styles.grid}>
            {allPostsData.map(({ id, title, date, thumbnail }) => (
              <article key={id}>
                <Link href={`posts/${id}`}>
                  <img
                    src={`${thumbnail}`}
                    alt=""
                    className={styles.thumbnailImage}
                  />
                </Link>
                <Link href={`posts/${id}`}>
                  <a className={utilStyles.boldText}>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
