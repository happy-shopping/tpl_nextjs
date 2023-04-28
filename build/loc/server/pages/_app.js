"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./src/styles/globalStyles.ts


/* harmony default export */ const globalStyles = (external_styled_components_.createGlobalStyle`
  ${(external_styled_reset_default())}
  
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
`);

;// CONCATENATED MODULE: ./src/styles/theme.ts
const colors = {
    black: "#333333",
    yellow: "#FF9900",
    orange: "#F34522",
    gray: "#666666",
    gray_background: "#F6F6F6",
    red: "#E23714",
    blue: "#418DED",
    navy: "#005796",
    white: "#FFFFFF"
};
const fonts = {
};
const theme = {
    colors,
    fonts
};
/* harmony default export */ const styles_theme = (theme);

;// CONCATENATED MODULE: ./src/pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: styles_theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(globalStyles, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(199));
module.exports = __webpack_exports__;

})();