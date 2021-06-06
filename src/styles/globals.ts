import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --bg-gray-50: #f9fafb;
  --text-gray-900: #111827;
  --border-gray-300: #d1d5db;
  --placeholder-gray-500: #6b7280;
  --text-indigo-600: #4f46e5;
  --focus-ring-indigo-500: #6366f1;
  --hover-bg-indigo-700: #4338ca;
  --group-hover-text-indigo-400: #818cf8;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media(max-width: 1080px) {
    font-size: 93.75%;
  }
  @media(max-width: 720px) {
    font-size: 87.5%;
  }

  body {
    background: var(--bg-gray-50);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
}
`;
