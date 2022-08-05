// pages/blog/[id].js
import { client } from "../../libs/client";
import Layout from '../../components/Layout'
import styles from '../../styles/blog.module.css'

export default function BlogId({ blog }) {
  return (
    <Layout>
      <main className={styles.container}>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.body}`,
          }}
        />
      </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  console.log(data)
  return {
    props: {
      blog: data,
    },
  };
};