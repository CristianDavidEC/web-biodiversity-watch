import React from "react";

function Map({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No hay datos para mostrar en el mapa</p>;
  }
  return (
    <div className="map-container">
      <h2>Mapa interactivo</h2>
      <div
        className="map-simulated"
        style={{ border: "1px solid #ccc", height: 300, marginBottom: 16 }}
      >
        {/* Aquí iría el mapa real, por ahora simulado */}
        {posts.map((post) => (
          <div key={post.id}>
            <span>{post.specie}</span> - <span>{post.location}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Map;
