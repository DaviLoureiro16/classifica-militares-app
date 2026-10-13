import { Badge } from "../components/ui/Badge";
import "../styles/PaginaConstrucao.css";

interface PaginaConstrucaoProps {
  titulo: string;
  descricao: string;
}

export function PaginaConstrucao({ titulo, descricao }: PaginaConstrucaoProps) {
  return (
    <div className="construcao">
      <div className="construcao__card">
        <div className="construcao__icon">🔧</div>
        <h1 className="construcao__titulo">{titulo}</h1>
        <p className="construcao__descricao">{descricao}</p>
        <div className="construcao__badge">
          <Badge variante="aviso">Em desenvolvimento</Badge>
        </div>
        <p className="construcao__info">
          Esta funcionalidade fará parte de uma próxima etapa. A estrutura da aplicação
          já está preparada para recebe-la.
        </p>
      </div>
    </div>
  );
}
