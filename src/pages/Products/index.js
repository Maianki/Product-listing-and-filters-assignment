import React from "react";
import { ProductCard } from "components";
import data from "utils/data.json";

export default function Products() {
  return (
    <div>
      <main className='main'>
        <section className='products-display'>
          {data?.products?.length > 0 ? (
            data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <h1>No products to display</h1>
          )}
        </section>
      </main>
    </div>
  );
}

export { Products };
