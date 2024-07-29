import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import ProductSection from "./Components/ProductSection/ProductSection";
import Toast from "./Components/Toast/Toast";
import Cart from "./Components/Cart/Cart";
import products from "./data/products";
import ProductsContext from "./Contexts/ProductContext";

function App() {
  const [allProducts, setAllProducts] = useState(products);
  const [userCart, setUserCart] = useState([]);
  const [isShowToast, setIsShowToast] = useState(false);
  const [isShowCart, setIsShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  return (
    <div>
      <ProductsContext.Provider
        value={{
          allProducts,
          userCart,
          setUserCart,
          isShowToast,
          setIsShowToast,
          isShowCart,
          setIsShowCart,
          cartCount,
          setCartCount
        }}
      >
        <Navbar />
        <main className="pb-5">
          <div className="container">
            <h1 className="text-center main-title">
              All Products
              <ProductSection />
            </h1>
          </div>
          <Toast />
          <Cart />
        </main>
        ;
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
