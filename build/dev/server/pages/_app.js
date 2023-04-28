"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6464);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1278);
/* harmony import */ var _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6929);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9224);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function App({ Component , pageProps  }) {
    const queryClient = new _tanstack_query_core__WEBPACK_IMPORTED_MODULE_4__.QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
        store: _store__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
            client: queryClient,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_globalStyles__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7184);


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
    reducer: {
        counter: _reducer_counter__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    },
    devTools: "production" !== "production"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);


/***/ }),

/***/ 7184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "k": () => (/* binding */ setCount)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        setCount: (state, action)=>{
            state.count = action.payload;
        }
    }
});
const { setCount  } = slice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);


/***/ }),

/***/ 6464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ globalStyles)
});

;// CONCATENATED MODULE: external "styled-reset"
const external_styled_reset_namespaceObject = require("styled-reset");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
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


/***/ }),

/***/ 1278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6929:
/***/ ((module) => {

module.exports = import("@tanstack/query-core");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9212));
module.exports = __webpack_exports__;

})();