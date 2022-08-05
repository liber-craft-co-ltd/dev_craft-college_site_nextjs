import Layout from '../components/Layout'
import styles from '../styles/blog.module.css'
import { client } from '../libs/client'
import Link from "next/link";

export default function Blog({ blog }) {
  return (
    <Layout>
      <main className={styles.container}>
        <h1>ブログ</h1>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  )
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