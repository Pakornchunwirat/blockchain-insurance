import React, { useState } from "react";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import DataTable from "react-data-table-component";
import NavBar from "../NavBar/NavBar";
import UserProfile from "./../../asset/UserProfile.png";
const data = [
  {
    No: 1,
    name: "yousaf",
    email: "yousaf@gmail.com",
    age: "23",
    id: "2131231",
  },
  {
    No: 2,
    name: "jmail",
    email: "jmail@gmail.com",
    age: "20",
    id: "2131232",
  },
  // ข้อมูลอื่น ๆ
];

const Home = () => {
  const [records, setRecords] = useState(data);
  const [passId, setPassId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleFilter = (event) => {
    const newData = data.filter((row) =>
      row.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  const handleEdit = (id) => {
    console.log("Navigate to User1 with id:", id);
  };

  const handleAdd = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.No,
      sortable: true,
    },
    {
      name: "ชื่อ",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "วันที่บันทึกล่าสุด",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "สถานะ",
      cell: (row) => (
        <div>
          <button
            onClick={() => handleEdit(row.id)}
            style={{
              border: 0,
              backgroundColor: "#DCFCE7",
              color: "#16A34A",
              borderRadius: 5,
              height: "30px",
              width: "121px",
            }}
          >
            ยอมรับแล้ว
          </button>
        </div>
      ),
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`/user/Detail/1`} state={{ title: "Chronic" }} style={{ textDecoration: "none" }}>
          <button
              style={{
                border: 0,
                backgroundColor: "#1740DA",
                color: "#FFFFFF",
                borderRadius: 5,
                height: "32px",
                width: "32px",
              }}
            >
              <FontAwesomeIcon icon={faEye} className="buttonIcon" />
            </button>
          </Link>
        </div>
      ),
    },
  ];

  const customStyles = {
    header: {
      style: {
        borderRadius: "10px 10px 0 0",
      },
    },
    rows: {
      style: {
        borderRadius: "0",
        borderColor: "transparent",
      },
    },
    pagination: {
      style: {
        borderRadius: "0 0 10px 10px",
      },
    },
    tableWrapper: {
      style: {
        borderRadius: "0 0 0 0",
        overflow: "hidden",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: (row) => row.No % 2 === 0, // เลขคู่
      style: {
        backgroundColor: "#EBFEFF",
      },
    },
    {
      when: (row) => row.No % 2 !== 0, // เลขคี่
      style: {
        backgroundColor: "#FFFFFF",
      },
    },
  ];

  return (
    <div className="container">
      <NavBar />
      <div className="TopSearchContainer">
        <div className="TopSearchContainerLeft">
          <span style={{ fontSize: 35, color: "#FFFFFF", fontWeight: "bold" }}>
            ยินดีต้อนรับ !
          </span>
          <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
          เว็ปที่ช่วยในการเบิกเงินของผู้ป่วยสำหรับประกันง่ายขึ้น
          </span>
        </div>
        <div className="TopSearchContainerRight">
          <div className="searchContainer">
            <input
              type="text"
              className="searchInput"
              placeholder="เลขบัตรประชาชน"
              value={passId}
              onChange={(e) => setPassId(e.target.value)}
            />
          </div>
          <div className="bottom">
            <button className="bottombutton" onClick={handleAdd}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="buttonIconPlus" />
              <text style={{ fontSize: 16,fontWeight: "bold" }}>ค้นหา</text>
            </button>
          </div>
        </div>
      </div>
      <div className="ListContainerTop">
        <div className="searchContainer">
          <input
            type="text"
            className="searchInput1"
            placeholder="Search..."
            onChange={handleFilter}
          />
        </div>
      </div>
      <div className="ListContainer">
        <DataTable
          columns={columns}
          data={records}
          fixedHeader
          pagination
          paginationPerPage={10} // กำหนดให้แสดง 10 Rows
          paginationRowsPerPageOptions={[10]} // ลบตัวเลือกอื่นออก
          customStyles={customStyles}
          conditionalRowStyles={conditionalRowStyles}
        />
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup1">
            <div className="popupTop">
              <div className="popupTopLeftCon">
                <text style={{ fontSize: 25, color: "#667085",fontWeight: "bold" }}>Floyd Miles</text>
                <text  style={{ fontSize: 18, color: "#98A1B6", }}> {passId}</text>
              </div>

              <div className="popupTopLeftCon">
                <img
                  src={UserProfile}
                  alt="userImage"
                  className="UserProfile1"
                />
              </div>
            </div>
            <div style={{marginTop: 20}}>
              <text style={{ fontSize: 20, color: "Black", marginTop: 20,fontWeight: "bold"}}> คุณจะส่งคำขอเข้าถึงข้อมูลของบุคคลนี้ใช่หรือไม่ ? </text>
            </div>
            
            <div className="popup-buttons">
              <button
              style={{backgroundColor: "#1BB220",
              color: "white",
              height: "50px",
              fontWeight: "bold"}}
                onClick={() => {
                  /* logic สำหรับการยืนยันคำขอ */
                }}
              >
                ใช่
              </button>
              <button onClick={handleClosePopup} style={{backgroundColor: "#E9ECEF",
              color: "#8A92A6",marginTop: 20,height: "50px",
              fontWeight: "bold"}}>ไม่ใช่</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
