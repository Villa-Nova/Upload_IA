### Commands
  - pnpm init: iniciar o projeto node
  - pnpm i typescript @types/node tsx -D: TS p/ usar o TS, types/node p/ integrar o TS c/ o Node e tsx p/ ele executar o TS sem eu precisar converter esse código p/ JS.

  - pnpm i fastify: framework p/ as rotas http.
  - pnpm i prisma: P/ instalar o prisma, serve p/ criar os db
  - pnpm prisma init --datasource-provider sqlite: P/ usar o sqlite como db. 
  - pnpm prisma migrate dev: Dps de contruido as models em schema.prisma. Isso vai criar as migrations.

  - pnpm prisma studio: P/ visualizar o meu db.
  - pnpm i @fastify/multipart: Intala o pacote para suportar arquivos do tipo não JSON.
  - pnpm i zod: P/ fazer as validações de dados existentes.
  - pnpm i openai: Lib OpenAI
  - pnpm i dotenv -D: P/ o Node conseguir ler meu arq .env e eu usar as var de ambiente.(Dps da att 20 n precisa).

  - pnpm i @fastify/cors: Cors é uma forma de fazer com que meu backend só possa ser acessado por alguns frontends especificos.

  - pnpm i ai: Ajuda a retornar a resposta da I.A aos poucos.
  - pnpm prisma db seed: Faz a geração dos prompts no banco de dado.

 ### Serviço externo p/ upload de arquivo:
  - Amazon s3
  - cloudflare R2: Não cobra taxa de download.
