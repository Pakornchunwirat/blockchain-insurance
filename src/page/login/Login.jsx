import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import iconImage from "../../asset/iconLogin.png"; 
import buttonImage from "../../asset/buttonImage.png"; 

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // เพิ่มลอจิกการตรวจสอบการเข้าสู่ระบบที่นี่
    navigate("/home"); // นำทางไปยังหน้า Home หลังจากเข้าสู่ระบบสำเร็จ
  };

  return (
    <div className="containerLogin">
      <img src={iconImage} alt="iconImage" className="iconImage1" />
      
      <button onClick={handleLogin} className="loginButton">
        <img src={buttonImage} alt="Login" className="buttonImage" />
      </button>
    </div>
  );
};

export default Login;
