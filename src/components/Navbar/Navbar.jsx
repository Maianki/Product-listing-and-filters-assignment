import React from "react";
import styles from "./navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.logo}>Flipkart</h3>
      <ul className={`${styles.navbarItems} flex-row`}>
        <li className={`flex-row pd-ht-1 ${styles.cart}`}>
          <div className='badge-container'>
            <BsFillCartFill />
            <span className='badge badge-icon'>5</span>
          </div>
          <span className={styles.paddingHorizontal}>Cart</span>
        </li>
        <li>Ankit is logged in</li>
      </ul>
    </nav>
  );
}
