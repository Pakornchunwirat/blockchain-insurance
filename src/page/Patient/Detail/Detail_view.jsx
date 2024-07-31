import React, { useState, useRef, useEffect } from "react";
import "./../Person/Person.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

const Detail_view = () => { 
  const [selectedType, setSelectedType] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedEClaim, setSelectedEClaim] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [startDate, setStartDate] = useState(null); // State for selected date
  const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isEClaimDropdownOpen, setIsEClaimDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  
  const typeDropdownRef = useRef(null);
  const serviceDropdownRef = useRef(null);
  const eClaimDropdownRef = useRef(null);
  const statusDropdownRef = useRef(null);

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setIsTypeDropdownOpen(false);
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setIsServiceDropdownOpen(false);
  };

  const handleEClaimChange = (eClaim) => {
    setSelectedEClaim(eClaim);
    setIsEClaimDropdownOpen(false);
  };

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setIsStatusDropdownOpen(false);
  };

  const toggleTypeDropdown = () => {
    setIsTypeDropdownOpen(!isTypeDropdownOpen);
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };

  const toggleEClaimDropdown = () => {
    setIsEClaimDropdownOpen(!isEClaimDropdownOpen);
  };

  const toggleStatusDropdown = () => {
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (typeDropdownRef.current && !typeDropdownRef.current.contains(event.target)) {
      setIsTypeDropdownOpen(false);
    }
    if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
      setIsServiceDropdownOpen(false);
    }
    if (eClaimDropdownRef.current && !eClaimDropdownRef.current.contains(event.target)) {
      setIsEClaimDropdownOpen(false);
    }
    if (statusDropdownRef.current && !statusDropdownRef.current.contains(event.target)) {
      setIsStatusDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navigate = useNavigate(); // ใช้ useNavigate
  const { id } = useParams(); 
  const location = useLocation();
  const title = location.state?.title;

  const handleSave = () => {
    // ส่งข้อมูลกลับไปยังหน้า Admission
    navigate(`/user/Detail/${id}`, {
      state: { title: title } // ส่งข้อมูล title กลับไป
    });
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="TopSearchContainer">
          <div className="TopSearchContainerLeft">
            <span style={{ fontSize: 35, color: "#FFFFFF", fontWeight: "bold" }}>
              ดูข้อมูลสำหรับ {title}
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
            {title} / <b>View</b>
              <p>ID: {id}</p>
            </span>
          </div>
        </div>
        <div className="DataContainer">
          <div className="DataContainerTop">
            <text style={{ fontSize: "20px" }}>ข้อมูล</text>
            <div className="bottom">
              <button className="bottombutton" onClick={handleSave}>
              <FontAwesomeIcon icon={faReply} className="buttonIconPlus" />
              ย้อนกลับ
              </button>
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>แพทย์ผู้รับผิดชอบคนไข้</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่แพทย์ผู้รับผิดชอบคนไข้"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_view;
