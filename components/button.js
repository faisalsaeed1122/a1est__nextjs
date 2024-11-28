"use client";
import React from "react";
import styles from "/public/assets/scss/button.module.scss";

export default function Button({
  children,
  variant = "primary",
  disabled = false,
}) {
  return (
    <div className={styles.slidingBtn__outer}>
      <button
        className={`${styles.sliding__btn} ${styles[variant]}`} // Apply base and variant styles
        disabled={disabled} // Handle the disabled state
      >
        <span>{children}</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );
}
