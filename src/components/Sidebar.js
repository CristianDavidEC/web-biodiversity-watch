import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlinePlusSquare,
  AiFillPlusSquare,
  AiOutlineLogin,
} from "react-icons/ai";
import { MdPersonOutline, MdPerson } from "react-icons/md";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  return (
    <nav className="sidebar-vertical">
      <div className="app-title">
        <h1>BioWatch</h1>
      </div>
      <button
        className={`nav-btn-vertical${current === "/home" ? " active" : ""}`}
        onClick={() => navigate("/home")}
        aria-label="Home"
      >
        {current === "/home" ? <AiFillHome /> : <AiOutlineHome />}
        <span>Home</span>
      </button>
      <button
        className={`nav-btn-vertical${current === "/upload" ? " active" : ""}`}
        onClick={() => navigate("/upload")}
        aria-label="Nueva publicación"
      >
        {current === "/upload" ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
        <span>Nueva publicación</span>
      </button>
      <button
        className={`nav-btn-vertical${current === "/profile" ? " active" : ""}`}
        onClick={() => navigate("/profile")}
        aria-label="Perfil"
      >
        {current === "/profile" ? <MdPerson /> : <MdPersonOutline />}
        <span>Perfil</span>
      </button>
      <button
        className={`nav-btn-vertical${current === "/login" ? " active" : ""}`}
        onClick={() => navigate("/login")}
        aria-label="Login"
      >
        <AiOutlineLogin />
        <span>Login</span>
      </button>
    </nav>
  );
}

export default Sidebar;
