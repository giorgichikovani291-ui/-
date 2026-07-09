import pirveli from "../assets/pirveli.png";
import meore from "../assets/meore.png";
import mesame from "../assets/mesame.png";
import meotxe from "../assets/meotxe.png";
import { PrevIcon, NextIcon, CloseIcon } from "./Icons";
import type { LightboxProps } from "./type";

const images = [pirveli, meore, mesame, meotxe];

export default function Lightbox({
  activeImage,
  setActiveImage,
  setLightboxOpen,
}: LightboxProps) {
  function showPrev() {
    setActiveImage(activeImage === 0 ? images.length - 1 : activeImage - 1);
  }

  function showNext() {
    setActiveImage(activeImage === images.length - 1 ? 0 : activeImage + 1);
  }

  return (
    // ეს მოდალი CSS-ით მხოლოდ დესქტოპზეა ხილული
    <div className="lightbox-backdrop" onClick={() => setLightboxOpen(false)}>
      <div className="lightbox" onClick={(e) => e.stopPropagation()}>
        <button
          className="lightbox-close"
          onClick={() => setLightboxOpen(false)}
          aria-label="დახურვა"
        >
          <CloseIcon />
        </button>

        <div className="main-image-wrap">
          <img
            src={images[activeImage]}
            alt="სნიკერსის ფოტო გადიდებული"
            className="main-image"
          />
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
    </div>
  );
}
