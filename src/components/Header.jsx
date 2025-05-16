import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaSignInAlt } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const current = location.pathname;

  return (
    <nav className="navbar nav-horizontal">
      <button
        className={`nav-btn${current === "/home" ? " active" : ""}`}
        onClick={() => navigate("/home")}
        aria-label="Home"
      >
        <FaHome />
        <span>Home</span>
      </button>
      <button
        className={`nav-btn${current === "/search" ? " active" : ""}`}
        onClick={() => navigate("/search")}
        aria-label="Buscar"
      >
        <FaSearch />
        <span>Buscar</span>
      </button>
      <button
        className={`nav-btn${current === "/profile" ? " active" : ""}`}
        onClick={() => navigate("/profile")}
        aria-label="Perfil"
      >
        <FaUser />
        <span>Perfil</span>
      </button>
      <button
        className={`nav-btn${current === "/login" ? " active" : ""}`}
        onClick={() => navigate("/login")}
        aria-label="Login"
      >
        <FaSignInAlt />
        <span>Login</span>
      </button>
    </nav>
  );
}

export default Header;
