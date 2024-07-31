import React, { useState, useEffect, useRef } from "react";
import "./Person_add.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Person_add = () => {
  const [selectedNode, setSelectedNode] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [startDate, setStartDate] = useState(null); // State for selected date
  const dropdownRef = useRef(null);

  const handleNodeChange = (node) => {
    setSelectedNode(node);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="TopSearchContainer">
          <div className="TopSearchContainerLeft">
            <span
              style={{ fontSize: 35, color: "#FFFFFF", fontWeight: "bold" }}
            >
              เพิ่มข้อมูลสำหรับ Person
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
              Person / <b>Add</b>
            </span>
          </div>
        </div>
        <div className="DataContainer">
          <div className="DataContainerTop">
            <text style={{ fontSize: "20px" }}>ข้อมูล</text>
            <div className="bottom">
              <Link to={`/user/Person`} style={{ textDecoration: "none" }}>
                <button className="bottombutton">
                  <FontAwesomeIcon
                    icon={faFloppyDisk}
                    className="buttonIconPlus"
                  />
                  บันทึก
                </button>
              </Link>
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>เลขที่บัตรประชาชน</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เลขที่บัตรประชาชน"
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>เลือกคำนำหน้า</text>
              <div className="custom-select" ref={dropdownRef}>
                <div
                  className={`select-selected ${
                    isDropdownOpen ? "select-arrow-active" : ""
                  } ${selectedNode ? "selected" : ""}`}
                  onClick={toggleDropdown}
                >
                  <span>{selectedNode || "กรุณาเลือกคำนำหน้า"}</span>
                  <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </div>
                <div
                  className={`select-items ${
                    isDropdownOpen ? "" : "select-hide"
                  }`}
                >
                  <div onClick={() => handleNodeChange("นาง")}>นาง</div>
                  <div onClick={() => handleNodeChange("นางสาว")}>นางสาว</div>
                  <div onClick={() => handleNodeChange("นาย")}>นาย</div>
                  {/* เพิ่มตัวเลือกอื่น ๆ ตามที่ต้องการ */}
                </div>
              </div>
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>ชื่อ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่ชื่อ"
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>นามสกุล</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่นามสกุล"
              />
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>เพศ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เพศ"
              />
            </div>
            <div className="DataContainerCenterRight">
              <div className="HBD">
                <text style={{ color: "#4D5464" }}>วันเกิด</text>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="searchInputData"
                  placeholderText="DD/MM/YYYY"
                  showYearDropdown
                  scrollableYearDropdown
                  yearDropdownItemNumber={50} // จำนวนปีที่แสดงใน dropdown
                  minDate={new Date(1900, 0, 1)} // กำหนดปีต่ำสุด
                  maxDate={new Date()} // กำหนดปีสูงสุดเป็นปีปัจจุบัน
                />
              </div>
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>เชื้อชาติ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เชื้อชาติ"
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>สัญชาติ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่สัญชาติ"
              />
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>เบอร์โทรศัพท์</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เบอร์โทรศัพท์"
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>เลือด</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เลือด"
              />
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>น้ำหนัก</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่น้ำหนัก"
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>ส่วนสูง</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่ส่วนสูง"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person_add;
