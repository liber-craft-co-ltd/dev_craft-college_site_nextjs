import { client } from "../../libs/client";
import Layout from "../../components/Layout";
import styles from "../../styles/blog.module.css";

export default function BlogId({ blog }) {
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>{blog.title}</h1>
          <p className={styles.listDate}>{blog.publishedAt}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.body}`,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blog", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
