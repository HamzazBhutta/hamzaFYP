import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./Listings/SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Link to={"/"}><img src="/logo.png" alt="Logo" className="h-8 mr-4" /></Link>
        <Link to={"/"}>
          <h1 className="text-xl font-semibold">HomeBid</h1>
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link to="/properties" className="text-gray-700 hover:text-blue-600">
          Listings
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
        <Link to="/predict-price" className="text-gray-700 hover:text-blue-600">
          Price Prediction 
        </Link>
        <div>
          <Link to="/sign-in" className="text-blue-600 font-semibold">
            Sign In
          </Link>{" "}
          |{" "}
          <Link to="/sign-up" className="text-blue-600 font-semibold">
            Sign Up
          </Link>{" "}
          |{" "}
          <Link to="/admin/dashboard" className="text-blue-600 font-semibold">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
