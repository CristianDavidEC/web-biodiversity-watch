import { render, screen, fireEvent } from "@testing-library/react";
import IAResult from "./IAResult";

describe("IAResult", () => {
  test("muestra el nombre de la especie identificada y botón para crear post", () => {
    render(
      <IAResult
        result={{ status: "known", specie: { name: "Cóndor Andino" } }}
      />
    );
    expect(screen.getByText(/especie identificada/i)).toBeInTheDocument();
    expect(screen.getByText(/Cóndor Andino/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /crear post/i })
    ).toBeInTheDocument();
  });

  test("muestra mensaje y botón para solicitar verificación si la especie es nueva", () => {
    render(<IAResult result={{ status: "unknown" }} />);
    expect(
      screen.getByText(/no se pudo identificar la especie/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /solicitar verificación/i })
    ).toBeInTheDocument();
  });
});
