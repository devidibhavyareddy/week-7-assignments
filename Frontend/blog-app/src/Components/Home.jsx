import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // Check if user is logged in
  const token = localStorage.getItem("token");

  // Explore button logic
  const handleExplore = () => {
    if (token) {
      navigate("/blogs");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-100 to-slate-200 flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight">
          Read. Write. Share.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-slate-600 leading-relaxed mb-10">
          Welcome to our modern blogging platform where ideas become stories.
          Explore blogs from different writers, publish your thoughts,
          and connect with a creative community around the world.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10">
          
          {/* Explore Blogs */}
          <button
            onClick={handleExplore}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300"
          >
            Explore Blogs
          </button>

          {/* Get Started */}
          <button
            onClick={() => navigate("/register")}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            Get Started
          </button>
        </div>

        {/* Footer text */}
        <p className="text-slate-500 text-md md:text-lg">
          Please login to explore blogs, interact with writers,
          and share your own stories with the community.
        </p>
      </div>
    </div>
  );
}

export default Home;