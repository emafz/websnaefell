import { useEffect, useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => setActiveImage(0), [images]);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img src={images[activeImage]} alt={`${alt}, vista ${activeImage + 1}`} />
      </div>
      {images.length > 1 && (
        <div className="product-gallery__thumbs" aria-label={`Galeria de ${alt}`}>
          {images.map((image, index) => (
            <button
              className={index === activeImage ? "is-active" : ""}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
              aria-current={index === activeImage ? "true" : undefined}
              key={`${image}-${index}`}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
