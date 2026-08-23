import { useEffect, useRef, useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => setActiveImage(0), [images]);

  const selectImage = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, images.length - 1));
    setActiveImage(nextIndex);
    thumbsRef.current?.children[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img src={images[activeImage]} alt={`${alt}, vista ${activeImage + 1}`} />
      </div>
      {images.length > 1 && (
        <div className="product-gallery__thumb-navigation">
          {images.length > 6 && (
            <button className="product-gallery__arrow" type="button" onClick={() => selectImage(activeImage - 1)} disabled={activeImage === 0} aria-label="Imagen anterior">&#8592;</button>
          )}
          <div className="product-gallery__thumbs" ref={thumbsRef} aria-label={`Galeria de ${alt}`}>
            {images.map((image, index) => (
              <button
                className={index === activeImage ? "is-active" : ""}
                type="button"
                onClick={() => selectImage(index)}
                aria-label={`Ver imagen ${index + 1} de ${images.length}`}
                aria-current={index === activeImage ? "true" : undefined}
                key={`${image}-${index}`}
              >
                <img src={image} alt="" loading="lazy" />
              </button>
            ))}
          </div>
          {images.length > 6 && (
            <button className="product-gallery__arrow" type="button" onClick={() => selectImage(activeImage + 1)} disabled={activeImage === images.length - 1} aria-label="Imagen siguiente">&#8594;</button>
          )}
        </div>
      )}
    </div>
  );
}
