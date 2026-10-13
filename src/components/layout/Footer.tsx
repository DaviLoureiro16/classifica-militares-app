import { Link } from "react-router-dom";
import "../../styles/Layout.css";

export function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="layout-footer">
      <div className="layout-footer__container">
        <div className="layout-footer__info">
          <p className="layout-footer__titulo">Classifica Militares</p>
          <p className="layout-footer__descricao">
            Ferramenta gratuita para análise e classificação de concursos militares.
          </p>
        </div>
        <div className="layout-footer__links">
          <Link to="/sobre" className="layout-footer__link">Sobre o projeto</Link>
          <span className="layout-footer__divider">|</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="layout-footer__link"
          >
            Código-fonte
          </a>
        </div>
        <p className="layout-footer__copyright">
          &copy; {anoAtual} Classifica Militares. Processamento local — seus dados não saem do navegador.
        </p>
      </div>
    </footer>
  );
}
