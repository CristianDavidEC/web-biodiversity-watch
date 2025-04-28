import { render, screen, fireEvent } from "@testing-library/react";
import SearchSpecies from "./SearchSpecies";

describe("SearchSpecies", () => {
  const mockSpecies = [
    { id: 1, name: "Cóndor Andino" },
    { id: 2, name: "Orquídea" },
    { id: 3, name: "Frailejón" },
  ];

  test("muestra el campo de búsqueda y el botón", () => {
    render(<SearchSpecies species={mockSpecies} />);
    expect(screen.getByPlaceholderText(/buscar especie/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /buscar/i })).toBeInTheDocument();
  });

  test("muestra resultados al buscar una especie existente", () => {
    render(<SearchSpecies species={mockSpecies} />);
    fireEvent.change(screen.getByPlaceholderText(/buscar especie/i), {
      target: { value: "Cóndor" },
    });
    fireEvent.click(screen.getByRole("button", { name: /buscar/i }));
    expect(screen.getByText(/Cóndor Andino/i)).toBeInTheDocument();
    expect(screen.queryByText(/Orquídea/i)).not.toBeInTheDocument();
  });

  test("muestra mensaje si no hay resultados", () => {
    render(<SearchSpecies species={mockSpecies} />);
    fireEvent.change(screen.getByPlaceholderText(/buscar especie/i), {
      target: { value: "Tigre" },
    });
    fireEvent.click(screen.getByRole("button", { name: /buscar/i }));
    expect(screen.getByText(/no se encontraron especies/i)).toBeInTheDocument();
  });
});
