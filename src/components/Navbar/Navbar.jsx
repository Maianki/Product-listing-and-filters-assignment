import React from "react";
import styles from "./navbar.module.css";
import { BsFillCartFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useCart } from "context/cart-context";

export function Navbar() {
  const {
    cartState: { cart },
  } = useCart();
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.headingLink}>
        <h3 className={styles.logo}>Flipkart</h3>
      </NavLink>
      <ul className={`${styles.navbarItems} flex-row`}>
        <NavLink to='/cart' className={styles.cartLink}>
          <li className={`flex-row pd-ht-1 ${styles.cart}`}>
            <div className='badge-container'>
              <BsFillCartFill />
              <span className='badge badge-icon'>{cart.length}</span>
            </div>
            <span className={styles.paddingHorizontal}>Cart</span>
          </li>
        </NavLink>
        <li>Ankit is logged in</li>
      </ul>
    </nav>
  );
}
