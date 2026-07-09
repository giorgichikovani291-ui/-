import { CartIcon } from "./Icons";
import type { InfoAndPricingProps } from "./type";

export default function InfoAndPricing({
  productName,
  productPrice,
  quantity,
  setQuantity,
  onAddToCart,
}: InfoAndPricingProps) {
  function decrease() {
    if (quantity > 0) setQuantity(quantity - 1);
  }

  function increase() {
    setQuantity(quantity + 1);
  }

  return (
    <section className="product-info">
      <p className="company">Sneaker Company</p>
      <h1>{productName}</h1>
      <p className="description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>

      <div className="price-row">
        <span className="price">${productPrice.toFixed(2)}</span>
        <span className="discount">50%</span>
      </div>
      <span className="old-price">$250.00</span>

      <div className="cart-row">
        <div className="quantity">
          <button onClick={decrease} aria-label="რაოდენობის შემცირება">
            -
          </button>
          <span>{quantity}</span>
          <button onClick={increase} aria-label="რაოდენობის გაზრდა">
            +
          </button>
        </div>

        <button className="add-to-cart" onClick={onAddToCart}>
          <CartIcon color="#fff" />
          Add to cart
        </button>
      </div>
    </section>
  );
}
