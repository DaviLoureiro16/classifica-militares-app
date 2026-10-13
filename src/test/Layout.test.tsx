import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout/Layout";

describe("Layout", () => {
  it("renderiza o cabeçalho com o nome do projeto", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<div>Conteúdo de teste</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    const elementos = screen.getAllByText("Classifica Militares");
    expect(elementos.length).toBeGreaterThanOrEqual(1);
  });

  it("renderiza os itens do menu de navegação", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<div>Conteúdo</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Início")).toBeInTheDocument();
    expect(screen.getByText("Importar")).toBeInTheDocument();
    expect(screen.getByText("Classificação")).toBeInTheDocument();
    expect(screen.getByText("Consulta")).toBeInTheDocument();
    expect(screen.getByText("Sobre")).toBeInTheDocument();
  });
});
