import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SearchSpecies from "./pages/SearchSpecies";
import UploadImage from "./pages/UploadImage";
import IAResult from "./pages/IAResult";
import CreatePost from "./pages/CreatePost";
import RequestVerification from "./pages/RequestVerification";
import Posts from "./pages/Posts";
import Map from "./pages/Map";
import MainLayout from "./components/MainLayout";
import "./App.css";

function CreatePostWrapper() {
  const location = useLocation();
  const specieName = location.state?.specieName;
  if (!specieName) return <p>No se ha seleccionado especie</p>;
  return <CreatePost specieName={specieName} />;
}

function App() {
  // Por ahora usaremos un estado mock para simular la autenticación
  const isAuthenticated = true;
  const mockUser = {
    name: "Usuario Ejemplo",
    email: "usuario@ejemplo.com",
    posts: [
      {
        id: 1,
        title: "Avistamiento de cóndor",
        specie: "Cóndor Andino",
        location: "Nevado del Ruiz",
      },
      {
        id: 2,
        title: "Orquídea silvestre",
        specie: "Orquídea",
        location: "Valle de las Tumbas",
      },
    ],
  };
  const mockSpecies = [
    { id: 1, name: "Cóndor Andino" },
    { id: 2, name: "Orquídea" },
    { id: 3, name: "Frailejón" },
  ];
  const mockIAResult = { status: "known", specie: { name: "Cóndor Andino" } };
  const mockIAUnknown = { status: "unknown" };
  const mockPosts = mockUser.posts;

  return (
    <Router>
      <MainLayout>
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
            <Route
              path="/ia-unknown"
              element={
                isAuthenticated ? (
                  <IAResult result={mockIAUnknown} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/create-post"
              element={
                isAuthenticated ? (
                  <CreatePostWrapper />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/request-verification"
              element={
                isAuthenticated ? (
                  <RequestVerification />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/posts"
              element={
                isAuthenticated ? (
                  <Posts posts={mockPosts} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/map"
              element={
                isAuthenticated ? (
                  <Map posts={mockPosts} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
          </Routes>
        </div>
      </MainLayout>
    </Router>
  );
}

export default App;
