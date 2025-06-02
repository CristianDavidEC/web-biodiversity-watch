const API_URL = "http://localhost:8082";

export const predictImage = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    console.log("Enviando request a:", `${API_URL}/predict`);
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al procesar la imagen");
    }

    const data = await response.json();
    console.log("Respuesta del servidor:", data);

    // Transformar la respuesta al formato esperado por la aplicación
    const result = {
      status: "known",
      especie: data.especie,
      indice: data.indice,
      probabilidades: data.probabilidades,
    };

    console.log("Resultado transformado:", result);
    return result;
  } catch (error) {
    console.error("Error en predictImage:", error);
    throw error;
  }
};
