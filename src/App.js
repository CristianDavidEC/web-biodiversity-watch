import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchSpecies from "./pages/SearchSpecies";
import UploadImage from "./pages/UploadImage";
import IAResult from "./pages/IAResult";
import "./App.css";

function App() {
  // Por ahora usaremos un estado mock para simular la autenticación
  const isAuthenticated = true;
  const mockUser = {
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    posts: [
      { id: 1, title: "Avistamiento de cóndor", specie: "Cóndor Andino" },
      { id: 2, title: "Orquídea silvestre", specie: "Orquídea" },
    ],
  };
  const mockSpecies = [
    { id: 1, name: "Cóndor Andino" },
    { id: 2, name: "Orquídea" },
    { id: 3, name: "Frailejón" },
  ];
  const mockIAResult = { status: "known", specie: { name: "Cóndor Andino" } };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home user={mockUser} isAdmin={false} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/profile"
            element={
              isAuthenticated ? (
                <Profile user={mockUser} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/search"
            element={
              isAuthenticated ? (
                <SearchSpecies species={mockSpecies} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/upload"
            element={
              isAuthenticated ? (
                <UploadImage />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route
            path="/ia-result"
            element={
              isAuthenticated ? (
                <IAResult result={mockIAResult} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
