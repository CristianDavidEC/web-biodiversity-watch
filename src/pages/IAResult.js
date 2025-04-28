import React from "react";

function IAResult({ result }) {
  if (result.status === "known") {
    return (
      <div className="ia-result-container">
        <h2>Especie identificada</h2>
        <p>{result.specie.name}</p>
        <button>Crear post</button>
      </div>
    );
  }
  return (
    <div className="ia-result-container">
      <h2>No se pudo identificar la especie</h2>
      <button>Solicitar verificación</button>
    </div>
  );
}

export default IAResult;
