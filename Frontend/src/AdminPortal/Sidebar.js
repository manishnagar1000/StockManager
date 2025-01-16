import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const activeMenu = location.pathname.split("/").pop();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar Container */}
      <div
        className={`fixed h-full z-50 bg-gray-900 text-white transition-all duration-300 ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center border-b border-gray-700">
          <h2
            className={`text-xl font-bold ${
              isOpen ? "block" : "hidden"
            } transition-all`}
          >
            Admin
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-white bg-gray-700 hover:bg-gray-600 rounded p-2"
          >
            {isOpen ? "<" : ">"}
          </button>
        </div>

        {/* Sidebar Menu */}
        <ul className="mt-6 space-y-2">
          {/* Dashboard */}
          <Link to="/dashboard">
            <li
              className={`py-3 px-4 flex items-center rounded cursor-pointer transition-all ${
                activeMenu === "dashboard"
                  ? "bg-gray-800"
                  : "hover:bg-gray-700"
              }`}
            >
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                D
              </div>
              <span
                className={`ml-4 ${
                  isOpen ? "block" : "hidden"
                } transition-all`}
              >
                Dashboard
              </span>
            </li>
          </Link>

          {/* Stocks */}
          <Link to="/stocks">
            <li
              className={`py-3 px-4 flex items-center rounded cursor-pointer transition-all ${
                activeMenu === "stocks" ? "bg-gray-800" : "hover:bg-gray-700"
              }`}
            >
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                S
              </div>
              <span
                className={`ml-4 ${
                  isOpen ? "block" : "hidden"
                } transition-all`}
              >
                Stocks
              </span>
            </li>
          </Link>

          <Link to="/stockData">
            <li
              className={`py-3 px-4 flex items-center rounded cursor-pointer transition-all ${
                activeMenu === "stockData" ? "bg-gray-800" : "hover:bg-gray-700"
              }`}
            >
              <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-sm font-bold">
                SD
              </div>
              <span
                className={`ml-4 ${
                  isOpen ? "block" : "hidden"
                } transition-all`}
              >
                StockData
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
