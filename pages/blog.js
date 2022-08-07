import dayjs from "dayjs";

import Layout from "../components/Layout";
import styles from "../styles/blog.module.css";
import { client } from "../libs/client";
import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>ブログ</h1>
        <div className={styles.inner}>
          <ul className={styles.ulList}>
            {blog.map((blog) => (
              <li key={blog.id} className={styles.listName}>
                <Link href={`/blog/${blog.id}`}>
                  <a className={styles.listLink}>{blog.title}</a>
                </Link>
                <br />
                <p className={styles.listDate}>{blog.createdAt}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
