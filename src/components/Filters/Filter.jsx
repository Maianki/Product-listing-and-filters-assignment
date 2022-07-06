import React from "react";
import styles from "./filter.module.css";
import { useFilter } from "context/filter-context";
import { BRANDS, IDEALFOR, PRICE, SIZES, CLEARALL } from "utils/filterActions";

export function Filter() {
  const { dispatchFilters, filteredProducts } = useFilter();

  console.log(filteredProducts);
  return (
    <aside className={`card ${styles.sidebar}`}>
      <button
        className='btn btn-danger'
        onClick={() => dispatchFilters({ type: CLEARALL })}
      >
        Clear
      </button>
      <p className='pd-ht-1'>PRICE</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='radio'
            id='low-to-high'
            name='price-filter'
            value='low-to-high'
            onChange={() =>
              dispatchFilters({ type: PRICE, payload: "lowToHigh" })
            }
            checked={filteredProducts.price === "lowToHigh"}
          />
          <label className='form-label-inline' htmlFor='low-to-high'>
            Low to high
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='radio'
            id='high-to-low'
            name='price-filter'
            value='high-to-low'
            onChange={() =>
              dispatchFilters({ type: PRICE, payload: "highToLow" })
            }
            checked={filteredProducts.price === "highToLow"}
          />
          <label className='form-label-inline' htmlFor='high-to-low'>
            High to low
          </label>
        </li>
      </ol>

      <hr></hr>
      <p className='pd-ht-1'>BRANDS</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='FTX'
            checked={filteredProducts.brands.includes("FTX")}
            onChange={() => dispatchFilters({ type: BRANDS, payload: "FTX" })}
          />
          <label className='form-label-inline' htmlFor='FTX'>
            FTX
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='FARBOT'
            checked={filteredProducts.brands.includes("FARBOT")}
            onChange={() =>
              dispatchFilters({ type: BRANDS, payload: "FARBOT" })
            }
          />
          <label className='form-label-inline' htmlFor='FARBOT'>
            FARBOT
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='VILLAGIUS'
            checked={filteredProducts.brands.includes("VILLAGIUS")}
            onChange={() =>
              dispatchFilters({ type: BRANDS, payload: "VILLAGIUS" })
            }
          />
          <label className='form-label-inline' htmlFor='VILLAGIUS'>
            VILLAGIUS
          </label>
        </li>
      </ol>

      <hr></hr>
      <p className='pd-ht-1'>IDEAL FOR</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='men'
            checked={filteredProducts.idealFor.includes("men")}
            onChange={() => dispatchFilters({ type: IDEALFOR, payload: "men" })}
          />
          <label className='form-label-inline' htmlFor='men'>
            Men
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='women'
            checked={filteredProducts.idealFor.includes("women")}
            onChange={() =>
              dispatchFilters({ type: IDEALFOR, payload: "women" })
            }
          />
          <label className='form-label-inline' htmlFor='women'>
            Women
          </label>
        </li>
      </ol>

      <hr></hr>
      <p className='pd-ht-1'>SIZE</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='small'
            checked={filteredProducts.sizes.includes("S")}
            onChange={() => dispatchFilters({ type: SIZES, payload: "S" })}
          />
          <label className='form-label-inline' htmlFor='small'>
            Small
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='Large'
            checked={filteredProducts.sizes.includes("L")}
            onChange={() => dispatchFilters({ type: SIZES, payload: "L" })}
          />
          <label className='form-label-inline' htmlFor='Large'>
            Large
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='Medium'
            checked={filteredProducts.sizes.includes("M")}
            onChange={() => dispatchFilters({ type: SIZES, payload: "M" })}
          />
          <label className='form-label-inline' htmlFor='Medium'>
            Medium
          </label>
        </li>
      </ol>
    </aside>
  );
}
