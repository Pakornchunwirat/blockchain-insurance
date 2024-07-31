import React from "react";
import "./Person_view.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply,faFloppyDisk} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Person_view = () => {
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
              ดูข้อมูลสำหรับ Person
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF" , marginTop: "10px"}}>
              Person / <b>View</b>
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
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>เลือกคำนำหน้า</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่คำนำหน้า"
                disabled
              />
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>ชื่อ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่ชื่อ"
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>นามสกุล</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่นามสกุล"
                disabled
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
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <div className="HBD">
                <text style={{ color: "#4D5464" }}>วันเกิด</text>
                <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่วันเกิด"
                disabled
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
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>สัญชาติ</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่สัญชาติ"
                disabled
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
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>เลือด</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่เลือด"
                disabled
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
                disabled
              />
            </div>
            <div className="DataContainerCenterRight">
              <text style={{ color: "#4D5464" }}>ส่วนสูง</text>
              <input
                type="text"
                className="searchInputData"
                placeholder="กรุณาใส่ส่วนสูง"
                disabled
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person_view;
