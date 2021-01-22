import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    background: #f2f2f2;
    font-family: Montserrat, FiraCode, sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
`;
