import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
  }
  :root {
    --mainColor_bg: #5383E8;
    --mainColor_font: #B3CDFF;
    --topView_bg: #28344E;
    --region_bg: #ECF2FF;
  }
`;

export default GlobalStyle