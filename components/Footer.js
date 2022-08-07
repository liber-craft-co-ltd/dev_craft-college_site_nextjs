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
        <li>
          <Link href="/terms-of-use">
            <a>利用規約</a>
          </Link>
        </li>
        <li>
          <Link href="/commercial-transactions">
            <a style={{ cursor: "pointer" }}>特定商取引法に基づく表記</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy-policy">
            <a style={{ cursor: "pointer" }}>プライバシーポリシー</a>
          </Link>
        </li>
        <li>
          <Link href="https://liber-craft.co.jp/contact">
            <a target="_blank" rel="noopener noreferrer">
              運営会社へのお問合せ
            </a>
          </Link>
        </li>
      </ul>
      <div className="copyright">© LiberCraft Co.,Ltd All rights Reserved</div>
    </footer>
  );
};

export default Footer;
