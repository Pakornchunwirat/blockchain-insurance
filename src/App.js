import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import User1 from "./page/User/User1";
import Login from "./page/login/Login";

import Detail from "./page/Patient/Detail/Detail";
import Detail_view from "./page/Patient/Detail/Detail_view";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/Detail/:id" element={<Detail />} />
        <Route path="/user/Detail/view/:id" element={<Detail_view />} />
      </Routes>
    </Router>
  );
}

export default App;
