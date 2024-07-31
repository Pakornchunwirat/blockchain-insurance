import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUserInjured,
  faHandDots,
  faHandHoldingHeart,
  faXRay,
  faUsers,
  faTruckMedical,
  faCapsules,
  faFileMedical,
  faMoneyCheckDollar,
  faUser,
  faCog,
  faAngleDown,
  faSearch,
  faReply,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faUserInjured: faUserInjured,
  faHandDots: faHandDots,
  faHandHoldingHeart: faHandHoldingHeart,
  faXRay: faXRay,
  faUsers: faUsers,
  faTruckMedical: faTruckMedical,
  faCapsules: faCapsules,
  faFileMedical: faFileMedical,
  faMoneyCheckDollar: faMoneyCheckDollar,
  user: faUser,
  settings: faCog,
};

const menuItems = [
  {
    title: "Chronic",
    path: "/user/Detail/4",
    icon: "faHandHoldingHeart",
  },
  {
    title: "วินิจฉัยโรค",
    path: "/diagnosis",
    icon: "faHandDots",
    childrens: [
      { title: "Diagnosis", path: "/user/Detail/43" },
      { title: "Cancer", path: "/user/Detail/56" },
    ],
  },
  {
    title: "Proced",
    path: "/user/Detail/45",
    icon: "faHandHoldingHeart",
  },
  {
    title: "ส่งต่อ",
    path: "/transfer",
    icon: "faTruckMedical",
    childrens: [
      { title: "Care_refer", path: "/user/Detail/35" },
      { title: "Clinical_refer", path: "/user/Detail/36" },
      { title: "Drug_refer", path: "/user/Detail/37" },
      { title: "Investigation_refer", path: "/user/Detail/38" },
      { title: "Proced_refer", path: "/user/Detail/39" },
      { title: "Refer_history", path: "/user/Detail/40" },
      { title: "Refer_result", path: "/user/Detail/41" },
      { title: "Diagnosis_refer", path: "/user/Detail/42" },
    ],
  },
  {
    title: "ยา",
    path: "/medicine",
    icon: "faCapsules",
    childrens: [
      { title: "Drug", path: "/user/Detail/44" },
      { title: "Drug_image", path: "/user/Detail/52" },
    ],
  },

  {
    title: "Card",
    path: "/user/Detail/5",
    icon: "faFileMedical",
  },
  {
    title: "เงิน",
    path: "/finance",
    icon: "faMoneyCheckDollar",
    childrens: [
      { title: "Charge", path: "/user/Detail/46" },
      { title: "Charge_inv", path: "/user/Detail/47" },
    ],
  },
];

const Sidebar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const findActiveDropdown = () => {
      for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].path === location.pathname) {
          setActiveDropdown(i);
          return;
        }
        if (menuItems[i].childrens?.some(child => child.path === location.pathname)) {
          setActiveDropdown(i);
          return;
        }
      }
      setActiveDropdown(null);
    };

    findActiveDropdown(); // Call function to find active dropdown
  }, [location.pathname]);

  const toggleDropdown = (index) => {
    if (menuItems[index].path === "/procedure") {
      navigate("/user/Procedure");
    } else if (menuItems[index].path === "/user/Card") {
      navigate("/user/Card");
    } else if (menuItems[index].path === "/user/Chronic") {
      navigate("/user/Chronic");
    }
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMenuItems = menuItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.childrens?.some((child) =>
        child.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div className="">
      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search"
        />
        <FontAwesomeIcon icon={faSearch} className="sidebar-search-icon" />
      </div>
      {filteredMenuItems.map((item, index) => (
        <div key={index}>
          {item.childrens ? (
            <div
              className={`sidebar-item ${
                (activeDropdown === index &&
                  item.path !== "/procedure" &&
                  item.path !== "/user/Chronic") ||
                (item.path === "/procedure" &&
                  location.pathname.startsWith("/user/Procedure")) ||
                (item.path === "/user/Chronic" &&
                  location.pathname.startsWith("/user/Chronic")) ||
                (item.path === "/user/Card" &&
                  location.pathname.startsWith("/user/Card")) ||
                (item.path === "/images" &&
                  location.pathname.startsWith("/user/Lab"))
                  ? "dropdown-active"
                  : ""
              }`}
              onClick={() => toggleDropdown(index)}
            >
              <span>
                <FontAwesomeIcon
                  icon={iconMap[item.icon]}
                  className="sidebar-icon"
                />
                {item.title}
              </span>
              {item.childrens && (
                <FontAwesomeIcon icon={faAngleDown} className="faAngleDown" />
              )}
            </div>
          ) : (
            <Link
              to={item.path}
              state={{ title: item.title }} // Send title as state for items without childrens
              className={`sidebar-item ${
                location.pathname === item.path ? "dropdown-active" : ""
              }`}
              onClick={() => setActiveDropdown(null)} // Close dropdowns if any were open
            >
              <span>
                <FontAwesomeIcon
                  icon={iconMap[item.icon]}
                  className="sidebar-icon"
                />
                {item.title}
              </span>
            </Link>
          )}
          {activeDropdown === index && item.childrens && (
            <div className="dropdown-list">
              {item.childrens.map((child, childIndex) => (
                <Link
                  to={child.path}
                  state={{ title: child.title }} // Send child title as state
                  key={childIndex}
                  className={`dropdown-item ${
                    location.pathname === child.path ? "active" : ""
                  }`}
                >
                  {child.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link to={`/home`} style={{ textDecoration: "none" }}>
        <div className="bottom1">
          ย้อนกลับ
          <FontAwesomeIcon icon={faReply} className="buttonIconfaReply" />
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
