import Link from "next/link";
const Footer = () => {
  return (
    <footer id="site-footer">
      <ul>
        <li>
          <a
            href="https://liber-craft.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            運営会社
          </a>
        </li>
        <Link href="/terms-of-use">
          <li>
            <a style={{ cursor: "pointer" }}>利用規約</a>
          </li>
        </Link>
        <Link href="/commercial-transactions">
          <li>
            <a style={{ cursor: "pointer" }}>特定商取引法に基づく表記</a>
          </li>
        </Link>
        <Link href="/privacy-policy">
          <li>
            <a style={{ cursor: "pointer" }}>プライバシーポリシー</a>
          </li>
        </Link>
        <li>
          <a
            href="https://liber-craft.co.jp/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            運営会社へのお問合せ
          </a>
        </li>
      </ul>
      <div className="copyright">© LiberCraft Co.,Ltd All rights Reserved</div>
    </footer>
  );
};

export default Footer;
