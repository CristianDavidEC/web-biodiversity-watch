import React from "react";

function Login({ errorMsg }) {
  const handleGoogleSignIn = () => {
    // Lógica de autenticación Google (mock)
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
