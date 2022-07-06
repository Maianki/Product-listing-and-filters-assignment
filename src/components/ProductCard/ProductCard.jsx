import React from "react";

export function ProductCard({ product }) {
  console.log(product);
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
        <button className='card-btn btn btn-primary'>
          <i className='fas fa-cart-plus'></i>
          <span className='md-ht-1'>ADD TO CART</span>
        </button>
      </div>
    </div>
  );
}
