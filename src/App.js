import "./App.css";
import { Navbar, ProductCard, Filter } from "components";
import data from "utils/data.json";

function App() {
  const filteredData = data.products;
  console.log(filteredData);
  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <Filter />
        <section className='products-display'>
          {filteredData?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
