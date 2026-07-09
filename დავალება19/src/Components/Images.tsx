import pirveli from "../assets/pirveli.png";
import meore from "../assets/meore.png";
import mesame from "../assets/mesame.png";
import meotxe from "../assets/meotxe.png";
import { PrevIcon, NextIcon } from "./Icons";
import type { ImagesProps } from "./type";

const images = [pirveli, meore, mesame, meotxe];

export default function Images({
  activeImage,
  setActiveImage,
  setLightboxOpen,
}: ImagesProps) {
  function showPrev() {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  }

  function showNext() {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
  }

  return (
    <div className="gallery">
      <div className="main-image-wrap">
        <img
          src={images[activeImage]}
          alt="სნიკერსის ფოტო"
          className="main-image"
          // დესქტოპზე მთავარ სურათზე დაჭერა ხსნის lightbox-ს
          onClick={() => setLightboxOpen(true)}
        />

        {/* ისრები CSS-ით მხოლოდ მობილურზეა ხილული */}
        <button
          className="arrow arrow-left"
          onClick={showPrev}
          aria-label="წინა სურათი"
        >
          <PrevIcon />
        </button>
        <button
          className="arrow arrow-right"
          onClick={showNext}
          aria-label="შემდეგი სურათი"
        >
          <NextIcon />
        </button>
      </div>

      {/* მინიატურები CSS-ით მხოლოდ დესქტოპზეა ხილული */}
      <div className="thumbnails">
        {images.map((src, index) => (
          <button
            key={index}
            className={
              "thumbnail-btn" + (index === activeImage ? " active" : "")
            }
            onClick={() => setActiveImage(index)}
          >
            <img src={src} alt={`მინიატურა ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
