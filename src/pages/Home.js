import React from "react";

function Home({ user, isAdmin }) {
  return (
    <div className="home-container">
      <h2>Bienvenido, {user.name}</h2>
      <button>Buscar especie</button>
      <button>Mi perfil</button>
      <button>Cargar/Capturar imagen</button>
      {isAdmin && <button>Panel de administración</button>}
    </div>
  );
}

export default Home;
