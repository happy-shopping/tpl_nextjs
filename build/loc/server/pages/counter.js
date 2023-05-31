"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/counter";
exports.ids = ["pages/counter"];
exports.modules = {

/***/ "./src/components/sample_counter/sample_counter.tsx":
/*!**********************************************************!*\
  !*** ./src/components/sample_counter/sample_counter.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SampleCounter)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks */ \"./src/hooks/index.ts\");\n/* harmony import */ var _store_reducer_counter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/reducer/counter */ \"./src/store/reducer/counter.ts\");\n\"use client\";\n\n\n\n\n\nconst Wrapper = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n`;\nfunction SampleCounter() {\n    const [isCount, setIsCount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const reduxCount = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.counter.count);\n    const dispatch = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const onClickAddCount = ()=>{\n        setIsCount(isCount + 1);\n        dispatch((0,_store_reducer_counter__WEBPACK_IMPORTED_MODULE_4__.setCount)(isCount + 1));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Wrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" redux counter 테스트 페이지\"\n            }, void 0, false, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: [\n                            \"현재 카운트 :\",\n                            isCount\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: onClickAddCount,\n                        children: \"증가\"\n                    }, void 0, false, {\n                        fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"리덕스 Store :\",\n                    reduxCount\n                ]\n            }, void 0, true, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/hosting/pping/next-pages/src/components/sample_counter/sample_counter.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zYW1wbGVfY291bnRlci9zYW1wbGVfY291bnRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRXVDO0FBQ047QUFDd0I7QUFDTjtBQUVuRCxNQUFNSyxVQUFVTCw4REFBVSxDQUFDOzs7Ozs7QUFNM0IsQ0FBQztBQUVjLFNBQVNPLGdCQUFnQjtJQUN0QyxNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTVMsYUFBYVAsc0RBQWNBLENBQUMsQ0FBQ1EsUUFBVUEsTUFBTUMsT0FBTyxDQUFDQyxLQUFLO0lBQ2hFLE1BQU1DLFdBQVdaLHNEQUFjQTtJQUUvQixNQUFNYSxrQkFBa0IsSUFBTTtRQUM1Qk4sV0FBV0QsVUFBVTtRQUNyQk0sU0FBU1YsZ0VBQVFBLENBQUNJLFVBQVU7SUFDOUI7SUFDQSxxQkFDRSw4REFBQ0g7OzBCQUNDLDhEQUFDVzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDVjs7a0NBQ0MsOERBQUNXOzs0QkFBSzs0QkFBU1Q7Ozs7Ozs7a0NBQ2YsOERBQUNVO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTTDtrQ0FBaUI7Ozs7Ozs7Ozs7OzswQkFJbEQsOERBQUNUOztvQkFBSTtvQkFBWUk7Ozs7Ozs7Ozs7Ozs7QUFHdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcGFnZXMvLi9zcmMvY29tcG9uZW50cy9zYW1wbGVfY291bnRlci9zYW1wbGVfY291bnRlci50c3g/OTc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9ob29rc1wiO1xuaW1wb3J0IHsgc2V0Q291bnQgfSBmcm9tIFwiQC9zdG9yZS9yZWR1Y2VyL2NvdW50ZXJcIjtcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNhbXBsZUNvdW50ZXIoKSB7XG4gIGNvbnN0IFtpc0NvdW50LCBzZXRJc0NvdW50XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCByZWR1eENvdW50ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb3VudGVyLmNvdW50KTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IG9uQ2xpY2tBZGRDb3VudCA9ICgpID0+IHtcbiAgICBzZXRJc0NvdW50KGlzQ291bnQgKyAxKTtcbiAgICBkaXNwYXRjaChzZXRDb3VudChpc0NvdW50ICsgMSkpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGgxPiByZWR1eCBjb3VudGVyIO2FjOyKpO2KuCDtjpjsnbTsp4A8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4+7ZiE7J6sIOy5tOyatO2KuCA6e2lzQ291bnR9PC9zcGFuPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrQWRkQ291bnR9PlxuICAgICAgICAgIOymneqwgFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj7rpqzrjZXsiqQgU3RvcmUgOntyZWR1eENvdW50fTwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJzZXRDb3VudCIsIldyYXBwZXIiLCJkaXYiLCJTYW1wbGVDb3VudGVyIiwiaXNDb3VudCIsInNldElzQ291bnQiLCJyZWR1eENvdW50Iiwic3RhdGUiLCJjb3VudGVyIiwiY291bnQiLCJkaXNwYXRjaCIsIm9uQ2xpY2tBZGRDb3VudCIsImgxIiwic3BhbiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sample_counter/sample_counter.tsx\n");

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* reexport safe */ _useAppDispatch__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"useAppSelector\": () => (/* reexport safe */ _useAppSelector__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _useAppSelector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAppSelector */ \"./src/hooks/useAppSelector.ts\");\n/* harmony import */ var _useAppDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useAppDispatch */ \"./src/hooks/useAppDispatch.ts\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE2RDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wYWdlcy8uL3NyYy9ob29rcy9pbmRleC50cz83ZTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi91c2VBcHBTZWxlY3RvclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gXCIuL3VzZUFwcERpc3BhdGNoXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXBwRGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/index.ts\n");

