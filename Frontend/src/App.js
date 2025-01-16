import React,{useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './AdminPortal/Loginpage';
import Dashboard from './AdminPortal/Dashboard';
import UserManagement from './AdminPortal/UserManagement';
import StockManagement from './AdminPortal/StockManagement';
import SignupPage from "./AdminPortal/SignUpPage";
import ProtectedRoute from './AdminPortal/ProtectedRoute';
import StockData from "./AdminPortal/StockData";


function App() {
  return (
    <>
    <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={
                    <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
                } />
                <Route path="/stocks" element={
                    <ProtectedRoute>
                      <StockManagement/>
                    </ProtectedRoute>
                } />
                   <Route path="/stockData" element={
                    <ProtectedRoute>
                      <StockData/>
                    </ProtectedRoute>
                } />

            </Routes>
        </Router>
    </>
  );
}

export default App;
