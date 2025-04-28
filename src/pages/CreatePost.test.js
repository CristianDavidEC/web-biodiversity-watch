import { render, screen, fireEvent } from "@testing-library/react";
import CreatePost from "./CreatePost";

describe("CreatePost", () => {
  test("muestra el formulario de publicación", () => {
    render(<CreatePost specieName="Cóndor Andino" />);
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descripción/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ubicación/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /publicar/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/especie: cóndor andino/i)).toBeInTheDocument();
  });

  test("muestra mensaje de éxito al publicar", () => {
    render(<CreatePost specieName="Cóndor Andino" />);
    fireEvent.change(screen.getByLabelText(/título/i), {
      target: { value: "Avistamiento" },
    });
    fireEvent.change(screen.getByLabelText(/descripción/i), {
      target: { value: "Visto en la montaña" },
    });
    fireEvent.change(screen.getByLabelText(/ubicación/i), {
      target: { value: "Nevado del Ruiz" },
    });
    fireEvent.click(screen.getByRole("button", { name: /publicar/i }));
    expect(
      screen.getByText(/publicación creada exitosamente/i)
    ).toBeInTheDocument();
  });
});
