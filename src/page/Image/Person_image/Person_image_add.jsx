import React, { useState } from "react";
import "../../Patient/Person/Person.css";
import "./Person_image_add.css";
import Sidebar from "../../Sidebar/Sidebar";
import NavBar from "../../NavBar/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Person_image_add = () => {
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const fileInputRef = React.useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name); // Save the name of the selected file
      setSelectedImage(URL.createObjectURL(file)); // Create a URL for the selected image
    }
  };

  const handleUpload = () => {
    // Handle upload logic here
    // For example, you can use FormData to send the image to a server
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavBar />
        <div className="TopSearchContainer">
          <div className="TopSearchContainerLeft">
            <span style={{ fontSize: 35, color: "#FFFFFF", fontWeight: "bold" }}>
              เพิ่มข้อมูลสำหรับ Person_image
            </span>
            <span style={{ fontSize: 16, color: "#FFFFFF", marginTop: "10px" }}>
              Person_image / <b>Add</b>
            </span>
          </div>
        </div>
        <div className="DataContainer">
          <div className="DataContainerTop">
            <text style={{ fontSize: "20px" }}>ข้อมูล</text>
            <div className="bottom">
              <Link to={`/user/Person_image`} style={{ textDecoration: "none" }}>
                <button className="bottombutton" onClick={handleUpload}>
                  <FontAwesomeIcon icon={faFloppyDisk} className="buttonIconPlus" />
                  บันทึก
                </button>
              </Link>
            </div>
          </div>
          <div className="DataContainerCenter">
            <div className="DataContainerCenterLeft">
              <text style={{ color: "#4D5464" }}>image content</text>
              <div className="Upload">
                <button 
                  type="button" 
                  className="custom-upload-button" 
                  onClick={triggerFileInput}
                >
                  เลือกไฟล์
                </button>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange} 
                  ref={fileInputRef} 
                  style={{ display: "none" }} 
                />
                {selectedFileName && (
                  <div className="file-name" onClick={togglePopup} style={{ cursor: 'pointer' }}>
                    <p>{selectedFileName}</p>
                  </div>
                )}
                {isPopupVisible && selectedImage && (
                  <div className="popup">
                    <div className="popup-content">
                      <span className="close" onClick={togglePopup}>&times;</span>
                      <img src={selectedImage} alt="Selected" className="popup-image" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person_image_add;
