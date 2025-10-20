import React from 'react'
import { reviews } from "../assets/assets";

const ReviewSection = () => {
  return (
    <div className="bg-white min-h-screen px-6 md:px-12 py-14 flex flex-col items-center">
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-2xl md:text-4xl font-medium mb-8">Customer Reviews</h1>
        <p className="text-gray-600">
          Hear what our happy customers say about our reliable home appliance
          repair services in Patna.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-slate-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-14 h-14 rounded-full object-contain mr-4 border border-gray-300 bg-white"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>

            <div className="flex mb-3">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500 text-lg">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-gray-300 text-lg">★</span>
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              “{review.comment}”
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <button className="bg-yellow-400 hover:bg-yellow-400/80 text-gray-900 px-6 py-2 rounded-full cursor-pointer hover:scale-105 transition-all ease-in-out duration-300">
          Write a Review
        </button>
      </div>
    </div>
  )
}

export default ReviewSection