import Link from "next/link";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { client } from "../../libs/client";
import Layout from "../../components/Layout";
import styles from "../../styles/blog.module.css";

export default function BlogId({ blog }) {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const convertDate = (time) => {
    return dayjs.utc(time).tz("Asia/Tokyo").format("YYYY-MM-DD");
  };
  return (
    <Layout>
      <main className={styles.container}>
        <div className={styles.inner}>
          <h1 className={`heading_1 {styles.pageTitle}`}>{blog.title}</h1>
          <p className={styles.listDate}>{convertDate(blog.createdAt)}</p>
          <div
            className={styles.blogContainer}
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
          <Link href="/blog">
            <a className={styles.backLink}>←ブログ一覧へ</a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
};
