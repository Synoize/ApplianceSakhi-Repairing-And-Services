import React, { useContext, useState } from "react";
import axios from "axios";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BookServices = () => {
  const { axios, backendUrl } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
    category: "",
    date: "",
    time: ""
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const categories = [
    "A.C. Repair Service",
    "Refrigerator Repair",
    "Washing Machine Repair",
    "Microwave Repair",
    "Water Purifier Repair",
    "Geyser Repair",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const {data} = await axios.post(`${backendUrl}/api/service/book`, formData);

      if (data.success) {
        setResponseMsg("Service booked successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          description: "",
          category: "",
          date: "",
          time: "",
        });
      } else {
        setResponseMsg(data.message || "Failed to book service");
      }
    } catch (error) {
      setResponseMsg(error.response?.data?.message || "Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center md:p-10">
      {/* <div className="w-full h-full ">
        <img
          src={assets.img1}
          alt="service"
          className="h-full w-full hidden md:block object-cover"
        />
      </div> */}
      <div className="w-full max-w-md bg-white md:shadow-lg md:rounded-xl p-6 sm:p-8">
        <h2 className="text-xl md:text-3xl font-medium text-center mb-6 text-gray-800">
          Book a Service
        </h2>

        {responseMsg && (
          <p
            className={`text-center mb-4 ${responseMsg.includes("successfully")
                ? "text-green-600"
                : "text-red-500"
              }`}
          >
            {responseMsg}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
            required
          />

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
            required
          >
            <option value="" disabled>
              Select Service Category
            </option>
            {categories.map((categorie) => (
              <option key={categorie} value={categorie}>
                {categorie}
              </option>
            ))}
          </select>

          <textarea
            name="description"
            placeholder="Describe your issue..."
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none resize-none"
            required
          />

          <div className="flex flex-col gap-2">
            <label className="font-medium text-gray-700">
              Select Date & Time
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
                required
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium cursor-pointer"
          >
            {loading ? "Booking..." : "Book Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookServices;
