import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const Navbar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const activeMenu = location.pathname.split("/").pop();
  const userRole = localStorage.getItem("role");
  const name = localStorage.getItem("name") || "User";
  const email = localStorage.getItem("email") || "user@example.com";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getActiveMenuName = () => {
    switch (activeMenu) {
      case "dashboard":
        return "Dashboard";
      case "stocks":
        return "Stocks";
        case "stockData":
            return "stockData";
      default:
        return "Menu";
    }
  };

  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure you want to Logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        <Navigate to="/" replace /> // Redirect to login page
      }
    });
  };

  const getDotColor = () => {
    switch (userRole) {
      case "-1":
        return "bg-green-500";
      case "0":
        return "bg-yellow-500";
      default:
        return "bg-red-500";
    }
  };

  return (
    <div
      className={`flex justify-between items-center p-4 text-white ${
        isOpen ? "ml-64" : "ml-16"
      } transition-all duration-300`}
      style={{ backgroundColor: "var(--primary-color)", height: "12vh" }}
    >
      {/* Logo */}
      <div className="ml-4">
        <img
          src="/assets/Logo.png"
          alt="Logo"
          width={70}
          height={70}
        />
      </div>

      {/* Active Menu Name */}
      <div className="text-xl font-semibold hidden sm:block">
        {getActiveMenuName()}
      </div>

      {/* Profile Section */}
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <span className="text-lg font-bold">{name.charAt(0).toUpperCase()}</span>
          <div
            className={`absolute top-0 right-0 w-3 h-3 rounded-full border-2 border-white ${getDotColor()}`}
          ></div>
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg p-4 z-50">
            {/* Name */}
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-sm text-white font-bold">
                {name.charAt(0).toUpperCase()}
              </div>
              <span className="ml-2 text-sm font-medium">{name}</span>
            </div>

            {/* Email */}
            <div className="flex items-center mb-3 text-sm">
              <span className="text-gray-500">@</span>
              <span className="ml-2">{email}</span>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-2"></div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full py-2 text-center bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
