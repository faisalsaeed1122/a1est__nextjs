import styles from "../public/assets/scss/footer.module.scss";

import Link from "next/link";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__bottom}>
          <div className={styles.number}>
            <i className="bi bi-telephone"></i> +1 (404) 551-2288
          </div>
          <div className={styles.footer__links}>
            <Link href="/">Home</Link>
            <Link className="nav-link" href="/about">
              About
            </Link>
            <Link className="nav-link" href="/services">
              services
            </Link>
            <Link className="nav-link" href="/faqs">
              faqs
            </Link>
            <Link className="nav-link" href="/contact">
              Contact
            </Link>
          </div>

          <ul className={styles.socials}>
            <li className={styles.item}>
              <Link href="">
                <i className="bi bi-facebook"></i>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="">
                <i className="bi bi-instagram"></i>
              </Link>
            </li>
            <li className={styles.item}>
              <Link href="">
                <i className="bi bi-tiktok"></i>
              </Link>
            </li>
          </ul>
        </div>
        <p className={styles.copyright}>Copyright © 2010 - 2024 a1est.com</p>
      </div>
    </footer>
  );
}
export default Footer;
