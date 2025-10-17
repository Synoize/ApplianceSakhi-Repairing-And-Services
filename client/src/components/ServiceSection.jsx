import React from "react";
import { services } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ServiceSection = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center px-6 md:px-12 py-14">
      <div className="text-center max-w-3xl mb-14">
        <h1 className="text-2xl md:text-4xl font-medium mb-8">
          Home Appliance Services
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Looking for reliable and affordable home appliance repair services in
          Patna? We provide expert solutions for all your home appliance needs,
          ensuring they stay in top condition and serve you well for years.
        </p>
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-blue-700/10 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 text-center">
              <h2 className="text-lg font-medium mb-3 text-gray-900">
                {service.title}
              </h2>
              <button onClick={() => {navigate("/book-services"), scrollTo(0,0)}} className="bg-yellow-400 px-5 py-2 rounded hover:bg-yellow-400/80 transition-all cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
