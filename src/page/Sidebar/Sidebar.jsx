import React from "react";
import "./Sidebar.css";
import CenterSidebar from "./CenterSidebar";
import UserProfile1 from "../../asset/UserProfile1.png";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="UserProfileCon">
          <img src={UserProfile1} alt="userImage" className="UserProfile" />
          <div className="UserProfileText">
            <text
              style={{ fontSize: 17, color: "#667085", fontWeight: "bold" }}
            >
              Floyd Miles
            </text>
            <text style={{ fontSize: 13, color: "#98A1B6" }}>
              1234567891013
            </text>
          </div>
        </div>
      </div>
      <div className="center">
        <CenterSidebar />
      </div>
    </div>
  );
}
