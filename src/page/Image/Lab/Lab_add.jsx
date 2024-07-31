import React, { useState, useRef, useEffect } from "react";
import "../../Patient/Person/Person.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Lab_add = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="TopSearchContainer">
          <div className="TopSearchContainerLeft">
            <span style={{ fontSize: 35, color: "#FFFFFF", fontWeight: "bold" }}>
              เพิ่มข้อมูลสำหรับ Lab
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
            Lab / <b>Add</b>
            </span>
          </div>
        </div>
        <div className="DataContainer">
          <div className="DataContainerTop">
            <text style={{ fontSize: "20px" }}>ข้อมูล</text>
            <div className="bottom">
              <Link to={`/user/Lab`} style={{ textDecoration: "none" }}>
                <button className="bottombutton">
                  <FontAwesomeIcon icon={faFloppyDisk} className="buttonIconPlus" />
                  บันทึก
                </button>
              </Link>
            </div>
          </div>
           <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>สิ่งที่ส่งตรวจทางห้องปฏิบัติการ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่สิ่งที่ส่งตรวจทางห้องปฏิบัติการ"
              />
            </div>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default Lab_add;
