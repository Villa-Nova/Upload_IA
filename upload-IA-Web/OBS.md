### Tools
  - Vite(React, TS).
  - Tailwind CSS.
    - postcss, autoprefixer: dependências do TW.

  - Radix UI(Lib de componentes sem estilização).
  - Shadcn/ui(Lib de componentes usando TW).

### commands
  - pnpm add -D tailwindcss postcss autoprefixer

    npx tailwindcss init -p

  - npm i -D @types/node: Permite usar api internas do node dentro do arq de config do vite. Faço iso para o vite entender o lance de importes com @.

  - pnpm dlx shadcn-ui@latest init: Rodar a lib
  - pnpm i lucide-react: lib de icones
  - pnpm dlx shadcn-ui@latest add separator: Componente separador
  - pnpm dlx shadcn-ui@latest add textarea: Componente textarea
  - pnpm install @ffmpeg/ffmpeg @ffmpeg/util: Para poder usar o WebAssemble, uma formade rodar códigos backends no navegador.
  - pnpm i axios: P/ fazer a integração com o backend.
  - pnpm i ai: Faz a resposta da I.A vir em partes.

##### OBS:
  - Usando o comando de instalação do Shadcn/ui eu já instalo automatico o TW e o Radix.
  - Usando o TW junto do Radix obtemos o Shadcn/ui.