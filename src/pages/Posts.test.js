import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts", () => {
  const mockPosts = [
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
  ];

  test("muestra la lista de publicaciones", () => {
    render(<Posts posts={mockPosts} />);
    expect(screen.getByText(/Avistamiento de cóndor/i)).toBeInTheDocument();
    expect(screen.getByText(/Cóndor Andino/i)).toBeInTheDocument();
    expect(screen.getByText(/Nevado del Ruiz/i)).toBeInTheDocument();
    expect(screen.getByText(/Orquídea silvestre/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Orquídea/i)).toHaveLength(2);
    expect(screen.getByText(/Valle de las Tumbas/i)).toBeInTheDocument();
  });

  test("muestra un mensaje si no hay publicaciones", () => {
    render(<Posts posts={[]} />);
    expect(
      screen.getByText(/no hay publicaciones para mostrar/i)
    ).toBeInTheDocument();
  });
});
