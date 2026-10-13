import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variante?: "padrao" | "sucesso" | "aviso" | "erro";
}

const estilos: Record<string, string> = {
  padrao: "badge--padrao",
  sucesso: "badge--sucesso",
  aviso: "badge--aviso",
  erro: "badge--erro",
};

export function Badge({ children, variante = "padrao" }: BadgeProps) {
  return (
    <span className={`badge ${estilos[variante]}`}>{children}</span>
  );
}
