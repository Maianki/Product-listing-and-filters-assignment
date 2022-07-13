import { useCart } from "context/cart-context";
import React from "react";
import styles from "./orderSummary.module.css";
import { calculateTotalPrice, calculateDiscountPrice } from "utils";

export function OrderSummaryCard() {
  const {
    cartState: { cart },
  } = useCart();

  const totalPrice = calculateTotalPrice(cart);
  const discountPrice = calculateDiscountPrice(cart);

  return (
    <div className='card'>
      <p className={`pd-ht-1 text-bold-700 text-highlight ${styles.heading}`}>
        PRICE DETAILS
      </p>
      <ol className={styles.orderSummary}>
        <li className={`list-unstyled ${styles.listItem}`}>
          Price ({cart.length}) <span>Rs. {totalPrice.toLocaleString()}</span>
        </li>
        <li className={`list-unstyled ${styles.listItem}`}>
          Discount
          <span className='text-highlight'>
            Rs. {discountPrice.toLocaleString()}
          </span>
        </li>

        <li className={`list-unstyled ${styles.listItem}`}>
          Delivery Charges
          <span className='text-highlight'>FREE</span>
        </li>
      </ol>
      <p className={`pd-ht-1 ${styles.totalAmount}`}>
        <span>Total Amount</span>{" "}
        <span>Rs. {(totalPrice - discountPrice).toLocaleString()}</span>
      </p>
      <p className={"text-sm text-highlight pd-ht-1"}>
        You will save {} on this order.{" "}
      </p>
    </div>
  );
}
