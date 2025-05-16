import React from "react";
import { useNavigate } from "react-router-dom";

function Login({ errorMsg }) {
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    // Lógica de autenticación Google (mock)
    // Por ahora simulamos una autenticación exitosa
    navigate("/home");
  };

  return (
    <div className="login-container">
      <h1>Iniciar sesión o Registrarse</h1>
      <button onClick={handleGoogleSignIn} aria-label="Registrarse con Google">
        Registrarse con Google
      </button>
      {errorMsg && <div role="alert">{errorMsg}</div>}
    </div>
  );
}

export default Login;
