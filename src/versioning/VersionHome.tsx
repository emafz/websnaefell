import logo from "../assets/global/snaefell-logo.webp";
import landscape from "../assets/home/paisaje.webp";

export default function VersionHome({ base }: { base: string }) {
  return (
    <main className="version-home">
      <div className="version-home__landscape" style={{ backgroundImage: `url(${landscape})` }} />
      <div className="version-home__content">
        <img className="version-home__logo" src={logo} alt="Snaefell" />
        <h1>Elegí tu versión.</h1>
        <p>Dos caminos para explorar Snaefell.</p>
        <div className="version-home__options">
          <a className="version-home__option" href={`${base}/version-1/`}>
            <h2>Versión 1.0</h2><span>Entrar a la tienda</span>
          </a>
          <a className="version-home__option" href={`${base}/version-2/`}>
            <h2>Versión 2.0</h2><span>Entrar a la tienda</span>
          </a>
        </div>
      </div>
    </main>
  );
}
