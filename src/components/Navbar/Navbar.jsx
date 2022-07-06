import React from "react";
import styles from "./navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>Flipkart</h3>
      <ul className={styles.navbarItems}>
        <li>Ankit is logged in</li>
      </ul>
    </nav>
  );
}
