import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "animate.css";
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Projects from "./Backend/projects";
import Admin from "./Backend/projectadmin";
import ShopDetails from "./Backend/projectdetail";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="font-sans bg-white min-h-screen">
        {/* Sticky Top Bar for Mobile */}
        <div className="sticky top-0 z-50 bg-white px-4 py-3 flex items-center justify-between md:hidden shadow">
          <button
            onClick={() => setMenuOpen(true)}
            className="flex items-center text-gray-800"
          >
            <Menu size={28} />
            <span className="ml-2 text-sm font-medium">Menu</span>
          </button>

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Info@kidsemapthy.org</span>
            <div className="flex gap-2 text-xl">
              <FaFacebook />
              <FaTiktok />
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* Fullscreen Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-6 text-lg font-semibold z-50">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={32} />
            </button>
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
              Home
            </Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
              Projects
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
              Contact Us
            </Link>
            <Link to="/donate" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
              Donate
            </Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-600">
About Us            </Link>
          </div>
        )}

        {/* Main Content */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/donate" element={<Admin />} />
          <Route path="/aboutus" element={<Admin />} />
          <Route path="/projects/:id" element={<ShopDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
