import { createGlobalStyle } from 'styled-components';

interface Theme {
    background: string;
    text: string;
}

const GlobalStyles = createGlobalStyle<{ theme: Theme }>`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", sans-serif;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.3s ease-in-out;
    }

    button {
        font-size: 1rem;
        padding: 0.5rem 1rem;
        cursor: pointer;
        border: none;
        background-color: ${({ theme }) => theme.text};
        color: ${({ theme }) => theme.background};
        transition: 0.3s;
    }

    button:hover {
        opacity: 0.8;
    }
`;

export default GlobalStyles;
