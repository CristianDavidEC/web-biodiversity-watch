import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadImage() {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Formato no soportado");
      setFileName("");
    } else {
      setFileName(file.name);
      setError("");
    }
  };

  const handleUpload = () => {
    if (!fileName) return;
    // Simular resultado de IA
    navigate("/ia-result");
  };

  return (
    <div className="upload-image-container">
      <label htmlFor="file-input">Selecciona una imagen</label>
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Subir imagen</button>
      {fileName && <p>{fileName}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default UploadImage;
