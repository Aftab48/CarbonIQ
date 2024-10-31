import Footer from "./sections/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import Rewards from "./pages/Rewards";

export default function App() {
  return (
    <Router>
      <main className="overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}
