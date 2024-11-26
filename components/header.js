"use client";

import Link from "next/link";
// import { usePathname } from "next/navigation";
// import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import styles from "../public/assets/scss//header.module.scss";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menuContainer}>
        <h1 className={styles.logo}>
          <Image
            src="../assets/images/logo.webp"
            alt="Next.js logo"
            width={148}
            height={74}
            priority
          />
        </h1>

        {/* Desktop Links */}
        <div className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
          <Link href="/" className={styles.navItem}>
            Home
          </Link>
          <Link href="/about" className={styles.navItem}>
            About
          </Link>
          <Link href="/services" className={styles.navItem}>
            services
          </Link>
          <Link href="/faqs" className={styles.navItem}>
            faqs
          </Link>
          <Link href="/contact" className={styles.navItem}>
            Contact
          </Link>
        </div>

        {/* Toggle Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          {!isOpen ? (
            <span className={styles.hamburgerIcon}>
              <i class="bi bi-list"></i>
            </span>
          ) : (
            <span className={styles.closeIcon}>
              <i class="bi bi-x"></i>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
