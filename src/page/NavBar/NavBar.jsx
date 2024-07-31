import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faBell } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";
import iconImage from "./../../asset/icon.png"; // Import รูปภาพ
import UserProfile from "./../../asset/UserProfile.png";
import User2Image from "./../../asset/User2.png"; // Import รูปภาพ User2
import User3Image from "./../../asset/User3.png"; // Import รูปภาพ User3
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      name: "Osman",
      timestamp: "1628812123",
      message: "ยอมรับ",
      timeAgo: "10 นาทีที่แล้ว",
      image: User2Image,
    },
    {
      name: "Saman",
      timestamp: "1628812312",
      message: "ปฎิเสธ",
      timeAgo: "10 นาทีที่แล้ว",
      image: User3Image,
    },
    {
      name: "Saman",
      timestamp: "1628812312",
      message: "ปฎิเสธ",
      timeAgo: "10 นาทีที่แล้ว",
      image: User3Image,
    },
    {
      name: "Saman",
      timestamp: "1628812312",
      message: "ปฎิเสธ",
      timeAgo: "10 นาทีที่แล้ว",
      image: User3Image,
    },
    {
      name: "Saman",
      timestamp: "1628812312",
      message: "ปฎิเสธ",
      timeAgo: "10 นาทีที่แล้ว",
      image: User3Image,
    },
  ]);

  const handleLogin = () => {
    navigate("/");
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="containerNav">
        <img src={iconImage} alt="iconImage" className="iconImage" />
        <div className="UserProfileContainer">
          <div className="UserProfileContainer">
            {notifications.length > 0 && (
              <div className="circle1"></div>
            )}
            <button
              ref={buttonRef}
              onClick={toggleDropdown}
              style={{ border: 0, backgroundColor: "transparent" }}
            >
              <FontAwesomeIcon icon={faBell} className="buttonIconfaBell" />
            </button>
            <img src={UserProfile} alt="userImage" className="UserProfile" />
            <div className="UserProfileContainerCenter">
              <span
                style={{ fontSize: 17, color: "#667085", fontWeight: "bold" }}
              >
                Sakda yodsuri
              </span>
              <span style={{ fontSize: 13, color: "#98A1B6" }}>Insurance</span>
            </div>
          </div>
          <div className="UserProfileContainerRight">
            <button
              onClick={handleLogin}
              style={{ border: 0, backgroundColor: "transparent" }}
            >
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="buttonIconExit"
              />
            </button>
          </div>
        </div>
      </div>
      {isDropdownVisible && (
        <div ref={dropdownRef} className="containerDropdown">
          <text style={{ fontSize: 16, color: "black", Bottom: "20px" }}>
            การแจ้งเตือน
          </text>
          {notifications.map((notification, index) => (
            <div key={index} className="notificationItem">
              <div className="notificationHeader">
                <div>
                  <img
                    src={notification.image}
                    alt="userImage"
                    className="notificationImage"
                  />
                </div>
                <div className="notificationCenterCon">
                  <div className="notificationCenterTopCon">
                    <span className="notificationName">
                      {notification.name}
                    </span>
                    <div className="circle"></div>
                    <span
                      style={{
                        fontSize: 16,
                        color: "black",
                      }}
                    >
                      {notification.timestamp}
                    </span>
                  </div>
                  <div className="notificationMessageCon">
                    <text style={{ fontSize: 16, color: "#475569" }}>
                      ได้ทำการ
                    </text>
                    <div className="notificationMessage">
                      <span
                        className={
                          notification.message === "ยอมรับ"
                            ? "accepted"
                            : "rejected"
                        }
                      >
                        {notification.message}
                      </span>
                    </div>
                    <text style={{ fontSize: 16, color: "#475569" }}>
                      การเข้าถึงข้อมูล
                    </text>
                  </div>

                  <span className="notificationTime">
                    {notification.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;
