import React, { useState } from "react";

function RequestVerification() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return <p>Solicitud enviada exitosamente</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Solicitar verificación de especie</h2>
      <label>
        Nombre sugerido
        <input
          aria-label="Nombre sugerido"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Descripción
        <textarea
          aria-label="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Ubicación
        <input
          aria-label="Ubicación"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button type="submit">Solicitar verificación</button>
    </form>
  );
}

export default RequestVerification;
