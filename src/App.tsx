import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import AnalyticsTracker from "./components/AnalyticsTracker/AnalyticsTracker";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="app-shell">
      <AnalyticsTracker />
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
