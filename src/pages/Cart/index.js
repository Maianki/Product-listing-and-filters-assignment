import { CartProductCard, OrderSummaryCard } from "components";
import { useCart } from "context/cart-context";
import styles from "./cart.module.css";

function Cart() {
  const {
    cartState: { cart, saveToLater },
  } = useCart();
  return (
    <main className={styles.main}>
      <div>
        <section className={styles.carts}>
          <h1 className='text-center'>Items in cart : {cart.length}</h1>
          {cart?.map((product) => {
            return <CartProductCard key={product.id} product={product} />;
          })}
          {cart.length === 0 && <h3 className='text-center'>Cart is empty!</h3>}
        </section>
        <section>
          <h1 className='text-center'>Saved for later: {saveToLater.length}</h1>
          {saveToLater?.map((product) => {
            return (
              <CartProductCard
                key={product.id}
                product={product}
                isSaveToLater='true'
              />
            );
          })}
          {saveToLater.length === 0 && (
            <h3 className='text-center'>No items in save later</h3>
          )}
        </section>
      </div>

      <section>{cart.length > 0 && <OrderSummaryCard />}</section>
    </main>
  );
}

export { Cart };
