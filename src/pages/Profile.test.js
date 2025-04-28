import { render, screen } from "@testing-library/react";
import Profile from "./Profile";

describe("Profile", () => {
  const mockUser = {
    name: "Juan Pérez",
    email: "juan@example.com",
    posts: [
      { id: 1, title: "Avistamiento de cóndor", specie: "Cóndor Andino" },
      { id: 2, title: "Orquídea silvestre", specie: "Orquídea" },
    ],
  };

  test("muestra la información básica del usuario", () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText(/Juan Pérez/i)).toBeInTheDocument();
    expect(screen.getByText(/juan@example.com/i)).toBeInTheDocument();
  });

  test("muestra la lista de publicaciones del usuario", () => {
    render(<Profile user={mockUser} />);
    expect(screen.getByText(/Avistamiento de cóndor/i)).toBeInTheDocument();
    expect(screen.getByText(/Cóndor Andino/i)).toBeInTheDocument();
    expect(screen.getByText(/Orquídea silvestre/i)).toBeInTheDocument();
    // 'Orquídea' aparece dos veces: en el título y en la especie
    expect(screen.getAllByText(/Orquídea/i)).toHaveLength(2);
  });

  test("muestra un mensaje si el usuario no tiene publicaciones", () => {
    const userSinPosts = { ...mockUser, posts: [] };
    render(<Profile user={userSinPosts} />);
    expect(screen.getByText(/no tienes publicaciones/i)).toBeInTheDocument();
  });
});
