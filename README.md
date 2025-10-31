## webhooks-inspector

Projeto fullstack simples para inspecionar webhooks (API + frontend).

### Descrição

Aplicação para receber, armazenar e listar webhooks — possui uma API em TypeScript e um frontend em Vite + React. Estrutura em monorepo com `api/` e `web/`.

### Tecnologias

- Node.js + TypeScript
- pnpm (workspaces)
- API: Drizzle (ORM), TypeScript
- Frontend: Vite + React
- Docker / docker-compose (opcional, para o banco de dados)

### Pré-requisitos

- Node.js (versão LTS recomendada)
- pnpm instalado globalmente (`npm i -g pnpm`)
- Docker (opcional, para rodar serviços via docker-compose)

### Instalação (rápida)

Abra um terminal na raiz do projeto e execute:

```bash
pnpm install
```

Isso instalará dependências para todo o monorepo.

### Executando em desenvolvimento

Existem duas partes: a API e o frontend. Recomendo abrir dois terminais.

1. (Opcional) Subir serviços de infraestrutura (ex.: DB) via Docker:

```bash
cd api
docker-compose up -d
```

2. Rodar a API:

```bash
cd api
pnpm install # se ainda não instalou na pasta específica
pnpm dev     # ou pnpm start dependendo do script definido
```

3. Rodar o frontend:

```bash
cd web
pnpm install
pnpm dev
```

Por padrão o frontend costuma rodar em `http://localhost:5173` (Vite) e a API em `http://localhost:3000`, mas os valores podem variar conforme os scripts/variáveis de ambiente do projeto.

### Migrations / Banco de dados

As migrações estão em `api/src/db/migrations/`. Se estiver usando a CLI do Drizzle (drizzle-kit) ou outra ferramenta, aplique as migrações conforme as instruções/rotinas do projeto (por exemplo: `pnpm --filter api run migrate`).

### Estrutura principal

- `api/` - código da API, migrations e configuração do banco
- `web/` - frontend em Vite + React
- `package.json`, `pnpm-workspace.yaml` - configuração de workspace e scripts

### Observações rápidas

- Se um comando `pnpm dev` não existir em uma das pastas, cheque `package.json` dentro de `api/` ou `web/` para o script correto (ex.: `start`, `serve`).
- Variáveis de ambiente estão em `api/src/env.ts` — ajuste conforme necessário.

Se quiser, eu posso ajustar o README com comandos exatos baseados nos scripts presentes em `package.json` (posso abrir os arquivos e sincronizar os comandos). Quer que eu faça isso agora?
