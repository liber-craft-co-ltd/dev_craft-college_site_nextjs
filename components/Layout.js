import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../styles/layout.module.css";
export default function Layout({ children, showNav = false, ...props }) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <meta charSet="utf-8" />
          <title>Craft College | AI・データサイエンスを本気で学ぶ</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="Craft College（クラフトカレッジ）は、実務で必要な内容を長期間学習し、未経験からAIエンジニアやデータサイエンティストのスキル獲得を本気で目指すスクール"
          />
          <link rel="icon" href="/images/craft-college_favicoin.jpg"></link>
        </Head>
        <NavBar showNav={showNav} />
        {children}
        <div className={styles.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
}
