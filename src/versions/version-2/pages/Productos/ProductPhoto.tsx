import "./BestrideF1Showcase.css";

export interface ProductPhotoProps {
  image: string;
  alt: string;
  title: string;
  text: string;
  position?: string;
  studio?: boolean;
}

export default function ProductPhoto({ image, alt, title, text, position = "center", studio = false }: ProductPhotoProps) {
  return (
    <section className={`f1-photo${studio ? " f1-photo--studio" : ""}`}>
      <img className="f1-photo__image" src={image} alt={alt} loading="lazy" decoding="async" style={{ objectPosition: position }} />
      <div className="f1-photo__copy"><h2>{title}</h2><p>{text}</p></div>
    </section>
  );
}
