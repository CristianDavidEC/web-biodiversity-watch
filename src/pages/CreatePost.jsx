import React, { useState } from "react";

function CreatePost({ specieName }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return <p>Publicación creada exitosamente</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear publicación</h2>
      <p>Especie: {specieName}</p>
      <label>
        Título
        <input
          aria-label="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
      <button type="submit">Publicar</button>
    </form>
  );
}

export default CreatePost;
