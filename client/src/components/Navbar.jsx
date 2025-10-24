import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const getActivePage = ({ isActive }) => ({
    color: isActive ? "#3b82f6" : "#000",
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="border-b border-gray-200">
      <div className="bg-gray-900 text-gray-100 text-xs px-4 md:px-12 py-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +91 9708516375
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> appliancesakhi@gmail.com
            </span>
          </div>
          <span className="flex items-center gap-1 mt-1 sm:mt-0">
            <MapPin size={14} /> Brahampur Bazar, Phulwari, Patna, 801505
          </span>
        </div>
      </div>

      {/* Navbar */}
      <header>
        <div className="flex items-center justify-between px-4 md:px-12 py-4">
          <span className="cursor-pointer" onClick={() => navigate(-1)} >
            <img src={assets.logo} alt="appliancesakhi" className="h-10 md:h-14" />
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" style={getActivePage}>
              Home
            </NavLink>
            <NavLink to="/about-us" style={getActivePage}>
              About Us
            </NavLink>
            <NavLink to="/services" style={getActivePage}>
              Services
            </NavLink>
            <NavLink to="/reviews" style={getActivePage}>
              Reviews
            </NavLink>
            <NavLink to="/contact-us" style={getActivePage}>
              Contact Us
            </NavLink>
          </nav>

          <button
            onClick={() => navigate("/book-services")}
            className="hidden md:block bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-400/80 cursor-pointer hover:scale-105 transition-all ease-in-out duration-300"
          >
            Book Services
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700 z-50 cursor-pointer"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 space-y-4 px-28 py-8 fixed h-full w-full z-40 flex flex-col items-center  animate-slideDown">
            <NavLink to="/" style={getActivePage} onClick={() => setMenuOpen(false)} className="w-full rounded-full text-center px-4 py-2 hover:bg-gray-50">
              Home
            </NavLink>
            <NavLink to="/about-us" style={getActivePage} onClick={() => setMenuOpen(false)} className="w-full rounded-full text-center px-4 py-2 hover:bg-gray-50">
              About Us
            </NavLink>
            <NavLink to="/services" style={getActivePage} onClick={() => setMenuOpen(false)} className="w-full rounded-full text-center px-4 py-2 hover:bg-gray-50">
              Services
            </NavLink>
            <NavLink to="/reviews" style={getActivePage} onClick={() => setMenuOpen(false)} className="w-full rounded-full text-center px-4 py-2 hover:bg-gray-50">
              Reviews
            </NavLink>
            <NavLink to="/contact-us" style={getActivePage} onClick={() => setMenuOpen(false)} className="w-full rounded-full text-center px-4 py-2 hover:bg-gray-50">
              Contact Us
            </NavLink>

            <button
              onClick={() => {
                navigate("/book-services");
                setMenuOpen(false);
              }}
              className="block w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded-full cursor-pointer text-center hover:bg-yellow-400/80 transition-all"
            >
              Book Services
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
