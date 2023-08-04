import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
    * {
        box-sizing: border-box;
        padding:0; 
        margin: 0;
        font-family: 'SUITE-Regular';
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
        text-decoration: none;
    }
`;

export default GlobalStyle;
