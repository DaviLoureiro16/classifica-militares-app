import { useState, useRef } from "react";
import { Badge } from "../components/ui/Badge";
import "../styles/Importar.css";

export function ImportarPage() {
  const [arquivoNome, setArquivoNome] = useState<string | null>(null);
  const [candidatos, setCandidatos] = useState<number>(0);
  const [tipoSelecionado, setTipoSelecionado] = useState<string>("EPCAR");
  const inputRef = useRef<HTMLInputElement>(null);

  const tiposConcurso = ["EPCAR", "AFA"];

  const handleArquivoSelecionado = (e: React.ChangeEvent<HTMLInputElement>) => {
    const arquivo = e.target.files?.[0];
    if (arquivo) {
      setArquivoNome(arquivo.name);
      setCandidatos(0);
    }
  };

  const handleProcessar = () => {
    if (arquivoNome) {
      setCandidatos(0);
    }
  };

  const handleArrastar = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSoltar = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const arquivo = e.dataTransfer.files?.[0];
    if (arquivo) {
      setArquivoNome(arquivo.name);
      setCandidatos(0);
    }
  };

  return (
    <div className="importar">
      <div className="importar__header">
        <h1 className="importar__titulo">Importar Resultados</h1>
        <p className="importar__descricao">
          Carregue arquivos de resultados de concursos militares. O processamento
          acontece inteiramente no seu navegador — nenhum dado é enviado para servidores.
        </p>
      </div>

      <div className="importar__form">
        <div className="importar__campo">
          <label className="importar__label">Tipo de concurso</label>
          <select
            className="importar__select"
            value={tipoSelecionado}
            onChange={(e) => setTipoSelecionado(e.target.value)}
          >
            {tiposConcurso.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="importar__campo">
          <label className="importar__label">Ano do concurso</label>
          <input
            type="number"
            className="importar__input"
            placeholder="Ex.: 2025"
            min={2000}
            max={2100}
          />
        </div>
      </div>

      <div
        className="importar__dropzone"
        onDragOver={handleArrastar}
        onDragLeave={handleArrastar}
        onDrop={handleSoltar}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.csv,.txt,.xlsx"
          onChange={handleArquivoSelecionado}
          style={{ display: "none" }}
        />
        <div className="importar__dropzone-icon">📄</div>
        {arquivoNome ? (
          <>
            <p className="importar__dropzone-arquivo">{arquivoNome}</p>
            <p className="importar__dropzone-info">Clique para trocar o arquivo</p>
          </>
        ) : (
          <>
            <p className="importar__dropzone-texto">
              Arraste um arquivo aqui ou clique para selecionar
            </p>
            <p className="importar__dropzone-info">
              Formatos suportados: PDF, CSV, TXT, XLSX
            </p>
          </>
        )}
      </div>

      {arquivoNome && (
        <div className="importar__status">
          <div className="importar__status-linha">
            <span className="importar__status-label">Arquivo:</span>
            <span className="importar__status-valor">{arquivoNome}</span>
          </div>
          <div className="importar__status-linha">
            <span className="importar__status-label">Tipo:</span>
            <Badge>{tipoSelecionado}</Badge>
          </div>
          <div className="importar__status-linha">
            <span className="importar__status-label">Candidatos:</span>
            <span className="importar__status-valor">
              {candidatos > 0 ? candidatos : "Aguardando processamento"}
            </span>
          </div>
          <button
            className="importar__btn-processar"
            onClick={handleProcessar}
          >
            Processar arquivo
          </button>
        </div>
      )}

      <div className="importar__aviso">
        <p>
          <strong>Privacidade:</strong> Todos os dados são processados localmente no seu
          navegador. Nenhuma informação é enviada para servidores externos. Ao fechar a
          aba, os dados importados são descartados.
        </p>
      </div>
    </div>
  );
}
