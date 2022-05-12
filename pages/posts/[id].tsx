import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";
import utilStyles from "../../styles/utils.module.css";

export function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <p className={utilStyles.lightText}>{postData.date}</p>
        {/* セキュリティ的に脆弱性がある。HTMLを実行してしまう。サニタイズ等が必要。 */}
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHtml }} />
      </article>
    </Layout>
  );
}
