import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ${reset}
  
    *, *::before, *::after {
        box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', '나눔고딕', 'Nanum Gothic', '맑은고딕',
    'Malgun Gothic', ‘Apple SD Gothic Neo’, '돋움', dotum, '굴림', gulim,
    sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
