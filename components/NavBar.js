import Link from "next/link";
import { Link as Scroll } from "react-scroll";
import styles from "../styles/navBar.module.css";

const NavBar = ({ showNav = false }) => {
  return (
    <header id="site-header">
      <h1 className={`${styles.logo_title} logo-craft-college`}>
        <Link href="/">
          <a>
            <img
              src="/images/1_craft_college_logo.png"
              alt="Craft College（クラフトカレッジ）"
            />
          </a>
        </Link>
      </h1>
      {showNav && (
        <>
          <input
            type="checkbox"
            name="nav-toggle"
            id="nav-toggle"
            className="nav-toggle"
          />
          <label htmlFor="nav-toggle" className="btn-burger">
            <span className="icon"></span>
          </label>
          <nav>
            <ul>
              <li>
                <Scroll href="" to="features" smooth={true}>
                  サービス特徴
                </Scroll>
              </li>
              <li>
                <Scroll href="" to="curriculum-goal" smooth={true}>
                  到達目標
                </Scroll>
              </li>
              <li>
                <Scroll href="" to="learning-curriculum" smooth={true}>
                  学習カリキュラム
                </Scroll>
              </li>
              <li>
                <Scroll href="price" to="price" smooth={true}>
                  料金
                </Scroll>
              </li>
              <li>
                <Scroll href="" to="faq" smooth={true}>
                  FAQ
                </Scroll>
              </li>
              <li>
                <Link href="/blog">
                  <a>ブログ</a>
                </Link>
              </li>
              <li>
                <button type="button" className="nav-button-jump-to-inquiry">
                  <a href="#inquiry-conversion-area">無料説明会</a>
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default NavBar;
