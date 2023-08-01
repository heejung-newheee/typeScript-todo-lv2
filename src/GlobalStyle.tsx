import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    button {
        border: 0;
        cursor: pointer;
        transition: all 0.4s;
    }
    input:active, input:focus {
        outline: none;
    }
    a:focus {
        color: inherit
    }
`;

export default GlobalStyle;
