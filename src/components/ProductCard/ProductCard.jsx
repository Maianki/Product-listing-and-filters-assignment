import React from "react";
import { useCart } from "context/cart-context";
import { ADD_TO_CART } from "utils/CartActions";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const {
    cartDispatcher,
    cartState: { cart },
  } = useCart();

  return (
    <div className='card align-items-center'>
      <div className='card-header'>
        <img className='card-img' src={product?.img} alt='' />
      </div>
      <div className='card-body'>
        <h3>{product?.name}</h3>
        <p className='card-description'>
          <span>{product?.brand}</span> | <span>Size - {product?.size}</span> |
          <span>{product?.idealFor === "men" ? "Men Wear" : "Women Wear"}</span>
        </p>
        <p className='md-ht-1'>Rs. {product?.price}</p>
      </div>
      <div className='card-footer'>
        {cart.find(({ id }) => id === product.id) ? (
          <>
            <Link to='/cart'>
              <button className='card-btn btn btn-secondary'>
                <span className='md-ht-1'>GO TO CART</span>
              </button>
            </Link>
          </>
        ) : (
          <>
            <button
              className='card-btn btn btn-primary'
              onClick={() =>
                cartDispatcher({ type: ADD_TO_CART, payload: product })
              }
            >
              <span className='md-ht-1'>ADD TO CART</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
