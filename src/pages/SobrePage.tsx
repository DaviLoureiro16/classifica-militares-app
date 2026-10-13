import "../styles/Sobre.css";

export function SobrePage() {
  return (
    <div className="sobre">
      <div className="sobre__container">
        <h1 className="sobre__titulo">Sobre o Classifica Militares</h1>
        <p className="sobre__intro">
          O Classifica Militares é uma aplicação web gratuita e de código aberto,
          criada para auxiliar na importação, análise, classificação e consulta de
          resultados de concursos militares brasileiros.
        </p>

        <section className="sobre__secao">
          <h2 className="sobre__secao-titulo">Finalidade</h2>
          <p className="sobre__secao-texto">
            A ferramenta foi desenvolvida para facilitar o trabalho de quem precisa
            processar resultados de concursos como EPCAR e AFA, permitindo
            importar arquivos, visualizar classificações e buscar candidatos de
            forma rápida e confiável.
          </p>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__secao-titulo">Privacidade</h2>
          <ul className="sobre__lista">
            <li>Todos os dados são processados localmente no seu navegador.</li>
            <li>Nenhum dado é enviado para servidores externos.</li>
            <li>Não há criação obrigatória de contas ou cadastro.</li>
            <li>Não utilizamos rastreamento ou analytics.</li>
            <li>Ao fechar a aba, os dados importados são descartados.</li>
          </ul>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__secao-titulo">Tecnologias</h2>
          <ul className="sobre__lista">
            <li>React + TypeScript + Vite</li>
            <li>Componentes reutilizáveis e arquitetura modular</li>
            <li>Interface responsiva (computador, tablet e celular)</li>
            <li>Processamento local no navegador</li>
            <li>Sem dependência de APIs pagas ou serviços externos</li>
          </ul>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__secao-titulo">Concursos suportados</h2>
          <p className="sobre__secao-texto">
            Inicialmente, a aplicação é compatível com os concursos EPCAR e AFA.
            Outros concursos militares poderão ser adicionados no futuro.
          </p>
        </section>

        <section className="sobre__secao">
          <h2 className="sobre__secao-titulo">Aviso importante</h2>
          <p className="sobre__secao-texto sobre__secao-texto--destaque">
            A aplicação não inventa resultados, regras de edital ou informações oficiais.
            Todas as classificações são baseadas exclusivamente nos dados importados pelo
            usuário e nas regras definidas no edital correspondente.
          </p>
        </section>
      </div>
    </div>
  );
}
