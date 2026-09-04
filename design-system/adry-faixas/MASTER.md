# Adry Faixas — Design System

Sistema visual consolidado para a home da Adry, derivado da metodologia UI UX Pro Max e ajustado à identidade real da marca.

## Direção

- **Produto:** site institucional / serviço local de comunicação visual.
- **Objetivo:** transmitir confiança, experiência e capacidade de produção; levar o visitante ao orçamento pelo WhatsApp.
- **Estilo principal:** Editorial Grid + Swiss Minimalism.
- **Camada humana:** fotografia documental da oficina e dos trabalhos reais.
- **Evitar:** estética SaaS, grids decorativos excessivos, glow, glassmorphism, cards em excesso, microcopy de efeito em cada bloco, autoplay sem controle, carrosséis automáticos e animações magnéticas.

## Paleta semântica

| Token | Valor | Uso |
|---|---:|---|
| `--color-ink` | `#171612` | texto principal, fundos escuros |
| `--color-ink-soft` | `#24231F` | superfícies escuras secundárias |
| `--color-paper` | `#F2EEE5` | fundo principal quente |
| `--color-paper-deep` | `#E7DFD2` | seção de apoio / contraste suave |
| `--color-surface` | `#FFFDF8` | superfícies claras |
| `--color-muted` | `#5F5A52` | texto secundário em claro |
| `--color-muted-dark` | `#BDB8AE` | texto secundário em escuro |
| `--color-accent` | `#FF5B14` | CTA, foco, destaques de marca |

O laranja é **acento**, não fundo dominante. Grandes áreas laranjas devem ser evitadas.

## Tipografia

- **Display:** Barlow Condensed 500–700.
- **Texto/UI:** Barlow 400–700.
- **Base:** 16px.
- **Corpo:** line-height aproximado de 1.5–1.65.
- **Labels:** mínimo 12px.
- **Headlines:** fluidas com `clamp()`, sem depender de quebras rígidas excessivas.

## Layout

- Grid editorial assimétrico em desktop.
- Conteúdo máximo: 1440px.
- Gutters adaptativos: 20px → 72px.
- Ritmo de espaçamento baseado em 8px.
- Altura natural das seções; **sem scroll-snap e sem forçar 100vh**.
- Fotografias reais ganham prioridade sobre decoração abstrata.

## Interação

- Touch target mínimo: 44px; CTA principal 48–56px.
- Hover sutil: 160–220ms.
- Sem magnetismo, spotlight ou movimentos que mudem o layout.
- Reveal de scroll: somente opacidade + 12px, progressive enhancement.
- `prefers-reduced-motion` deve manter tudo visível e funcional.
- Vídeo automático precisa ter controle de pausa; com reduced motion, não iniciar automaticamente.

## Acessibilidade

- Contraste normal mínimo 4.5:1.
- Foco visível global.
- Skip link no início da página.
- Headings em ordem semântica.
- Alt text descritivo em imagens de trabalho.
- FAQ com `<details>/<summary>` nativos e alvo de clique >=44px.
- Não depender de hover para acessar informação.
- Não usar cor como único indicador de estado.

## Breakpoints de validação

- 375px: celular pequeno.
- 768px: tablet.
- 1024px: laptop/tablet landscape.
- 1440px: desktop.

## Arquitetura de conteúdo

1. Header simples
2. Hero factual + bastidores reais
3. Prova rápida
4. Serviços
5. Trabalhos reais
6. Produção própria
7. Case Liberdade
8. Como funciona
9. A Adry
10. Dúvidas
11. Orçamento
12. Footer
