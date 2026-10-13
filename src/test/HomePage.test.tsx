import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";

describe("HomePage", () => {
  it("exibe o título Classifica Militares", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const titulo = screen.getByText("Classifica Militares");
    expect(titulo).toBeInTheDocument();
  });

  it("exibe link para importar resultados", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    const link = screen.getByText("Começar importação");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/importar");
  });

  it("exibe concursos suportados", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );
    expect(screen.getByText("EPCAR")).toBeInTheDocument();
    expect(screen.getByText("AFA")).toBeInTheDocument();
  });
});
