import "./App.css";
import { Navbar } from "components";
import { Cart, Products } from "pages";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className='App'>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
