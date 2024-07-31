import React, { useState } from "react";
import "./../Person/Person.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye,faFileExport} from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
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

const Detail = () => {
  const { id } = useParams(); // รับ ID จาก URL
  const location = useLocation();
  const navigate = useNavigate();
  const title = location.state?.title; // Get title from state
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
          <Link
                to={`/user/Detail/view/${id}`}
                state={{ title: title }} // Include title in state
                style={{ textDecoration: "none" }}
              >
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
              {title}
            </span>
            <p>ID: {id}</p> {/* แสดง ID ที่ได้รับ */}
            <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
            เว็ปที่ช่วยในการเบิกเงินของผู้ป่วยสำหรับประกันง่ายขึ้น
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

export default Detail;