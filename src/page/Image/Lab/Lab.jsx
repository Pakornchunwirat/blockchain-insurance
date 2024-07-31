import React, { useState } from "react";
import "../../Patient/Person/Person.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

import DataTable from "react-data-table-component";

const data = [
  {
    id: 1,
    hospital: "โรงพยาบาลศิริราช ปิยมหาราชการุณย์",
    role: "หมอไทย",
    doctor: "Sakda yodsuri",
    date: "10 สิงหาคม 2566",
  },
  {
    id: 2,
    hospital: "โรงพยาบาลภัทร-ธนบุรี",
    role: "หมอไทย",
    doctor: "Sakda yodsuri",
    date: "10 สิงหาคม 2567",
  },
  {
    id: 3,
    hospital: "โรงพยาบาลธรรมศาสตร์",
    role: "หมอไทย",
    doctor: "Sakda yodsuri",
    date: "10 สิงหาคม 2567",
  },
  // ข้อมูลอื่น ๆ
];

const Lab = () => {
  const [records, setRecords] = useState(data);

  const columns = [
    {
      name: "ลำดับ",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "โรงพยาบาล",
      selector: (row) => row.hospital,
      sortable: true,
    },
    {
      name: "แผนก",
      selector: (row) => row.role,
      sortable: true,
    },
    {
      name: "หมอ",
      selector: (row) => row.doctor,
      sortable: true,
    },
    {
      name: "วันที่บันทึกล่าสุด",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <Link to={`/user/Lab/view`} style={{ textDecoration: "none" }}>
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
        borderRadius: "0px 0px 0 0",
      },
    },
    rows: {
      style: {
        borderRadius: "0",
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
      when: (row) => row.id % 2 === 0, // เลขคู่
      style: {
        backgroundColor: "#EBFEFF", //
      },
    },
    {
      when: (row) => row.id % 2 !== 0, // เลขคี่
      style: {
        backgroundColor: "#FFFFFF", //
      },
    },
  ];

  function handleFilter(event) {
    const newData = data.filter(
      (row) =>
        row.hospital.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.role.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.doctor.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setRecords(newData);
  }

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
              Lab
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF" , marginTop: "10px"}}>
            ข้อมูลการตรวจทางห้องปฏิบัติการของผู้ที่มารับบริการทุกราย
            </span>
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
            <div className="bottom">
              <Link to={`/user/Lab/add`} style={{ textDecoration: "none" }}>
                <button className="bottombutton">
                  <FontAwesomeIcon icon={faPlus} className="buttonIconPlus" />
                  เพิ่ม
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ListContainer">
          <DataTable
            columns={columns}
            data={records}
            fixedHeader
            pagination
            paginationPerPage={10}
            paginationRowsPerPageOptions={[10]}
            customStyles={customStyles}
            conditionalRowStyles={conditionalRowStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Lab;
