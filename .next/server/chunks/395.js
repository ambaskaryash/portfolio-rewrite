"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 4508:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const ASPECT = 1368 / 1069;
const WorkImage = ({ imagePath , currentImage , hovered , ...props })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const transitioning = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)((s)=>s.transitioning);
    const texture = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useTexture)(imagePath);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        ref.current.material.depthWrite = false;
    }, []);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(({ mouse  }, delta)=>{
        let opacity = hovered && currentImage && !transitioning ? 1 : 0;
        let offsetZ = hovered && currentImage ? -0.1 : -0.05;
        ref.current.material.opacity = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__/* .damp */ .u1)(ref.current.material.opacity, opacity, 10, delta);
        ref.current.position.x = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__/* .damp */ .u1)(ref.current.position.x, mouse.x + 1.5, 4, delta);
        ref.current.position.y = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__/* .damp */ .u1)(ref.current.position.y, mouse.y * 0.1, 4, delta);
        ref.current.position.z = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_5__/* .damp */ .u1)(ref.current.position.z, offsetZ, 20, delta);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_4__.Suspense, {
        fallback: null,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
            ...props,
            scale: [
                0.35,
                0.35,
                0.35
            ],
            renderOrder: 100,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("mesh", {
                ref: ref,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                        args: [
                            ASPECT,
                            1
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                        map: texture,
                        opacity: 0,
                        transparent: true,
                        toneMapped: false
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkImage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1105);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(741);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4882);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _WorkImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4508);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1366);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Layer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2550);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_5__, _WorkImage__WEBPACK_IMPORTED_MODULE_7__, _store__WEBPACK_IMPORTED_MODULE_8__]);
([three__WEBPACK_IMPORTED_MODULE_5__, _WorkImage__WEBPACK_IMPORTED_MODULE_7__, _store__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Text = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated)(_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.Text);
const WorkItem = ({ work , width =0.75 , idx , offset , ...props })=>{
    const transitioning = (0,_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)((s)=>s.transitioning);
    const router = (0,_store__WEBPACK_IMPORTED_MODULE_8__/* .useStore */ .oR)((s)=>s.router);
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__.useThree)((s)=>s.size);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>size.width < 768, [
        size
    ]);
    const { 0: hovered , 1: setHovered  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: imageIdx , 1: setImageIdx  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(Math.floor(Math.random() * (work.images.length - 1)));
    (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useCursor)(hovered);
    const { opacity  } = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.useSpring)({
        opacity: transitioning ? 0 : hovered ? 1 : 0.35,
        scaleX: hovered ? 1 : 0
    });
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_8__/* .useStore.setState */ .oR.setState({
            transitioning: true
        });
        setTimeout(()=>router.push(`/works/${work.name}`), 350);
    }, [
        router,
        work
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
        position: [
            0,
            -offset,
            0
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                text: work.displayName,
                fontSize: isMobile ? 0.025 : 0.03,
                font: (_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_3___default()),
                anchorX: "left",
                outlineColor: "black",
                outlineWidth: "5%",
                outlineBlur: 0.025,
                onPointerEnter: ()=>setHovered(true),
                onPointerLeave: ()=>{
                    setHovered(false);
                    setImageIdx((prev)=>(prev + 1) % work.images.length);
                },
                onClick: ()=>handleClick(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated.meshBasicMaterial, {
                    side: three__WEBPACK_IMPORTED_MODULE_5__.FrontSide,
                    // color={color}
                    opacity: opacity,
                    transparent: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated.group, {
                "scale-x": 1,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated.mesh, {
                    position: [
                        width / 2,
                        -0.025,
                        0
                    ],
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("planeGeometry", {
                            args: [
                                width,
                                0.00125
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated.meshBasicMaterial, {
                            opacity: opacity,
                            transparent: true
                        })
                    ]
                })
            }),
            work.images.map((image, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layer__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    layer: 100,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WorkImage__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        currentImage: imageIdx === idx,
                        hovered: hovered,
                        imagePath: image
                    })
                }, idx)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                text: idx,
                "position-x": width,
                fontSize: 0.02,
                font: (_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_4___default()),
                anchorX: "right",
                outlineColor: "black",
                outlineWidth: "5%",
                outlineBlur: 0.025,
                onPointerEnter: ()=>setHovered(true),
                onPointerLeave: ()=>{
                    setHovered(false);
                    setImageIdx((prev)=>(prev + 1) % work.images.length);
                },
                onClick: ()=>handleClick(),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_spring_three__WEBPACK_IMPORTED_MODULE_1__.animated.meshBasicMaterial, {
                    side: three__WEBPACK_IMPORTED_MODULE_5__.FrontSide,
                    // color={color}
                    opacity: opacity,
                    transparent: true
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;