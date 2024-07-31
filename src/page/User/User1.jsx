import React from "react";
import { Navigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./User1.css";

const User1 = () => {
  return (
    <div className="home">
      <Sidebar />
      <Navigate to="/user/profile" /> {/* Redirect to Person_Ext page */}
    </div>
  );
};

export default User1;
