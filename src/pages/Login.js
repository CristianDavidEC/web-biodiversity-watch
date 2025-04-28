import React from "react";

const Login = () => {
  const handleGoogleLogin = () => {
    // Aquí irá la lógica real de autenticación con Google
    alert("Login con Google (mock)");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Iniciar sesión</h2>
      <button
        onClick={handleGoogleLogin}
        style={{ padding: "0.5rem 1rem", fontSize: "1rem" }}
      >
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
