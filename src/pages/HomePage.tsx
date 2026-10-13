import { Link } from "react-router-dom";
import { CardMenu } from "../components/ui/CardMenu";
import "../styles/Home.css";

const menuItens = [
  {
    to: "/importar",
    titulo: "Importar Resultados",
    descricao: "Carregue arquivos de resultados de concursos militares (PDF, CSV ou texto) para processamento local.",
    icone: "📁",
  },
  {
    to: "/classificacao",
    titulo: "Classificação",
    descricao: "Visualize e reclassifique candidatos conforme as regras do edital, com ordenação automática.",
    icone: "🏆",
  },
  {
    to: "/consulta",
    titulo: "Consulta de Candidatos",
    descricao: "Busque candidatos por nome ou número de inscrição e veja sua classificação detalhada.",
    icone: "🔍",
  },
  {
    to: "/sobre",
    titulo: "Sobre o Projeto",
    descricao: "Conheça o Classifica Militares, sua finalidade, privacidade e como contribuir.",
    icone: "ℹ️",
  },
];

export function HomePage() {
  return (
    <div className="home">
      <section className="home__hero">
        <div className="home__hero-content">
          <span className="home__hero-badge">Ferramenta gratuita e de código aberto</span>
          <h1 className="home__hero-titulo">Classifica Militares</h1>
          <p className="home__hero-subtitulo">
            Importe, analise e classifique resultados de concursos militares brasileiros.
            Inicialmente compatível com EPCAR e AFA.
          </p>
          <div className="home__hero-cta">
            <Link to="/importar" className="home__btn home__btn--primario">
              Começar importação
            </Link>
            <Link to="/sobre" className="home__btn home__btn--secundario">
              Saber mais
            </Link>
          </div>
        </div>
        <div className="home__hero-info">
          <ul className="home__hero-lista">
            <li><span className="home__hero-check">✓</span> Processamento 100% local no navegador</li>
            <li><span className="home__hero-check">✓</span> Sem cadastro, sem rastreamento, sem analytics</li>
            <li><span className="home__hero-check">✓</span> Sem APIs pagas ou chaves secretas</li>
            <li><span className="home__hero-check">✓</span> Compatível com computador, tablet e celular</li>
          </ul>
        </div>
      </section>

      <section className="home__menu">
        <h2 className="home__menu-titulo">O que você pode fazer</h2>
        <div className="home__menu-grid">
          {menuItens.map((item) => (
            <CardMenu
              key={item.to}
              to={item.to}
              titulo={item.titulo}
              descricao={item.descricao}
              icone={item.icone}
            />
          ))}
        </div>
      </section>

      <section className="home__concursos">
        <h2 className="home__concursos-titulo">Concursos suportados</h2>
        <div className="home__concursos-lista">
          <div className="home__concurso-card">
            <h3>EPCAR</h3>
            <p>Escola Preparatória de Cadetes do Ar — Concurso de Admissão ao Curso do CPCAR</p>
          </div>
          <div className="home__concurso-card">
            <h3>AFA</h3>
            <p>Academia da Força Aérea</p>
          </div>
          <div className="home__concurso-card home__concurso-card--em-breve">
            <h3>Outros</h3>
            <p>Em breve: mais concursos militares</p>
          </div>
        </div>
      </section>
    </div>
  );
}
