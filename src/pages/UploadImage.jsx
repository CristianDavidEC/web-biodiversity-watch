import React from "react";
import { useNavigate } from "react-router-dom";
import ImagePredictor from "../components/ImagePredictor";

function UploadImage() {
  const navigate = useNavigate();

  const handlePredictionResult = (result) => {
    console.log("Resultado recibido en UploadImage:", result);
    
    // Navegar a la página de resultados con el estado
    navigate("/ia-result", { 
      state: { result } 
    });
  };

  return (
    <div className="upload-image-container">
      <h1>Subir Imagen para Identificación</h1>
      <p className="upload-description">
        Sube una imagen de una especie para identificarla usando nuestra IA
      </p>
      <ImagePredictor onPredictionComplete={handlePredictionResult} />
      
      <style jsx>{`
        .upload-image-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .upload-description {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
        }

        h1 {
          text-align: center;
          color: #333;
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default UploadImage;
