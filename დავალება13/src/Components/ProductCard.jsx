import React from "react";

export default function ProductCard({ product, onAddToCart }) {
  const isElectronics = product.category === "Electronics";
  const cardClass = isElectronics
    ? "card electronics-card"
    : "card default-card";

  return (
    <div className={cardClass}>
      <h2>{product.title}</h2>
      <p>
        კატეგორია: <div>{product.category}</div>
      </p>
      <p>ფასი: {product.price}$</p>

      <button className="add-btn" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
