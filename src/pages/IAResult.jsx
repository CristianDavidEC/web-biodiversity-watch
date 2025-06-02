import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function IAResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state?.result;

  console.log("Estado en IAResult:", location.state);
  console.log("Resultado en IAResult:", result);

  if (!result) {
    return (
      <div className="ia-result-container">
        <h2>Error</h2>
        <p>No se encontraron resultados de la predicción</p>
        <button onClick={() => navigate("/upload")}>Volver a intentar</button>
      </div>
    );
  }

  // Calcular la confianza de manera segura
  const getConfidence = () => {
    try {
      if (result.probabilidades && 
          Array.isArray(result.probabilidades) && 
          result.probabilidades[0] && 
          typeof result.indice === 'number') {
        return Math.round(result.probabilidades[0][result.indice] * 100);
      }
      return 0;
    } catch (error) {
      console.error('Error al calcular la confianza:', error);
      return 0;
    }
  };

  return (
    <div className="ia-result-container">
      <h2>Especie Identificada</h2>
      <div className="result-details">
        <div className="specie-info">
          <h3>{result.especie || 'Especie no identificada'}</h3>
          <p className="confidence">
            Confianza: {getConfidence()}%
          </p>
        </div>
        
        <div className="actions">
          <button
            className="create-post-button"
            onClick={() =>
              navigate("/create-post", {
                state: { specieName: result.especie },
              })
            }
          >
            Crear post
          </button>
          <button
            className="try-again-button"
            onClick={() => navigate("/upload")}
          >
            Probar otra imagen
          </button>
        </div>
      </div>

      <style jsx>{`
        .ia-result-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }

        h2 {
          color: #2c3e50;
          margin-bottom: 2rem;
        }

        .result-details {
          background-color: #f8f9fa;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .specie-info {
          margin-bottom: 2rem;
        }

        h3 {
          color: #27ae60;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .confidence {
          color: #7f8c8d;
          font-size: 1.1rem;
        }

        .actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        button {
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .create-post-button {
          background-color: #27ae60;
          color: white;
        }

        .create-post-button:hover {
          background-color: #219a52;
        }

        .try-again-button {
          background-color: #3498db;
          color: white;
        }

        .try-again-button:hover {
          background-color: #2980b9;
        }
      `}</style>
    </div>
  );
}

export default IAResult;
