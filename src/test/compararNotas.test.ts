import { describe, it, expect } from "vitest";

export function compararNotas(a: number, b: number): number {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

describe("compararNotas", () => {
  it("retorna -1 quando a primeira nota é maior", () => {
    expect(compararNotas(90, 80)).toBe(-1);
  });

  it("retorna 1 quando a primeira nota é menor", () => {
    expect(compararNotas(70, 85)).toBe(1);
  });

  it("retorna 0 quando as notas são iguais", () => {
    expect(compararNotas(75, 75)).toBe(0);
  });
});
