import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  test("muestra las opciones principales", () => {
    render(<Home user={{ name: "Juan" }} isAdmin={false} />);
    expect(screen.getByText(/Buscar especie/i)).toBeInTheDocument();
    expect(screen.getByText(/Mi perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/Cargar\/Capturar imagen/i)).toBeInTheDocument();
    expect(screen.getByText(/Bienvenido, Juan/i)).toBeInTheDocument();
  });

  test("muestra el panel de administración si es admin", () => {
    render(<Home user={{ name: "Admin" }} isAdmin={true} />);
    expect(screen.getByText(/Panel de administración/i)).toBeInTheDocument();
  });
});
