import "./App.css";
import { Navbar, ProductCard, Filter } from "components";
import { useFilter } from "context/filter-context";
import { useFiltered } from "hooks/useFiltered";

function App() {
  const { data } = useFiltered();

  // console.log(data);

  return (
    <div className='App'>
      <Navbar />
      <main className='main'>
        <Filter />
        <section className='products-display'>
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
