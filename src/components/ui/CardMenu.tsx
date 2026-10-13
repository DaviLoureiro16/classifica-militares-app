import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import "../../styles/CardMenu.css";

interface CardMenuProps {
  to: string;
  titulo: string;
  descricao: string;
  icone: ReactNode;
}

export function CardMenu({ to, titulo, descricao, icone }: CardMenuProps) {
  return (
    <Link to={to} className="card-menu">
      <div className="card-menu__icone">{icone}</div>
      <div className="card-menu__conteudo">
        <h3 className="card-menu__titulo">{titulo}</h3>
        <p className="card-menu__descricao">{descricao}</p>
      </div>
    </Link>
  );
}
