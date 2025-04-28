import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
  });

  test("muestra los botones de navegación principales", () => {
    expect(screen.getByText(/Perfil/i)).toBeInTheDocument();
    expect(screen.getByText(/Nueva publicación/i)).toBeInTheDocument();
  });

  test("muestra el título de la aplicación", () => {
    expect(screen.getByText(/BioWatch/i)).toBeInTheDocument();
  });
});