/***/ }),

/***/ "./src/hooks/useAppDispatch.ts":
/*!*************************************!*\
  !*** ./src/hooks/useAppDispatch.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppDispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXBwRGlzcGF0Y2gudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBRzFDLE1BQU1DLGlCQUFvQ0Qsb0RBQVdBO0FBRXJELGlFQUFlQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wYWdlcy8uL3NyYy9ob29rcy91c2VBcHBEaXNwYXRjaC50cz9kMDg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdHlwZSB7IEFwcERpc3BhdGNoIH0gZnJvbSBcIkAvc3RvcmVcIjtcblxuY29uc3QgdXNlQXBwRGlzcGF0Y2g6ICgpID0+IEFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2g7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFwcERpc3BhdGNoO1xuIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useAppDispatch.ts\n");

/***/ }),

/***/ "./src/hooks/useAppSelector.ts":
/*!*************************************!*\
  !*** ./src/hooks/useAppSelector.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useAppSelector);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQXBwU2VsZWN0b3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBSTFDLE1BQU1DLGlCQUFrREQsb0RBQVdBO0FBRW5FLGlFQUFlQyxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wYWdlcy8uL3NyYy9ob29rcy91c2VBcHBTZWxlY3Rvci50cz9jYzQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgdHlwZSB7IFR5cGVkVXNlU2VsZWN0b3JIb29rIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiQC9zdG9yZVwiO1xuXG5jb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VBcHBTZWxlY3RvcjtcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useAppSelector.ts\n");

/***/ }),

/***/ "./src/pages/counter/index.tsx":
/*!*************************************!*\
  !*** ./src/pages/counter/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CounterPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sample_counter_sample_counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/sample_counter/sample_counter */ \"./src/components/sample_counter/sample_counter.tsx\");\n\n\nfunction CounterPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sample_counter_sample_counter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/hosting/pping/next-pages/src/pages/counter/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY291bnRlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBdUU7QUFFeEQsU0FBU0MsY0FBYztJQUNwQyxxQkFBTyw4REFBQ0QsaUZBQWFBOzs7OztBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wYWdlcy8uL3NyYy9wYWdlcy9jb3VudGVyL2luZGV4LnRzeD82NjMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTYW1wbGVDb3VudGVyIGZyb20gXCJAL2NvbXBvbmVudHMvc2FtcGxlX2NvdW50ZXIvc2FtcGxlX2NvdW50ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291bnRlclBhZ2UoKSB7XG4gIHJldHVybiA8U2FtcGxlQ291bnRlciAvPjtcbn1cbiJdLCJuYW1lcyI6WyJTYW1wbGVDb3VudGVyIiwiQ291bnRlclBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/counter/index.tsx\n");

/***/ }),

/***/ "./src/store/reducer/counter.ts":
/*!**************************************!*\
  !*** ./src/store/reducer/counter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setCount\": () => (/* binding */ setCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst slice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"counter\",\n    initialState: {\n        count: 0\n    },\n    reducers: {\n        setCount: (state, action)=>{\n            state.count = action.payload;\n        }\n    }\n});\nconst { setCount  } = slice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvcmVkdWNlci9jb3VudGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFPL0MsTUFBTUMsUUFBUUQsNkRBQVdBLENBQUM7SUFDeEJFLE1BQU07SUFDTkMsY0FBYztRQUNaQyxPQUFPO0lBQ1Q7SUFDQUMsVUFBVTtRQUNSQyxVQUFVLENBQUNDLE9BQWNDLFNBQWtDO1lBQ3pERCxNQUFNSCxLQUFLLEdBQUdJLE9BQU9DLE9BQU87UUFDOUI7SUFDRjtBQUNGO0FBRU8sTUFBTSxFQUFFSCxTQUFRLEVBQUUsR0FBR0wsTUFBTVMsT0FBTyxDQUFDO0FBRTFDLGlFQUFlVCxNQUFNVSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXBhZ2VzLy4vc3JjL3N0b3JlL3JlZHVjZXIvY291bnRlci50cz81YmFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB0eXBlIHsgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmNvbnN0IHNsaWNlID0gY3JlYXRlU2xpY2Uoe1xuICBuYW1lOiBcImNvdW50ZXJcIixcbiAgaW5pdGlhbFN0YXRlOiB7XG4gICAgY291bnQ6IDAsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgc2V0Q291bnQ6IChzdGF0ZTogU3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSA9PiB7XG4gICAgICBzdGF0ZS5jb3VudCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgc2V0Q291bnQgfSA9IHNsaWNlLmFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IHNsaWNlLnJlZHVjZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInJlZHVjZXJzIiwic2V0Q291bnQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/reducer/counter.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/counter/index.tsx"));
module.exports = __webpack_exports__;

})();