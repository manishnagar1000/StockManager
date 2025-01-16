import React from "react";
import { Navigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const ProtectedRoute = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const token = localStorage.getItem("token");

  // Redirect to login if no token
  if (!token) {
    return <Navigate to="/" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds

    // Redirect to login if the token is expired
    if (decodedToken.exp < currentTime) {
      localStorage.removeItem("token"); // Remove expired token
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem("token"); // Remove invalid token
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <div className="flex-grow max-w-full">
        {/* Navbar */}
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Content Area */}
        <div
          className={`${
            isOpen ? `ml-64` : `ml-16`
          } max-w-full transition-all duration-300`}
          style={{ height: "84vh", backgroundColor: "rgb(244, 244, 244)" }}
        >
          {/* Render Child Components */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProtectedRoute;
