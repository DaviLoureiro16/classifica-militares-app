# Classifica Militares

Aplicação web gratuita, responsiva e em português brasileiro, destinada à importação,
análise, classificação, reclassificação e consulta de resultados de concursos militares
brasileiros — inicialmente EPCAR e AFA.

## Características

- **Gratuita**: sem custo para os usuários.
- **Sem APIs pagas ou chaves secretas**: todas as funções essenciais funcionam localmente.
- **Processamento local**: os arquivos e nomes de candidatos são processados no navegador.
- **Sem cadastro obrigatório**: não exige contas, banco central de candidatos, rastreamento ou analytics.
- **Responsiva**: adaptada para computador, tablet e celular.
- **Código aberto**: organizado por funcionalidades, com tipagem TypeScript.

## Tecnologias

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) para navegação
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) para testes

## Estrutura do projeto

```
src/
├── components/
│   ├── layout/          # Header, Footer e Layout
│   └── ui/              # Componentes reutilizáveis (CardMenu, Badge)
├── pages/               # Páginas da aplicação
│   ├── HomePage.tsx
│   ├── ImportarPage.tsx
│   ├── ClassificacaoPage.tsx
│   ├── ConsultaPage.tsx
│   ├── SobrePage.tsx
│   └── PaginaConstrucao.tsx
├── styles/              # Estilos CSS por componente/página
├── types/               # Definições de tipos TypeScript
├── test/                # Testes automatizados
├── App.tsx              # Roteamento principal
├── main.tsx             # Ponto de entrada
└── index.css            # Estilos globais
```

## Instalação

```bash
# Instalar dependências
npm install
```

## Executar localmente

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Testes

```bash
# Executar testes uma vez
npm test

# Executar testes em modo observação
npm run test:watch
```

## Build e publicação

```bash
# Gerar build de produção (site estático)
npm run build

# Pré-visualizar o build
npm run preview
```

Os arquivos estáticos são gerados em `dist/` e podem ser publicados em qualquer
servidor de hospedagem estática (Netlify, Vercel, GitHub Pages, etc.).

## Lint

```bash
npm run lint
```

## Privacidade

Todos os dados são processados localmente no navegador. Nenhuma informação é enviada
para servidores externos. Ao fechar a aba, os dados importados são descartados.

## Aviso

A aplicação não inventa resultados, regras de edital ou informações oficiais. Todas as
classificações são baseadas exclusivamente nos dados importados pelo usuário e nas regras
definidas no edital correspondente.
