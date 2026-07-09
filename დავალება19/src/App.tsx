import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import Images from "./Components/Images";
import Lightbox from "./Components/Lightbox";
import InfoAndPricing from "./Components/InfoAndPricing";
import images from "./Components/fotoebi";

export default function App() {
  const productName = "Fall Limited Edition Sneakers";
  const productPrice = 125.0;

  // ეს state-ები საერთოა კომპონენტებისთვის, ამიტომ App.tsx-შია დაწერილი
  const [activeImage, setActiveImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(0);

  function handleAddToCart() {
    if (quantity === 0) return;
    setCartQuantity(quantity);
    setQuantity(0);
    setCartOpen(true);
  }

  function handleDeleteFromCart() {
    setCartQuantity(0);
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartQuantity={cartQuantity}
      />

      {menuOpen && <Menu setMenuOpen={setMenuOpen} />}

      {cartOpen && (
        <Cart
          cartQuantity={cartQuantity}
          productName={productName}
          productPrice={productPrice}
          thumbnail={images[0]}
          onDelete={handleDeleteFromCart}
          setCartOpen={setCartOpen}
        />
      )}

      <main className="product">
        <Images
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          setLightboxOpen={setLightboxOpen}
        />

        <InfoAndPricing
          productName={productName}
          productPrice={productPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          onAddToCart={handleAddToCart}
        />
      </main>

      {lightboxOpen && (
        <Lightbox
          activeImage={activeImage}
          setActiveImage={setActiveImage}
          setLightboxOpen={setLightboxOpen}
        />
      )}
    </>
  );
}
