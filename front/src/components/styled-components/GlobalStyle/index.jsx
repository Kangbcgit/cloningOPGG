import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 100;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoT.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 200;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/ppleSDGothicNeoUL.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 300;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoL.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 400;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoR.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 500;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoM.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 600;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/ppleSDGothicNeoSB.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 700;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoB.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 800;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/ppleSDGothicNeoEB.woff2) format("woff2");
  }

  @font-face {
    font-family: Apple SD Gothic Neo;
    font-weight: 900;
    src: url(${process.env.PUBLIC_URL}/fonts/AppleSDGothicNeo/AppleSDGothicNeoH.woff2) format("woff2");
  }
  * {
    font-size: 16px;
    font-family: Apple SD Gothic Neo;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    font-family: "Apple SD Gothic Neo",'__Roboto_2d0052','__Roboto_Fallback_2d0052',sans-serif,system-ui,sans-serif;
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
    /* color */
    --mainColor_bg: #5383E8;
    --mainColor_font: #B3CDFF;
    --topView_bg: #28344E;
    --region_bg: #ECF2FF;
    --community_bg: #222226;
    --communityItem_bg: #31313C;
    /* font-size */
    --mobile-community_title: 14px;
    --mobile-community_desc: 12px;
  }
`;

export default GlobalStyle