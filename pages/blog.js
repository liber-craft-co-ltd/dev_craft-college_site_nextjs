import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Layout from "../components/Layout";
import styles from "../styles/blog.module.css";
import { client } from "../libs/client";
import Link from "next/link";

export default function Blog({ blog }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const convertDate = (time) => {
    return dayjs.utc(time).tz("Asia/Tokyo").format("YYYY-MM-DD");
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <Layout>
      <main className={styles.container}>
        <h1 className={styles.pageTitle}>ブログ</h1>
        <div className={styles.inner}>
          <div className={styles.blogListContainer}>
            <ul className={styles.ulList}>
              {blog.map((blog) => (
                <li key={blog.id} className={styles.listName}>
                  <Link href={`/blog/${blog.id}`}>
                    <a className={styles.blogTitle}>{blog.title}</a>
                  </Link>
                  <br />
                  <p className={styles.listDate}>
                    {convertDate(blog.createdAt)}
                  </p>
                </li>
              ))}
            </ul>
          </div>
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
