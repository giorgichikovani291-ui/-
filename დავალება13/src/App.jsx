import React, { useState } from "react";
import { products } from "./Components/products";
import ProductCard from "./Components/ProductCard";
import "./App.css";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="app-container">
      <header className="cart-header">
        <h2>კალათა: {cartCount} ნივთი</h2>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
