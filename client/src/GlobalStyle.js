import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {

    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none !important;
        margin: 0;
        padding: 0;
        color: black;
    }


`;
