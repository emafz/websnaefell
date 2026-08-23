import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
