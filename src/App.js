import "./App.css";
import { Navbar, ProductCard } from "components";
import data from "utils/data.json";

function App() {
  console.log(data);
  return (
    <div className='App'>
      <Navbar />
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

export default App;
