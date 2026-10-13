export type ConcursoType = "EPCAR" | "AFA" | string;

export interface DadosCandidato {
  nome: string;
  numeroInscricao: string;
  cpf?: string;
  notas: Record<string, number>;
  classificacao?: number;
  status?: string;
}

export interface ResultadoImportado {
  concurso: string;
  tipo: ConcursoType;
  ano: number;
  candidatos: DadosCandidato[];
  totalCandidatos: number;
  dataImportacao: string;
}

export interface ItemMenu {
  label: string;
  path: string;
  descricao: string;
  icone: string;
}
