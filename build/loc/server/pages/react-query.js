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
exports.id = "pages/react-query";
exports.ids = ["pages/react-query"];
exports.modules = {

/***/ "./src/api/index.ts":
/*!**************************!*\
  !*** ./src/api/index.ts ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APILISTS\": () => (/* binding */ APILISTS),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst APILISTS = {\n    baseUrl: \"https://api.pping.$NEXT_PUBLIC_TLD\",\n    fetchItemList () {\n        const url = `https://api.pping.loc/front/v3/items`;\n        const params = {\n            idx_b_manager: 1,\n            cate_id: 1010100000,\n            offset: 0,\n            limit: 30,\n            sort: 1,\n            type: \"cash\",\n            fields: \"stdpc,maker,hotdeal,event\",\n            maker: \"\",\n            spec: {},\n            min: 0,\n            max: 0,\n            keyword: \"\"\n        };\n        const config = {\n            params,\n            withCredentials: true,\n            xsrfHeaderName: \"Authorization\"\n        };\n        return axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(url, config);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (APILISTS);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUduQixNQUFNQyxXQUFpQjtJQUM1QkMsU0FBU0Msb0NBQStCO0lBQ3hDRyxpQkFBZ0I7UUFDZCxNQUFNQyxNQUFNLENBQUMsb0NBQW9DLENBQUM7UUFDbEQsTUFBTUMsU0FBUztZQUNiQyxlQUFlO1lBQ2ZDLFNBQVM7WUFDVEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLE1BQU07WUFDTkMsTUFBTTtZQUNOQyxRQUFRO1lBQ1JDLE9BQU87WUFDUEMsTUFBTSxDQUFDO1lBQ1BDLEtBQUs7WUFDTEMsS0FBSztZQUNMQyxTQUFTO1FBQ1g7UUFDQSxNQUFNQyxTQUFTO1lBQ2JiO1lBQ0FjLGlCQUFpQixJQUFJO1lBQ3JCQyxnQkFBZ0I7UUFDbEI7UUFDQSxPQUFPdkIsaURBQVMsQ0FBQ08sS0FBS2M7SUFDeEI7QUFDRixFQUFFO0FBRUYsaUVBQWVwQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1wYWdlcy8uL3NyYy9hcGkvaW5kZXgudHM/MDI2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBJQXBpIH0gZnJvbSBcIkAvaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY29uc3QgQVBJTElTVFM6IElBcGkgPSB7XG4gIGJhc2VVcmw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwsXG4gIGZldGNoSXRlbUxpc3QoKSB7XG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnBwaW5nLmxvYy9mcm9udC92My9pdGVtc2A7XG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgaWR4X2JfbWFuYWdlcjogMSxcbiAgICAgIGNhdGVfaWQ6IDEwMTAxMDAwMDAsXG4gICAgICBvZmZzZXQ6IDAsXG4gICAgICBsaW1pdDogMzAsXG4gICAgICBzb3J0OiAxLFxuICAgICAgdHlwZTogXCJjYXNoXCIsXG4gICAgICBmaWVsZHM6IFwic3RkcGMsbWFrZXIsaG90ZGVhbCxldmVudFwiLFxuICAgICAgbWFrZXI6IFwiXCIsXG4gICAgICBzcGVjOiB7fSxcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogMCxcbiAgICAgIGtleXdvcmQ6IFwiXCIsXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBwYXJhbXMsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICB4c3JmSGVhZGVyTmFtZTogXCJBdXRob3JpemF0aW9uXCIsXG4gICAgfTtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwgY29uZmlnKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFQSUxJU1RTO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJTElTVFMiLCJiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJmZXRjaEl0ZW1MaXN0IiwidXJsIiwicGFyYW1zIiwiaWR4X2JfbWFuYWdlciIsImNhdGVfaWQiLCJvZmZzZXQiLCJsaW1pdCIsInNvcnQiLCJ0eXBlIiwiZmllbGRzIiwibWFrZXIiLCJzcGVjIiwibWluIiwibWF4Iiwia2V5d29yZCIsImNvbmZpZyIsIndpdGhDcmVkZW50aWFscyIsInhzcmZIZWFkZXJOYW1lIiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/api/index.ts\n");

/***/ }),

