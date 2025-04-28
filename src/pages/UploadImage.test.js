import { render, screen, fireEvent } from "@testing-library/react";
import UploadImage from "./UploadImage";

describe("UploadImage", () => {
  test("muestra el input de archivo y el botón de subir", () => {
    render(<UploadImage />);
    expect(screen.getByLabelText(/selecciona una imagen/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /subir imagen/i })
    ).toBeInTheDocument();
  });

  test("muestra el nombre del archivo seleccionado", () => {
    render(<UploadImage />);
    const file = new File(["dummy content"], "foto.jpg", {
      type: "image/jpeg",
    });
    const input = screen.getByLabelText(/selecciona una imagen/i);
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText(/foto.jpg/i)).toBeInTheDocument();
  });

  test("muestra un mensaje de error si el formato no es válido", () => {
    render(<UploadImage />);
    const file = new File(["dummy content"], "documento.pdf", {
      type: "application/pdf",
    });
    const input = screen.getByLabelText(/selecciona una imagen/i);
    fireEvent.change(input, { target: { files: [file] } });
    expect(screen.getByText(/formato no soportado/i)).toBeInTheDocument();
  });
});
