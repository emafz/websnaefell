import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import "./ProductGallery.css";

export default function ProductGallery({ images, alt }: { images: string[]; alt: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setActiveImage(0);
    setZoomOpen(false);
  }, [images]);

  const selectImage = (index: number) => {
    const nextIndex = (index + images.length) % images.length;
    setActiveImage(nextIndex);
    thumbsRef.current?.children[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const openZoom = () => {
    if (window.matchMedia("(min-width: 701px)").matches) setZoomOpen(true);
  };

  useEffect(() => {
    if (!zoomOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoomOpen(false);
      if (event.key === "ArrowLeft") setActiveImage((current) => (current - 1 + images.length) % images.length);
      if (event.key === "ArrowRight") setActiveImage((current) => (current + 1) % images.length);
    };
    const desktopQuery = window.matchMedia("(min-width: 701px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (!event.matches) setZoomOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [zoomOpen, images.length]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const distance = (event.changedTouches[0]?.clientX ?? touchStartX.current) - touchStartX.current;
    if (Math.abs(distance) > 45) selectImage(activeImage + (distance < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  const navigationControls = images.length > 1 && <>
    <button className="product-gallery__control product-gallery__control--previous" type="button" onClick={() => selectImage(activeImage - 1)} aria-label="Imagen anterior"><ChevronLeft aria-hidden="true" /></button>
    <button className="product-gallery__control product-gallery__control--next" type="button" onClick={() => selectImage(activeImage + 1)} aria-label="Imagen siguiente"><ChevronRight aria-hidden="true" /></button>
  </>;

  return (
    <div className="product-gallery">
      <div className="product-gallery__main" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <img className="product-gallery__main-image" src={images[activeImage]} alt={`${alt}, vista ${activeImage + 1}`} />
        {navigationControls}
        <button className="product-gallery__zoom" type="button" onClick={openZoom} aria-label="Ampliar imagen a pantalla completa"><Search aria-hidden="true" /></button>
        {images.length > 1 && <span className="product-gallery__count" aria-live="polite">{activeImage + 1} / {images.length}</span>}
      </div>

      {images.length > 1 && (
        <div className="product-gallery__thumbs" ref={thumbsRef} aria-label={`Galería de ${alt}`}>
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
      )}

      {zoomOpen && createPortal(
        <div className="product-gallery__lightbox" role="dialog" aria-modal="true" aria-label={`Vista ampliada de ${alt}`} onMouseDown={() => setZoomOpen(false)}>
          <button ref={closeButtonRef} className="product-gallery__lightbox-close" type="button" onClick={() => setZoomOpen(false)} aria-label="Cerrar vista ampliada"><X aria-hidden="true" /></button>
          <div className="product-gallery__lightbox-content" onMouseDown={(event) => event.stopPropagation()}>
            <img src={images[activeImage]} alt={`${alt}, vista ampliada ${activeImage + 1}`} />
            {images.length > 1 && <>
              <button className="product-gallery__lightbox-arrow product-gallery__lightbox-arrow--previous" type="button" onClick={() => selectImage(activeImage - 1)} aria-label="Imagen anterior"><ChevronLeft aria-hidden="true" /></button>
              <button className="product-gallery__lightbox-arrow product-gallery__lightbox-arrow--next" type="button" onClick={() => selectImage(activeImage + 1)} aria-label="Imagen siguiente"><ChevronRight aria-hidden="true" /></button>
              <span className="product-gallery__lightbox-count">{activeImage + 1} / {images.length}</span>
            </>}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
