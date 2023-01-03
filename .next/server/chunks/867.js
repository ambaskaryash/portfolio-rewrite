"use strict";
exports.id = 867;
exports.ids = [867];
exports.modules = {

/***/ 4390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5424);
/* harmony import */ var _react_three_flex__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_flex__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1119);





const Buttons = ({ work  })=>{
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)((s)=>s.size);
    const viewport = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_1__.useThree)((s)=>s.viewport);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>size.width < 768, [
        size
    ]);
    const width = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>isMobile ? 0.12 : 0.17, [
        isMobile
    ]);
    const height = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>isMobile ? 0.035 : 0.05, [
        isMobile
    ]);
    const containerWidth = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>Math.min(viewport.width * 0.17, width * 3.1), [
        width,
        viewport
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_three_flex__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        size: [
            containerWidth,
            0.1,
            0
        ],
        position: [
            -containerWidth / 2,
            0.0525,
            0.01
        ],
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        wrap: "wrap",
        children: [
            work.live && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_flex__WEBPACK_IMPORTED_MODULE_2__.Box, {
                width: width,
                centerAnchor: true,
                marginBottom: 0.015,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    size: [
                        width * 0.9,
                        height * 0.9
                    ],
                    text: "Visit Site",
                    onClick: ()=>window.open(work.live, "_blank"),
                    fontSize: isMobile ? 0.016 : 0.02
                })
            }),
            work.source && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_flex__WEBPACK_IMPORTED_MODULE_2__.Box, {
                width: width,
                centerAnchor: true,
                marginBottom: 0.015,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    size: [
                        width * 0.9,
                        height * 0.9
                    ],
                    text: "View Code",
                    onClick: ()=>window.open(work.source, "_blank"),
                    fontSize: isMobile ? 0.016 : 0.02
                })
            }),
            work.case && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_flex__WEBPACK_IMPORTED_MODULE_2__.Box, {
                width: width,
                centerAnchor: true,
                marginBottom: 0.015,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    size: [
                        width * 0.9,
                        height * 0.9
                    ],
                    text: "Case Study",
                    onClick: ()=>window.open(work.case, "_blank"),
                    fontSize: isMobile ? 0.016 : 0.02
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Buttons);


/***/ }),

/***/ 227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5424);
/* harmony import */ var _react_three_flex__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_flex__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9542);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2550);







const ASPECT = 1368 / 1069;
const Gallery = ({ images  })=>{
    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const touchRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)((s)=>s.size);
    const viewport = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useThree)((s)=>s.viewport);
    const textures = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_1__.useTexture)(images);
    const { 0: containerHeight , 1: setContainerHeight  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    const containerWidth = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>viewport.width * 0.15, [
        viewport
    ]);
    const width = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>Math.min(viewport.width * 0.16, 0.3), [
        viewport
    ]);
    const height = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>width / ASPECT, [
        width
    ]);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>size.width < 768, [
        size
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const handleScroll = (e)=>{
            e.stopPropagation();
            scrollRef.current -= e.deltaY * 0.0005;
            scrollRef.current = Math.min(0, scrollRef.current);
            scrollRef.current = Math.max(-containerHeight, scrollRef.current);
        };
        window.addEventListener("wheel", handleScroll);
        return ()=>{
            window.removeEventListener("wheel", handleScroll);
        };
    }, [
        containerHeight
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const handleTouchStart = (e)=>{
            e.stopPropagation();
            let touch = e.touches[0];
            touchRef.current = touch.clientY;
        };
        const handleTouchMove = (e)=>{
            e.stopPropagation();
            e.preventDefault();
            let touch = e.touches[0];
            let dy = touchRef.current - touch.clientY;
            scrollRef.current -= dy * 0.00125;
            scrollRef.current = Math.min(0, scrollRef.current);
            scrollRef.current = Math.max(-containerHeight, scrollRef.current);
            touchRef.current = touch.clientY;
        };
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        return ()=>{
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [
        containerHeight
    ]);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_2__.useFrame)(({ camera  }, delta)=>{
        camera.position.y = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_6__/* .damp */ .u1)(camera.position.y, scrollRef.current, 16, delta);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layer__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        layer: 100,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_flex__WEBPACK_IMPORTED_MODULE_3__.Flex, {
            onReflow: (_, totalHeight)=>setContainerHeight(totalHeight),
            position: [
                -containerWidth / 2,
                isMobile ? -0.2 : -0.15,
                0
            ],
            size: [
                containerWidth,
                100,
                0
            ],
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
            wrap: "wrap",
            children: textures.map((t, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_flex__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    width: width,
                    height: height,
                    margin: 0.003,
                    centerAnchor: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                                args: [
                                    width,
                                    height
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                                transparent: true,
                                map: t,
                                toneMapped: false
                            })
                        ]
                    })
                }, idx))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 6867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(741);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4882);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(134);
