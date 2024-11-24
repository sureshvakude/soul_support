import React from "react";

const Quotes = () => {
  const quotes = [
    "Slow Progress is still progress.",
    "It's okay not to be okay.",
    "You're not your past.",
    "Your Feelings are valid.",
    "One thing at a time.",
    "You will smile again.",
    "Make your Mental Health a Priority.",
    "You don't have to struggle in silence.",
    "You are stronger than you think.",
  ];

  return (
    <div
      className="max-w-4xl mx-auto p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2015/10/04/06/52/mountain-970704_640.jpg')", // Replace with your image URL
      }}
    >
      {/* Optional: Overlay for text contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      <div className="relative z-10 bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Inspirational Quotes</h2>
        <div className="space-y-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-300"
            >
              <p className="text-xl text-center text-gray-700 italic">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quotes;
