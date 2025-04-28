import React from "react";
import { useNavigate } from "react-router-dom";

function Home({ user, isAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Por ahora simulamos el cierre de sesión
    navigate("/login");
  };

  return (
    <div className="home-container">
      <h2>Bienvenido, {user.name}</h2>
      <button>Buscar especie</button>
      <button>Mi perfil</button>
      <button>Cargar/Capturar imagen</button>
      {isAdmin && <button>Panel de administración</button>}
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
}

export default Home;
