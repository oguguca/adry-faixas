# Auditoria UI/UX — Adry Faixas

Auditoria completa do zip entregue em 04/09/2026, seguida do refactor da interface com a metodologia UI UX Pro Max.

## O que foi analisado

- Todos os arquivos em `src/`.
- `globals.css` e a camada adicional `redesign.css`.
- Configuração Next.js, TypeScript, ESLint e PostCSS.
- Scripts de build/export e geração do logo.
- Todos os assets de imagem usados ou disponíveis em `public/images`.
- Vídeos disponíveis em `public/videos`.
- Estrutura de navegação, interação, FAQ, CTA e conversão.

## Problemas encontrados no código anterior

### 1. CSS acumulado e difícil de manter

O `globals.css` anterior tinha aproximadamente:

- 4.740 linhas;
- 706 blocos de regra;
- 143 seletores repetidos em mais de um local;
- 20 media queries;
- 73 declarações de fonte abaixo de 12px;
- 23 usos de `overflow: hidden`.

Além disso, `redesign.css` adicionava mais 473 linhas por cima do arquivo principal. Isso tornava o comportamento visual dependente da ordem de sobrescrita e aumentava a chance de regressão.

**Refactor:** `globals.css` foi reescrito como um único sistema visual, com tokens semânticos e responsividade organizada.

### 2. A estética estava sobrecarregada

O site combinava muitas linguagens ao mesmo tempo:

- números 01/02/03 em quase todas as seções;
- grids decorativos;
- shapes grandes de fundo;
- micro-labels em excesso;
- cards dentro de cards;
- setas `↗` repetidas;
- marquee automático;
- magnetismo em botões;
- spotlight seguindo o mouse;
- scroll progress;
- contador animado;
- frases publicitárias em quase todo bloco.

O conjunto criava a sensação de "template premium gerado por IA" em vez de uma empresa física com história e produção real.

**Refactor:** fotografia real, tipografia editorial e espaço em branco passaram a ser a linguagem principal.

### 3. Problemas de responsividade estrutural

Havia regras que forçavam seções inteiras a ocupar exatamente uma viewport e aplicavam `max-height`. Isso causou o bug já observado na FAQ quando o conteúdo crescia.

**Refactor:** todas as seções têm altura natural. Não existe mais scroll-snap obrigatório nem compressão de conteúdo para caber em 100vh.

### 4. Corpo de texto pequeno

O CSS anterior tinha dezenas de textos em 6–11px. Isso reduzia legibilidade em desktop e piorava muito em telas menores.

**Refactor:** corpo base de 16px; labels não descem de 12px.

### 5. Movimento demais para pouca função

`ScrollEffects.tsx` acumulava reveal, contador, spotlight, magnet e progress bar. Era mais lógica de efeito do que lógica de UX.

**Refactor:** o componente agora cuida somente de reveal sutil e estado ativo da navegação.

### 6. Carrossel automático de projetos

O marquee privilegiava movimento contínuo e hover. Isso reduz controle do usuário, dificulta inspeção dos trabalhos e é pior para reduced motion.

**Refactor:** os projetos viraram um grid editorial estático e assimétrico. O visitante controla o ritmo de leitura.

### 7. Vídeo sem controle persistente

O hero tentava iniciar autoplay e só mostrava um botão quando o navegador bloqueava a reprodução.

**Refactor:** o vídeo possui controle de pausar/reproduzir sempre acessível. Com `prefers-reduced-motion`, não inicia sozinho.

### 8. Falta de foco explícito em trabalho real

Os assets do projeto são fortes: fachadas, veículos, vitrines, oficina e o projeto Liberdade. Porém, a decoração competia com essas provas reais.

**Refactor:** trabalhos e bastidores ganharam mais espaço; decoração foi reduzida.

## Decisões da UI UX Pro Max aplicadas

- Acessibilidade antes de estética.
- Targets interativos >=44px.
- Contraste normal >=4.5:1.
- Foco visível.
- Imagens responsivas com `next/image` e espaço reservado.
- Mobile-first.
- Sem rolagem horizontal.
- Sem texto corporal menor que 12px.
- Motion sutil, contextual e com reduced motion.
- Design tokens semânticos.
- Grid editorial assimétrico para dar personalidade sem excesso de efeitos.

## Direção final

A Adry passa a parecer uma empresa de comunicação visual real e experiente:

- industrial sem ser "brutalista de template";
- editorial sem parecer revista de moda;
- moderna sem parecer SaaS;
- laranja como identidade e CTA, não como tinta espalhada na tela;
- trabalhos reais como principal prova de qualidade.