/***/ "./src/components/sample_react-query/sample_react-query.tsx":
/*!******************************************************************!*\
  !*** ./src/components/sample_react-query/sample_react-query.tsx ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SampleReactQuery)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"./src/api/index.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__]);\n([_api__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nfunction SampleReactQuery() {\n    const { data , isFetching  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)({\n        queryKey: [\n            \"fetchList\"\n        ],\n        queryFn: _api__WEBPACK_IMPORTED_MODULE_1__.APILISTS.fetchItemList\n    });\n    const isListData = data?.data.result.items;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"React-query 사용 페이지입니다\"\n            }, void 0, false, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            isFetching ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"로딩중...\"\n            }, void 0, false, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: isListData?.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: item.full_item_name\n                            }, void 0, false, {\n                                fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    item.price,\n                                    \"원\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, item.item_Id, true, {\n                        fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/hosting/pping/next-pages/src/components/sample_react-query/sample_react-query.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zYW1wbGVfcmVhY3QtcXVlcnkvc2FtcGxlX3JlYWN0LXF1ZXJ5LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDZ0I7QUFHbEMsU0FBU0UsbUJBQW1CO0lBQ3pDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxXQUFVLEVBQUUsR0FBR0gsK0RBQVFBLENBQUM7UUFBRUksVUFBVTtZQUFDO1NBQVk7UUFBRUMsU0FBU04sd0RBQXNCO0lBQUM7SUFDakcsTUFBTVEsYUFBYUwsTUFBTUEsS0FBS00sTUFBTSxDQUFDQyxLQUFLO0lBQzFDLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSFIsMkJBQ0MsOERBQUNTOzBCQUFFOzs7OztxQ0FFSCw4REFBQ0M7MEJBQ0VOLFlBQVlPLElBQUksQ0FBQ0MscUJBQ2hCLDhEQUFDQzs7MENBQ0MsOERBQUNKOzBDQUFHRyxLQUFLRSxjQUFjOzs7Ozs7MENBQ3ZCLDhEQUFDTDs7b0NBQUdHLEtBQUtHLEtBQUs7b0NBQUM7Ozs7Ozs7O3VCQUZSSCxLQUFLSSxPQUFPOzs7Ozs7Ozs7b0JBTTFCOzs7Ozs7O0FBR1AsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcGFnZXMvLi9zcmMvY29tcG9uZW50cy9zYW1wbGVfcmVhY3QtcXVlcnkvc2FtcGxlX3JlYWN0LXF1ZXJ5LnRzeD8zMjQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUxJU1RTIH0gZnJvbSBcIkAvYXBpXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IElMaXN0SXRlbSB9IGZyb20gXCJAL2ludGVyZmFjZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2FtcGxlUmVhY3RRdWVyeSgpIHtcbiAgY29uc3QgeyBkYXRhLCBpc0ZldGNoaW5nIH0gPSB1c2VRdWVyeSh7IHF1ZXJ5S2V5OiBbXCJmZXRjaExpc3RcIl0sIHF1ZXJ5Rm46IEFQSUxJU1RTLmZldGNoSXRlbUxpc3QgfSk7XG4gIGNvbnN0IGlzTGlzdERhdGEgPSBkYXRhPy5kYXRhLnJlc3VsdC5pdGVtcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlJlYWN0LXF1ZXJ5IOyCrOyaqSDtjpjsnbTsp4DsnoXri4jri6Q8L2gxPlxuICAgICAge2lzRmV0Y2hpbmcgPyAoXG4gICAgICAgIDxwPuuhnOuUqeykkS4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICB7aXNMaXN0RGF0YT8ubWFwKChpdGVtOiBJTGlzdEl0ZW0pID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaXRlbV9JZH0+XG4gICAgICAgICAgICAgIDxwPntpdGVtLmZ1bGxfaXRlbV9uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHA+e2l0ZW0ucHJpY2V97JuQPC9wPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQVBJTElTVFMiLCJ1c2VRdWVyeSIsIlNhbXBsZVJlYWN0UXVlcnkiLCJkYXRhIiwiaXNGZXRjaGluZyIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImZldGNoSXRlbUxpc3QiLCJpc0xpc3REYXRhIiwicmVzdWx0IiwiaXRlbXMiLCJkaXYiLCJoMSIsInAiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsImZ1bGxfaXRlbV9uYW1lIiwicHJpY2UiLCJpdGVtX0lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/sample_react-query/sample_react-query.tsx\n");

/***/ }),

/***/ "./src/pages/react-query/index.tsx":
/*!*****************************************!*\
  !*** ./src/pages/react-query/index.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReactQueryPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_sample_react_query_sample_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/sample_react-query/sample_react-query */ \"./src/components/sample_react-query/sample_react-query.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_sample_react_query_sample_react_query__WEBPACK_IMPORTED_MODULE_1__]);\n_components_sample_react_query_sample_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction ReactQueryPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sample_react_query_sample_react_query__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"/hosting/pping/next-pages/src/pages/react-query/index.tsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVhY3QtcXVlcnkvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtGO0FBRW5FLFNBQVNDLGlCQUFpQjtJQUN2QyxxQkFBTyw4REFBQ0QseUZBQWdCQTs7Ozs7QUFDMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtcGFnZXMvLi9zcmMvcGFnZXMvcmVhY3QtcXVlcnkvaW5kZXgudHN4PzhjZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNhbXBsZVJlYWN0UXVlcnkgZnJvbSBcIkAvY29tcG9uZW50cy9zYW1wbGVfcmVhY3QtcXVlcnkvc2FtcGxlX3JlYWN0LXF1ZXJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlYWN0UXVlcnlQYWdlKCkge1xuICByZXR1cm4gPFNhbXBsZVJlYWN0UXVlcnkgLz47XG59XG4iXSwibmFtZXMiOlsiU2FtcGxlUmVhY3RRdWVyeSIsIlJlYWN0UXVlcnlQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/react-query/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/react-query/index.tsx"));
module.exports = __webpack_exports__;

})();