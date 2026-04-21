import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    color-scheme: light;
    --color-bg: #F2F9FF;
    --color-bg-strong: #DFF0FF;
    --color-surface: rgba(255, 255, 255, 0.92);
    --color-surface-strong: #FFFFFF;
    --color-pink-soft: #FFCCE1;
    --color-accent: #E195AB;
    --color-accent-dark: #C76E8D;
    --color-vanilla: #FFF5D7;
    --color-sky: #BFE4FF;
    --color-text: #2F3344;
    --color-muted: #5E6475;
    --color-border: rgba(167, 188, 214, 0.44);
    --color-success: #2C8D5A;
    --color-danger: #C15757;
    --shadow-soft: ${({ theme }) => theme.shadows.soft};
    --shadow-medium: ${({ theme }) => theme.shadows.medium};
    --shadow-glow: ${({ theme }) => theme.shadows.glow};
    --radius-sm: 16px;
    --radius-md: 22px;
    --radius-xl: 30px;
    --radius-pill: 999px;
    --section-space: clamp(4rem, 7vw, 6.5rem);
    --container-inline: min(${({ theme }) => theme.layout.container}, calc(100% - 1.25rem));
    --transition-fast: ${({ theme }) => theme.transitions.fast};
    --transition-smooth: ${({ theme }) => theme.transitions.smooth};
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    direction: rtl;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    font-family: 'Tajawal', sans-serif;
    color: var(--color-text);
    background:
      radial-gradient(circle at top right, rgba(255, 204, 225, 0.55), transparent 28%),
      radial-gradient(circle at 12% 20%, rgba(191, 228, 255, 0.8), transparent 28%),
      linear-gradient(180deg, #f8fcff 0%, #f2f9ff 48%, #fffdf8 100%);
    line-height: 1.75;
    overflow-x: hidden;
  }

  body::before,
  body::after {
    content: '';
    position: fixed;
    pointer-events: none;
    z-index: -1;
    border-radius: 999px;
    filter: blur(20px);
    opacity: 0.7;
  }

  body::before {
    inline-size: 18rem;
    block-size: 18rem;
    inset-block-start: 6rem;
    inset-inline-end: -5rem;
    background: rgba(225, 149, 171, 0.16);
  }

  body::after {
    inline-size: 16rem;
    block-size: 16rem;
    inset-block-end: 10rem;
    inset-inline-start: -5rem;
    background: rgba(191, 228, 255, 0.24);
  }

  ::selection {
    background: rgba(225, 149, 171, 0.28);
  }

  #root {
    min-height: 100vh;
  }

  img,
  svg,
  iframe {
    display: block;
    max-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
    border: 0;
    background: none;
  }

  input,
  textarea,
  select {
    color: var(--color-text);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: 'Cairo', sans-serif;
    line-height: 1.25;
    color: var(--color-text);
  }

  p,
  ul,
  ol {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  main {
    display: block;
  }

  *:focus-visible {
    outline: 3px solid rgba(225, 149, 171, 0.52);
    outline-offset: 3px;
    border-radius: 18px;
  }

  @media (min-width: 768px) {
    :root {
      --container-inline: min(${({ theme }) => theme.layout.container}, calc(100% - 2.5rem));
    }
  }
`;

export default GlobalStyles;
