import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    html, body {
        box-sizing: border-box;
        * {
            box-sizing: inherit;
        }
        font-size: 1em;
    }
`;
