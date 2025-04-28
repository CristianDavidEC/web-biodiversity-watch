import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("muestra el botón de Google Sign-In", () => {
    render(<Login />);
    const button = screen.getByRole("button", {
      name: /registrarse con google/i,
    });
    expect(button).toBeInTheDocument();
  });

  test("el botón es accesible por teclado", () => {
    render(<Login />);
    const button = screen.getByRole("button", {
      name: /registrarse con google/i,
    });
    button.focus();
    expect(button).toHaveFocus();
  });

  test("muestra mensaje de error si falla la autenticación", () => {
    render(<Login errorMsg="Error de autenticación" />);
    expect(screen.getByText(/error de autenticación/i)).toBeInTheDocument();
  });
});
