import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import VersionHome from "./versioning/VersionHome";
import "./versioning/VersionHome.css";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
const path = window.location.pathname.slice(base.length);
const version = path.match(/^\/version-(1|2)(?:\/|$)/)?.[1];
const root = createRoot(document.getElementById("root")!);

async function start() {
  if (path === "" || path === "/") {
    root.render(<StrictMode><VersionHome base={base} /></StrictMode>);
    return;
  }
  // Separate entries keep each version's components, data and styles independent.
  const { default: App } = version === "2"
    ? await import("./versions/version-2/entry")
    : await import("./store-entry");
  root.render(
    <StrictMode>
      <BrowserRouter basename={`${base}${version ? `/version-${version}` : ""}`}>
        <nav className="version-switch" aria-label="Versiones de la tienda">
          <a href={`${base}/`}>Elegir versión</a>
          <span>Versión {version === "2" ? "2.0" : "1.0"}</span>
        </nav>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}

void start();
