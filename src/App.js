import "./App.css";
import { Navbar, ProductCard, Filter } from "components";
import { useFiltered } from "hooks/useFiltered";

function App() {
  const { data } = useFiltered();
  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <Filter />
        <section className='products-display'>
          {data.length > 0 ? (
            data?.map((product) => (
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
