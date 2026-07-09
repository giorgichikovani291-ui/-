import { DeleteIcon } from "./Icons";
import type { CartProps } from "./type";

export default function Cart({
  cartQuantity,
  productName,
  productPrice,
  thumbnail,
  onDelete,
  setCartOpen,
}: CartProps) {
  const total = productPrice * cartQuantity;

  return (
    // გამჭვირვალე ფონი - მასზე დაჭერით კალათა იხურება
    <div className="cart-backdrop" onClick={() => setCartOpen(false)}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <h2>Cart</h2>

        {cartQuantity === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-item">
              <img src={thumbnail} alt={productName} />
              <div className="cart-item-text">
                <p>{productName}</p>
                <p>
                  ${productPrice.toFixed(2)} x {cartQuantity}{" "}
                  <span className="cart-item-total">${total.toFixed(2)}</span>
                </p>
              </div>
              <button onClick={onDelete} aria-label="პროდუქტის წაშლა">
                <DeleteIcon />
              </button>
            </div>

            <button className="checkout-btn">Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}
