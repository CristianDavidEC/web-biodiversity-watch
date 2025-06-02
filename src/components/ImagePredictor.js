import React, { useState } from "react";
import { predictImage } from "../services/predictService";

const ImagePredictor = ({ onPredictionComplete }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("La imagen es demasiado grande. El tamaño máximo es 5MB.");
        return;
      }
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    try {
      const result = await predictImage(selectedFile);
      if (onPredictionComplete) {
        onPredictionComplete(result);
      }
    } catch (err) {
      setError("Error al procesar la imagen. Por favor, intente nuevamente.");
      console.error("Error detallado:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="image-predictor">
      <h2>Predicción de Imagen</h2>

      <form onSubmit={handleSubmit}>
        <div className="file-input-container">
          <label htmlFor="file-input" className="file-input-label">
            Selecciona una imagen
          </label>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="file-input"
          />
        </div>

        {preview && (
          <div className="preview-container">
            <img src={preview} alt="Preview" className="image-preview" />
          </div>
        )}

        <button
          type="submit"
          disabled={!selectedFile || loading}
          className="predict-button"
        >
          {loading ? "Procesando..." : "Identificar Especie"}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <style jsx>{`
        .image-predictor {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }

        .file-input-container {
          margin-bottom: 20px;
          text-align: center;
        }

        .file-input-label {
          display: block;
          margin-bottom: 10px;
          color: #666;
        }

        .file-input {
          width: 100%;
          padding: 10px;
          border: 2px dashed #ccc;
          border-radius: 4px;
          cursor: pointer;
        }

        .preview-container {
          margin: 20px 0;
          text-align: center;
        }

        .image-preview {
          max-width: 100%;
          max-height: 300px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .predict-button {
          background-color: #4caf50;
          color: white;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          width: 100%;
          transition: background-color 0.3s;
        }

        .predict-button:hover:not(:disabled) {
          background-color: #45a049;
        }

        .predict-button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }

        .error-message {
          color: #ff0000;
          margin: 10px 0;
          text-align: center;
          padding: 10px;
          background-color: #fff3f3;
          border-radius: 4px;
          border: 1px solid #ffcdd2;
        }
      `}</style>
    </div>
  );
};

export default ImagePredictor;
