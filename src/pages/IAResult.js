import React from "react";
import { useNavigate } from "react-router-dom";

function IAResult({ result }) {
  const navigate = useNavigate();

  if (result.status === "known") {
    return (
      <div className="ia-result-container">
        <h2>Especie identificada</h2>
        <p>{result.specie.name}</p>
        <button
          onClick={() =>
            navigate("/create-post", {
              state: { specieName: result.specie.name },
            })
          }
        >
          Crear post
        </button>
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
