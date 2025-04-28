import { render, screen, fireEvent } from "@testing-library/react";
import RequestVerification from "./RequestVerification";

describe("RequestVerification", () => {
  test("muestra el formulario de solicitud de verificación", () => {
    render(<RequestVerification />);
    expect(screen.getByLabelText(/nombre sugerido/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/descripción/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ubicación/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /solicitar verificación/i })
    ).toBeInTheDocument();
  });

  test("muestra mensaje de éxito al solicitar verificación", () => {
    render(<RequestVerification />);
    fireEvent.change(screen.getByLabelText(/nombre sugerido/i), {
      target: { value: "Ave misteriosa" },
    });
    fireEvent.change(screen.getByLabelText(/descripción/i), {
      target: { value: "Ave grande y negra" },
    });
    fireEvent.change(screen.getByLabelText(/ubicación/i), {
      target: { value: "Nevado del Ruiz" },
    });
    fireEvent.click(
      screen.getByRole("button", { name: /solicitar verificación/i })
    );
    expect(
      screen.getByText(/solicitud enviada exitosamente/i)
    ).toBeInTheDocument();
  });
});
