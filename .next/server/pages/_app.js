"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3606:
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Loading = ()=>{
    const { progress , total  } = (0,_react_three_drei__WEBPACK_IMPORTED_MODULE_2__.useProgress)();
    const transitioning = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)((s)=>s.transitioning);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "loading",
        className: transitioning || progress < 100 && total !== 0 ? "" : "out",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Loading"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        Math.floor(progress),
                        "%"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loading);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ config)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/config.jsx


const titleDefault = "Yash Ambaskar - Dev-Ops Engineer / Developer";
const url = "https://#";
const description = "Yash Ambaskar is a multi-disciplinary designer and developer with a focus on 3D, computer graphics and web technologies.";
const author = "Yash Ambaskar";
const Header = ({ title =titleDefault  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    charSet: "utf-8"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "language",
                    content: "english"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    httpEquiv: "content-type",
                    content: "text/html"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "author",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "designer",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "publisher",
                    content: author
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "description",
                    content: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "keywords",
                    content: "Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist, UI/UX, Design, Designer"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "robots",
                    content: "index,follow"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "distribution",
                    content: "web"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:title",
                    content: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:type",
                    content: "site"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:url",
                    content: url
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:image",
                    content: "/icons/share.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:site_name",
                    content: title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "og:description",
                    content: description
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    href: "/icons/apple-touch-icon.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "16x16",
                    href: "/icons/favicon-16x16.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "32x32",
                    href: "/icons/favicon-32x32.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/icons/apple-touch-icon.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "manifest",
                    href: "/manifest.json"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "mask-icon",
                    color: "#000000",
                    href: "/icons/safari-pinned-tab.svg"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "apple-touch-startup-image",
                    href: "/startup.png"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, minimum-scale=1, initial-scale=1.0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                    name: "theme-color",
                    content: "#000"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("link", {
                    rel: "shortcut icon",
                    href: "/icons/favicon.ico"
                })
            ]
        })
    });
};
/* harmony default export */ const config = (Header);


/***/ }),

/***/ 798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var leva__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1088);
/* harmony import */ var leva__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leva__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_DOM_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3606);
/* harmony import */ var _components_DOM_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6384);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__, _components_DOM_loading__WEBPACK_IMPORTED_MODULE_4__, _components_DOM_Navigation__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_1__, _components_DOM_loading__WEBPACK_IMPORTED_MODULE_4__, _components_DOM_Navigation__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Dom = ({ children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { debug  } = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useStore.setState */ .oR.setState({
            dom: ref
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "absolute",
            zIndex: 10,
            overflow: "auto"
        },
        id: "dom",
        ref: ref,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_DOM_loading__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(leva__WEBPACK_IMPORTED_MODULE_3__.Leva, {
                hidden: !debug
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dom);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1366);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5174);
/* harmony import */ var _layout_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(798);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_2__, _layout_dom__WEBPACK_IMPORTED_MODULE_5__]);
([_store__WEBPACK_IMPORTED_MODULE_2__, _layout_dom__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const LCanvas = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(()=>__webpack_require__.e(/* import() */ 4).then(__webpack_require__.bind(__webpack_require__, 2004)), {
    loadableGenerated: {
        modules: [
            "_app.jsx -> " + "@/layout/canvas"
        ]
    },
    ssr: true
});
function App({ Component , pageProps ={
    title: "index"
}  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const actions = (0,_store__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .oR)((s)=>s.actions);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_2__/* .useStore.setState */ .oR.setState({
            debug: window.location.hash.includes("debug")
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        _store__WEBPACK_IMPORTED_MODULE_2__/* .useStore.setState */ .oR.setState({
            router
        });
        actions.init();
    }, [
        router,
        actions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        let prevRoute = router?.pathname;
        if (prevRoute !== "/") {
            _store__WEBPACK_IMPORTED_MODULE_2__/* .useStore.setState */ .oR.setState({
                prevRoute: prevRoute
            });
        }
    }, [
        router.pathname
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_config__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: pageProps.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout_dom__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                    ...pageProps
                })
            }),
            Component?.r3f && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LCanvas, {
                children: Component.r3f(pageProps)
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4165:
/***/ ((module) => {

module.exports = require("@react-three/drei");

/***/ }),

/***/ 3784:
/***/ ((module) => {

module.exports = require("@react-three/fiber");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("leva");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9488:
/***/ ((module) => {

module.exports = require("r3f-perf");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 2949:
/***/ ((module) => {

module.exports = import("three");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,486,384], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();