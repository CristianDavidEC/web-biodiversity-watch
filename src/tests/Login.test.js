import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../pages/Login";

test("muestra el botón de Google y responde al click", () => {
  render(<Login />);
  const button = screen.getByText(/Iniciar sesión con Google/i);
  expect(button).toBeInTheDocument();
  fireEvent.click(button);
  // Aquí solo verificamos que el botón existe y es clickeable (mock inicial)
});
