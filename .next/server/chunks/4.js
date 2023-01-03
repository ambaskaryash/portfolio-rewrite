"use strict";
exports.id = 4;
exports.ids = [4];
exports.modules = {

/***/ 2004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1366);
/* harmony import */ var r3f_perf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9488);
/* harmony import */ var r3f_perf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(r3f_perf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_3__, three__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_3__, three__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const LCanvas = ({ children  })=>{
    const { debug  } = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)();
    const dom = (0,_store__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .oR)((state)=>state.dom);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
        mode: "concurrent",
        style: {
            position: "fixed",
            top: 0
        },
        gl: {
            toneMapping: three__WEBPACK_IMPORTED_MODULE_5__.ACESFilmicToneMapping,
            toneMappingExposure: 1.2
        },
        onCreated: ({ gl , events  })=>{
            // events.connect(dom.current);
            gl.setClearColor("#000005", 1);
        },
        children: [
            children,
            debug && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(r3f_perf__WEBPACK_IMPORTED_MODULE_4__.Perf, {
                position: "bottom-left"
            }),
            debug && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Stats, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LCanvas);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;