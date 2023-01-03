"use strict";
exports.id = 119;
exports.ids = [119];
exports.modules = {

/***/ 1119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1105);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4882);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__);






const Text = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_3__.animated)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Text);
const Button = ({ size =[
    0.15,
    0.05
] , position =[
    0,
    0,
    0
] , fontSize =0.02 , text , onClick ,  })=>{
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const windowSize = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_5__.useThree)((s)=>s.size);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>windowSize.width < 768, [
        windowSize
    ]);
    (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useCursor)(hovered);
    const { opacity  } = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_3__.useSpring)({
        opacity: hovered ? 1 : 0.5
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
            position: position,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                    renderOrder: 1,
                    onPointerEnter: ()=>setHovered(true),
                    onPointerLeave: ()=>setHovered(false),
                    onClick: onClick,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                            args: size
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_three__WEBPACK_IMPORTED_MODULE_3__.animated.meshBasicMaterial, {
                            transparent: true,
                            opacity: opacity
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    renderOrder: 2,
                    text: text,
                    position: [
                        0,
                        -0.005,
                        0.0001
                    ],
                    color: "black",
                    fontSize: fontSize,
                    font: (_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default()),
                    textAlign: "center",
                    anchorY: "bottom",
                    anchorX: "center",
                    lineHeight: isMobile ? 0.016 : 0.02
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ })

};
;