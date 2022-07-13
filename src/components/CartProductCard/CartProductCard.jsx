import React from "react";
import styles from "./CartProduct.module.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_SAVE_LATER,
  REMOVE_FROM_SAVE_LATER,
  MANAGE_QTY,
} from "utils/CartActions";
import toast from "react-hot-toast";
import { useCart } from "context/cart-context";

export function CartProductCard({ product, isSaveToLater = false }) {
  const {
    cartDispatcher,
    cartState: { cart },
  } = useCart();

  const handleSaveLater = () => {
    cartDispatcher({ type: ADD_TO_SAVE_LATER, payload: product });
    cartDispatcher({ type: REMOVE_FROM_CART, payload: product });
  };

  const handleMoveToCart = () => {
    if (cart.find(({ id }) => id === product.id)) {
      toast.error("Item already in cart");
    } else {
      cartDispatcher({ type: ADD_TO_CART, payload: product });
    }
  };
  return (
    <div className='align-items-center card-horizontal'>
      <div className='card-header'>
        <img
          className='card-img card-horizontal-img'
          src={product?.img}
          alt=''
        />
      </div>
      <div className='md-ht-1 card-body'>
        <h3>{product?.name}</h3>
        <p className='md-ht-1'>
          Rs.{product?.price}
          <span className='card-discount pd-ht-1'>
            | Size : {product?.size}
          </span>
        </p>
        {!isSaveToLater && (
          <div className={`${styles.qtySection} pd-ht-1 md-vt-1`}>
            <AiFillMinusCircle
              className={styles.qtyBtn}
              role='button'
              onClick={() =>
                cartDispatcher({
                  type: MANAGE_QTY,
                  payload: { product, qty: product.qty - 1 },
                })
              }
            />
            <span>
              <input
                type='number'
                min='1'
                className={styles.qtyInput}
                onChange={(e) =>
                  cartDispatcher({
                    type: MANAGE_QTY,
                    payload: { product, qty: e.target.value },
                  })
                }
                value={product.qty}
              />
            </span>
            <AiFillPlusCircle
              className={styles.qtyBtn}
              onClick={() =>
                cartDispatcher({
                  type: MANAGE_QTY,
                  payload: { product, qty: product.qty + 1 },
                })
              }
            />
          </div>
        )}

        <div className='card-horizontal-footer'>
          {!isSaveToLater ? (
            <>
              <button
                className='card-horizontal-btn btn btn-primary'
                onClick={handleSaveLater}
              >
                <span className='md-ht-1'>Save to later</span>
              </button>
              <button
                className='card-horizontal-btn btn btn-outline-primary'
                onClick={() =>
                  cartDispatcher({ type: REMOVE_FROM_CART, payload: product })
                }
              >
                <span className='md-ht-1'>Remove from cart</span>
              </button>{" "}
            </>
          ) : (
            <>
              <button
                className='card-horizontal-btn btn btn-primary'
                onClick={handleMoveToCart}
              >
                <span className='md-ht-1'>Move to cart</span>
              </button>
              <button
                className='card-horizontal-btn btn btn-outline-primary'
                onClick={() =>
                  cartDispatcher({
                    type: REMOVE_FROM_SAVE_LATER,
                    payload: product,
                  })
                }
              >
                <span className='md-ht-1'>Remove from save later</span>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
