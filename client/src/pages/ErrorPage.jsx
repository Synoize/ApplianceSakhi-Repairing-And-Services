import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react"; // optional: for a nice icon

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="flex justify-center mb-4">
          <AlertCircle className="text-red-500 w-16 h-16" />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-gray-600 text-lg mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-all cursor-pointer"
        >
          Go Back Home
        </button>
      </div>

      <p className="mt-8 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} ApplianceSakhi - All rights reserved.
      </p>
    </div>
  );
};

export default ErrorPage;
