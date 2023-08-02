import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding:0; margin: 0;
    }
    button {
        border: 0;
        cursor: pointer;
        transition: all 0.4s;
    }
    input:active, input:focus {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    a:focus, a:active, a:visited, a:hover  {
        color: inherit
    }
    ul {
        list-style: none;
        text-decoration: none;
    }
`;

export default GlobalStyle;
