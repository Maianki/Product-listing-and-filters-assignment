import React from "react";
import styles from "./filter.module.css";

export function Filter() {
  return (
    <aside className={`card ${styles.sidebar}`}>
      <button className='btn btn-danger'>Clear</button>
      <p>PRICE</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='radio'
            id='low-to-high'
            name='price-filter'
            value='option1'
            checked
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
            value='option1'
            checked
          />
          <label className='form-label-inline' htmlFor='high-to-low'>
            High to low
          </label>
        </li>
      </ol>

      <hr></hr>
      <p>BRANDS</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='FTX'
            checked
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
            checked
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
            checked
          />
          <label className='form-label-inline' htmlFor='VILLAGIUS'>
            VILLAGIUS
          </label>
        </li>
      </ol>

      <hr></hr>
      <p>IDEAL FOR</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='men'
            checked
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
            checked
          />
          <label className='form-label-inline' htmlFor='women'>
            Women
          </label>
        </li>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='girl'
            checked
          />
          <label className='form-label-inline' htmlFor='girl'>
            Girl
          </label>
        </li>
      </ol>

      <hr></hr>
      <p>SIZE</p>
      <ol className='list-unstyled'>
        <li className='form-check md-vt-1'>
          <input
            className='form-check-input'
            type='checkbox'
            id='small'
            checked
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
            checked
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
            checked
          />
          <label className='form-label-inline' htmlFor='Medium'>
            Medium
          </label>
        </li>
      </ol>
    </aside>
  );
}