/* harmony import */ var _PostProcessing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3365);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2949);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1105);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9542);
/* harmony import */ var _Buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4390);
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(227);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _Environment__WEBPACK_IMPORTED_MODULE_6__, three__WEBPACK_IMPORTED_MODULE_8__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _Environment__WEBPACK_IMPORTED_MODULE_6__, three__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const Text = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_9__.animated)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Text);
const WorkScene = ({ work  })=>{
    const camRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.useThree)((s)=>s.size);
    const viewport = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.useThree)((s)=>s.viewport);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>size.width < 768, [
        size
    ]);
    const maxWidth = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>isMobile ? viewport.width * 0.165 : 0.5, [
        viewport,
        isMobile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useHomeStore.setState */ .ok.setState({
            converged: false
        });
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useStore.setState */ .oR.setState({
            transitioning: false
        });
    }, []);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_10__.useFrame)(({ mouse  }, delta)=>{
        if (isMobile) return;
        camRef.current.rotation.x = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_13__/* .damp */ .u1)(camRef.current.rotation.x, mouse.y * 0.05, 8, delta);
        camRef.current.rotation.y = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_13__/* .damp */ .u1)(camRef.current.rotation.y, -mouse.x * 0.05, 8, delta);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera, {
                ref: camRef,
                makeDefault: true,
                near: 0.001,
                far: 50,
                fov: 65,
                position: [
                    0,
                    0,
                    2
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
                position: [
                    0,
                    0,
                    1.625
                ],
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                        position: [
                            0,
                            0.065,
                            0
                        ],
                        text: work.displayName,
                        maxWidth: isMobile ? viewport.width * 0.165 : 1,
                        textAlign: "center",
                        font: (_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default()),
                        fontSize: isMobile ? 0.0375 : 0.055,
                        lineHeight: 1,
                        anchorY: "bottom",
                        outlineColor: "black",
                        outlineWidth: 0,
                        outlineBlur: "50%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                            side: three__WEBPACK_IMPORTED_MODULE_8__.FrontSide
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_spring_three__WEBPACK_IMPORTED_MODULE_9__.animated.mesh, {
                        position: [
                            0,
                            0.06,
                            0
                        ],
                        "scale-x": isMobile ? 0.3 : 1,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                                args: [
                                    0.02 * work.displayName.length,
                                    0.0015
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                                color: "white",
                                transparent: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Buttons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                        work: work
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                        position: [
                            0,
                            -0.045,
                            0
                        ],
                        font: (_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default()),
                        text: work.description,
                        fontSize: isMobile ? 0.0125 : 0.013,
                        maxWidth: maxWidth,
                        anchorY: "top",
                        textAlign: "center",
                        lineHeight: 1.3,
                        outlineColor: "black",
                        outlineWidth: 0,
                        outlineBlur: "100%",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                            side: three__WEBPACK_IMPORTED_MODULE_8__.FrontSide
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Gallery__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                        images: work.images
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Environment__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostProcessing__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkScene);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;