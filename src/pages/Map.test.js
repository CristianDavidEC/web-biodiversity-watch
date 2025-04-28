import { render, screen } from "@testing-library/react";
import Map from "./Map";

describe("Map", () => {
  const mockPosts = [
    { id: 1, specie: "Cóndor Andino", location: "Nevado del Ruiz" },
    { id: 2, specie: "Orquídea", location: "Valle de las Tumbas" },
  ];

  test("muestra el mapa y los marcadores de publicaciones", () => {
    render(<Map posts={mockPosts} />);
    expect(screen.getByText(/Mapa interactivo/i)).toBeInTheDocument();
    expect(screen.getByText(/Cóndor Andino/i)).toBeInTheDocument();
    expect(screen.getByText(/Nevado del Ruiz/i)).toBeInTheDocument();
    expect(screen.getByText(/Orquídea/i)).toBeInTheDocument();
    expect(screen.getByText(/Valle de las Tumbas/i)).toBeInTheDocument();
  });

  test("muestra un mensaje si no hay publicaciones", () => {
    render(<Map posts={[]} />);
    expect(
      screen.getByText(/no hay datos para mostrar en el mapa/i)
    ).toBeInTheDocument();
  });
});
