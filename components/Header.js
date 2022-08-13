import Link from "next/link";
import Image from "next/image";
import { Link as Scroll } from "react-scroll";

const Header = ({ showNav = false }) => {
  return (
    <header id="site-header">
      <h1 className="logo-craft-college">
        <Link href="/">
          <a>
            <div
              style={{ position: "relative", width: "100%", height: "52.25px" }}
            >
              <Image
                src="/images/1_craft_college_logo.png"
                alt="Craft College Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
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

export default Header;
