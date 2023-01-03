"use strict";
exports.id = 815;
exports.ids = [815];
exports.modules = {

/***/ 6812:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Canvas_WorkItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6395);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1366);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1105);
/* harmony import */ var _react_spring_three__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_spring_three__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4165);
/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(741);
/* harmony import */ var _assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_Montserrat_Regular_ttf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4882);
/* harmony import */ var _assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2949);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Canvas_WorkItem__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, three__WEBPACK_IMPORTED_MODULE_7__]);
([_components_Canvas_WorkItem__WEBPACK_IMPORTED_MODULE_1__, _store__WEBPACK_IMPORTED_MODULE_2__, three__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Text = (0,_react_spring_three__WEBPACK_IMPORTED_MODULE_3__.animated)(_react_three_drei__WEBPACK_IMPORTED_MODULE_4__.Text);
const HEIGHT = 0.06;
const WorksList = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)();
    const scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(0);
    const touchRef = (0,react__WEBPACK_IMPORTED_MODULE_8__.useRef)(0);
    const works = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useWorksStore */ .H6)((s)=>s.works);
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__.useThree)((s)=>s.size);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>size.width < 768, [
        size
    ]);
    const width = (0,react__WEBPACK_IMPORTED_MODULE_8__.useMemo)(()=>isMobile ? 0.4 : 0.55, [
        isMobile
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        const handleScroll = (e)=>{
            scrollRef.current += e.deltaY * 0.00035;
            scrollRef.current = Math.max(0, scrollRef.current);
            scrollRef.current = Math.min(HEIGHT * works.length, scrollRef.current);
        };
        window.addEventListener("wheel", handleScroll);
        return ()=>{
            window.removeEventListener("wheel", handleScroll);
        };
    }, [
        works
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
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
            scrollRef.current += dy * 0.00095;
            scrollRef.current = Math.max(0, scrollRef.current);
            scrollRef.current = Math.min(HEIGHT * works.length, scrollRef.current);
            touchRef.current = touch.clientY;
        };
        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        return ()=>{
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
        };
    }, [
        works
    ]);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_9__.useFrame)(({ camera  }, delta)=>{
        camera.position.y = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_10__/* .damp */ .u1)(camera.position.y, -scrollRef.current, 16, delta);
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("group", {
        ref: ref,
        position: [
            -width / 2,
            isMobile ? 0.125 : 0,
            1.625
        ],
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                position: [
                    0,
                    0.075,
                    0
                ],
                text: "My Works",
                font: (_assets_fonts_MrsEavesRomanSmallCaps_ttf__WEBPACK_IMPORTED_MODULE_6___default()),
                fontSize: 0.095,
                anchorX: "left",
                lineHeight: 1,
                outlineColor: "black",
                outlineWidth: 0,
                outlineBlur: 0.05,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meshBasicMaterial", {
                    side: three__WEBPACK_IMPORTED_MODULE_7__.FrontSide
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("group", {
                children: works.map((work, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Canvas_WorkItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                        work: work,
                        idx: idx,
                        offset: HEIGHT * idx,
                        width: width
                    }, idx))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4815:
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
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3784);
/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9542);
/* harmony import */ var _Environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(134);
/* harmony import */ var _Environment_Constellation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3785);
/* harmony import */ var _PostProcessing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3365);
/* harmony import */ var _WorksList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6812);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _Environment__WEBPACK_IMPORTED_MODULE_5__, _Environment_Constellation__WEBPACK_IMPORTED_MODULE_6__, _WorksList__WEBPACK_IMPORTED_MODULE_8__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _Environment__WEBPACK_IMPORTED_MODULE_5__, _Environment_Constellation__WEBPACK_IMPORTED_MODULE_6__, _WorksList__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const WorksScene = ()=>{
    const camRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const size = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useThree)((s)=>s.size);
    const isMobile = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(()=>size.width < 768, [
        size
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useHomeStore.setState */ .ok.setState({
            converged: false
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useStore.setState */ .oR.setState({
            transitioning: false
        });
    }, []);
    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.useFrame)(({ mouse  }, delta)=>{
        if (isMobile) return;
        camRef.current.rotation.x = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_9__/* .damp */ .u1)(camRef.current.rotation.x, mouse.y * 0.05, 8, delta);
        camRef.current.rotation.y = (0,three_src_math_MathUtils__WEBPACK_IMPORTED_MODULE_9__/* .damp */ .u1)(camRef.current.rotation.y, -mouse.x * 0.05, 8, delta);
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
                    isMobile ? 2.25 : 2
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_WorksList__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Environment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PostProcessing__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorksScene);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;