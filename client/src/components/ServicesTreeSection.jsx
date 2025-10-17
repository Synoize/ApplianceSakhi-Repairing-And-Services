import React from "react";
import { services } from "../assets/assets";

const ServicesTreeSection = () => {
  return <div className="max-w-6xl mx-auto px-6 md:px-12 py-14">
    <h2 className="text-3xl md:text-4xl font-medium text-center mb-4">
      Best Repair Services in Patna
    </h2>
    <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
      Are you looking for reliable <strong>repair services in Patna?</strong>
      We offer expert <strong>repair, and maintenance</strong>
      for a wide range of electronic devices, ensuring optimal performance and longevity.
    </p>
    <div className="flex flex-col gap-12 md:gap-20">
      {
        services.map(service => (
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div className="flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="shadow-md w-full max-w-md object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-medium mb-4">
                Why Choose Our {service.title}?
              </h3>
              <p className="font-medium mb-4">
                {service.description}
              </p>
              {
                service.points.map(point => (
                  <ul className="text-gray-700 leading-relaxed">
                    <li className="mt-4">
                      {point}
                    </li>
                  </ul>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  </div>
};

export default ServicesTreeSection;
