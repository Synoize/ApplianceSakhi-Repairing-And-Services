import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, Phone, Mail, MapPin } from "lucide-react";

const Navbar = () => {
  const getActivePage = ({ isActive }) => {
    return {
      color: isActive ? "#3b82f6" : "#000",
    }
  }
  const navigate = useNavigate();
  
  return (
    <div className="border-b border-gray-200">
      {/* Topbar */}
      <div className="bg-gray-900 text-gray-100 text-xs px-4 md:px-12 py-4 ">
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone size={14} /> +1-888-987-6543
            </span>
            <span className="flex items-center gap-1">
              <Mail size={14} /> Mail@youremail.com
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
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue">ApplianceSakhi</div>
          </div>

          <nav className="hidden md:flex space-x-6 ">
            <NavLink to="/" style={getActivePage}>Home</NavLink>
            <NavLink to="/about-us" style={getActivePage}>About Us</NavLink>
            <NavLink to="/services" style={getActivePage}>Services</NavLink>
            <NavLink to="/reviews" style={getActivePage}>Reviews</NavLink>
            <NavLink to="/contact-us" style={getActivePage}>Contact Us</NavLink>
          </nav>

          <button onClick={() => navigate('/book-services')} className="hidden md:block bg-yellow-400 text-gray-900 px-6 py-2 rounded hover:bg-yellow-400/80 cursor-pointer hover:scale-102 transition-all ease-in-out duration-300">
            Book Services
          </button>

          <button className="md:hidden">
            <Menu size={22} />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar