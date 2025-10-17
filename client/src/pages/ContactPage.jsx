import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const ContactPage = () => {
  const { axios, backendUrl } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const { data } = await axios.post(
        `${backendUrl}/api/contact/message`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data.success) {
        setResponseMsg("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMsg(`${data.message || "Something went wrong!"}`);
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center md:p-10">
      <div className="bg-white md:shadow-lg md:rounded-xl p-8 max-w-md w-full">
        <h2 className="text-xl md:text-3xl font-medium text-gray-800 mb-6 text-center">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
             className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
             className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
             className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
             className="w-full border border-gray-300 focus:border-blue-500 p-3 rounded-lg outline-none"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {responseMsg && (
          <p className="text-center text-sm mt-4 text-gray-700">{responseMsg}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
