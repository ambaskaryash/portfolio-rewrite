"use strict";
exports.id = 384;
exports.ids = [384];
exports.modules = {

/***/ 4739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation_Socials)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/assets/img/icons/twitter.svg
/* harmony default export */ const twitter = ({"src":"/_next/static/media/twitter.67383ec8.svg","height":8192,"width":8192});
;// CONCATENATED MODULE: ./src/assets/img/icons/linkedin.svg
/* harmony default export */ const linkedin = ({"src":"/_next/static/media/linkedin.7862b629.svg","height":64,"width":64});
;// CONCATENATED MODULE: ./src/assets/img/icons/instagram.svg
/* harmony default export */ const instagram = ({"src":"/_next/static/media/instagram.27c8089c.svg","height":123,"width":123});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/DOM/Navigation/Socials.js





const SIZE = "35px";
const Socials = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "socials",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                id: "nav-socials",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://twitter.com/__jberesford__",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: SIZE,
                            width: SIZE,
                            src: twitter.src,
                            alt: "twitter link"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.linkedin.com/in/yash-ambaskar119//",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: SIZE,
                            width: SIZE,
                            src: linkedin.src,
                            alt: "linkedin link"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://www.instagram.com/game_ofmorons/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            height: SIZE,
                            width: SIZE,
                            src: instagram.src,
                            alt: "instagram link"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Navigation_Socials = (Socials);


/***/ }),

/***/ 6384:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1366);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Socials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4739);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store__WEBPACK_IMPORTED_MODULE_1__]);
_store__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Navigation = ()=>{
    const router = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useStore */ .oR)((s)=>s.router);
    const introDone = (0,_store__WEBPACK_IMPORTED_MODULE_1__/* .useHomeStore */ .ok)((s)=>s.introDone);
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const curPath = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        return router?.pathname;
    }, [
        router
    ]);
    const backPath = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>curPath === "/works" ? "/" : "/works", [
        curPath
    ]);
    const handleNavigate = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, route)=>{
        e.preventDefault();
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useStore.setState */ .oR.setState({
            transitioning: true
        });
        setTimeout(()=>router.push(route), 350);
    }, [
        router
    ]);
    const handleBack = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((e, route)=>{
        e.preventDefault();
        _store__WEBPACK_IMPORTED_MODULE_1__/* .useStore.setState */ .oR.setState({
            transitioning: true
        });
        setTimeout(()=>router.push(route), 350);
    }, [
        router
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: introDone || curPath !== "/" ? "" : "hide",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "buttons",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `backWrapper${curPath === "/" ? " hide" : ""}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: backPath,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "back",
                                onClick: (e)=>handleNavigate(e, backPath),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "line"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "line"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "line"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "hamburger",
                        onClick: ()=>setOpen(true),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "line"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "line"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: open ? "navlist open" : "navlist",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "close",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "lines",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "line"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: (e)=>handleNavigate(e, "/"),
                            className: `${curPath === "/" ? "disabled" : ""}`,
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/works",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: (e)=>handleNavigate(e, "/works"),
                            className: `${curPath === "/works" ? "disabled" : ""}`,
                            children: "My Works"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://lab.john-beresford.com",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "My Lab"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Socials__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useHomeStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, get)=>({
        introDone: false,
        converged: true,
        viewManaged: true,
        actions: {}
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHomeStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1366:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H6": () => (/* reexport safe */ _works__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "oR": () => (/* binding */ useStore),
/* harmony export */   "ok": () => (/* reexport safe */ _home__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4123);
/* harmony import */ var _works__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(126);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, _home__WEBPACK_IMPORTED_MODULE_1__, _works__WEBPACK_IMPORTED_MODULE_2__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, _home__WEBPACK_IMPORTED_MODULE_1__, _works__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// non-application state
const useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, get)=>({
        router: null,
        dom: null,
        debug: false,
        transitioning: false,
        actions: {
            init: ()=>{}
        }
    }));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* binding */ imagesSlice)
});

// UNUSED EXPORTS: imagesActions

;// CONCATENATED MODULE: ./src/assets/img/artofjayjoson/0.webp
/* harmony default export */ const _0 = ({"src":"/_next/static/media/0.8dc1304f.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRpgAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggQgAAALABAJ0BKggABgACQDgllAAC5psyOAAA/vAb//f/j/b63xPcMt40o/9w/62X9MfQn/hnu01/mhOrO7Udxjdb2AAAAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/artofjayjoson/1.webp
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.2b8fc145.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggOAAAAJABAJ0BKggABgACQDgllAAC5pvbkAD+8Bv/9/+oTnFXixD+c9/TH0J/4UtoQKL10KKjG64nhpAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/artofjayjoson/2.webp
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.ac76938d.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRqAAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggSgAAALABAJ0BKggABgACQDgllALsAQ67BIAA/vAb//f/j/b63L7NqgtLI8MF8/5eLcxfhk7v0m7FjpvJ73t1H/lbT8L7WuAqPIwiYAAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/artofjayjoson/3.webp
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.25dd59e7.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRpoAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggRAAAANABAJ0BKggABgACQDglAE6AHojimQgAAP7OBXrIMLKD/NBsf3TqiZ9xhcH0bODJ9uDYKebckTmJrtJL43WRfwFlAAAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/artofjayjoson/4.webp
/* harmony default export */ const _4 = ({"src":"/_next/static/media/4.7aca2ae2.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRp4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggSAAAANABAJ0BKggABgACQDgliAJ0AQ7h0B2AAPlwKpu4F1PEnkgKJsgw2ndP32s9wfRuYVQ7518+w6tZ9Bv0NBN7OWO9z6hVpgAAAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/deforestationdetector/0.webp
/* harmony default export */ const deforestationdetector_0 = ({"src":"/_next/static/media/0.ff214066.webp","height":1144,"width":1464,"blurDataURL":"data:image/webp;base64,UklGRoIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuPfwPfyPxV9jg6gxEBOIiIiseZSckW7PitXn7MvKVYboy2R1peAE2PEAQBWUDggLAAAALABAJ0BKggABgACQDglnAAC53x37AAA/v0ld+9SQ/HIZm5pmhkQ4EfcAAAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/deforestationdetector/1.webp
/* harmony default export */ const deforestationdetector_1 = ({"src":"/_next/static/media/1.5896d168.webp","height":1144,"width":1464,"blurDataURL":"data:image/webp;base64,UklGRpYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuPfwPfy+RV9jg6gxEBOIiIiseZSckW7PitXn7MvKVYboy2R1peAMyLkAABWUDggQAAAALABAJ0BKggABgACQDglpAAC93xrBIAA/vugs2Gl/MihDZn/BOPeSBHkRLBefcq0+utPKrzpTPumAmClg4uAAAA=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/deforestationdetector/2.webp
/* harmony default export */ const deforestationdetector_2 = ({"src":"/_next/static/media/2.a3603834.webp","height":1144,"width":1464,"blurDataURL":"data:image/webp;base64,UklGRowAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuPfwPfyoaLO2QGUGMhJREQk1lxKrmjXZ+Xqc/Yl+WpjtMXT+hIwQikyAABWUDggNgAAALABAJ0BKggABgACQDglpAAC54sJ0AAA/vlix5rjYUx0rJZ5enD5k6l2VCupLp6qQa8NAAAAAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/deforestationdetector/3.webp
/* harmony default export */ const deforestationdetector_3 = ({"src":"/_next/static/media/3.cf65e7a2.webp","height":1144,"width":1464,"blurDataURL":"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuPfwPfyPxV9jg6gxEBOIiIiseZSckW7PitXn7MvKVYboy2R1peAE2PEAQBWUDggTAAAALABAJ0BKggABgACQDgliAJ0AQ66bOQA4n8RlxsZlqy8m+gn9ija/wmvovm7o4Dxs070RS1++jm0Xt2z8XtYQbUELoEHxwWvg54MdAA=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/deforestationdetector/4.webp
/* harmony default export */ const deforestationdetector_4 = ({"src":"/_next/static/media/4.f010308a.webp","height":1144,"width":1464,"blurDataURL":"data:image/webp;base64,UklGRooAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuPfwPfyoaLO2QGUGMhJREQk1lxKrmjXZ+Xqc/Yl+WpjtCXS+hIwQikyAABWUDggNAAAALABAJ0BKggABgACQDglnAAC50IQNoAA/vqf/rARjMSxfgdSRPgKAYfHXzyXOYuXs4EAAAA=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/ucscchessclub/0.webp
/* harmony default export */ const ucscchessclub_0 = ({"src":"/_next/static/media/0.5c2b693c.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRo4AAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggOAAAABACAJ0BKggABgACQDgllAJ0AREek/bM4AAA/v2/Wbie3UR3w0F0KfjW1TXYcsI8OdYPi0HsbQAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/ucscchessclub/1.webp
/* harmony default export */ const ucscchessclub_1 = ({"src":"/_next/static/media/1.8da88168.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRoYAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggMAAAANABAJ0BKggABgACQDgllAJ0AQ7U9TaAAP79vGmabv9dKjD65rb2k12kQXzuGAAAAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/ucscchessclub/2.webp
/* harmony default export */ const ucscchessclub_2 = ({"src":"/_next/static/media/2.c3c3813a.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRqIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggTAAAANABAJ0BKggABgACQDgljAJ0ARSUQ1pAAP6cE3jX0je8jinG9Z0j9I2tJHAhvPy1zbE6q7gOG8qjPbWiVsBhxDnAK2SjYzMdYMwAAAA=","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/ucscchessclub/3.webp
/* harmony default export */ const ucscchessclub_3 = ({"src":"/_next/static/media/3.e22f0ed3.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggPAAAALABAJ0BKggABgACQDgljAJ0AQ5nyRwA/vxB0EmNN8EirsBcAayz6r4oFDFhTW96wdleoyMUPBLVhAAAAA==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/assets/img/ucscchessclub/4.webp
/* harmony default export */ const ucscchessclub_4 = ({"src":"/_next/static/media/4.20ea8a2c.webp","height":1069,"width":1368,"blurDataURL":"data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABQAAQUxQSC8AAAABUBPJVuO/+WY+dPQ5W4AWBTmJiIjEmkvJFe36rFh9zr4EX22MtnhaXwJGKCUMAABWUDggPgAAALABAJ0BKggABgACQDgljAJ0AQ5nyRwA/vxB0EmNN8EirsBcAayz6r7H6yfXUn15hEDTaRrcNw2MDcGbcAAA","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/store/works/imagesSlice.js















const imagesSlice = {
    artofjayjoson: [
        _0.src,
        _1.src,
        _2.src,
        _3.src,
        _4.src, 
    ],
    deforestationdetector: [
        deforestationdetector_0.src,
        deforestationdetector_1.src,
        deforestationdetector_2.src,
        deforestationdetector_3.src,
        deforestationdetector_4.src, 
    ],
    ucscchessclub: [
        ucscchessclub_0.src,
        ucscchessclub_1.src,
        ucscchessclub_2.src,
        ucscchessclub_3.src,
        ucscchessclub_4.src, 
    ]
};
const imagesActions = (set, get)=>({});



/***/ }),

/***/ 126:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var _imagesSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);
zustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// non-application state
const useWorksStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((set, get)=>({
        works: [
            {
                displayName: "Deforestation Detector",
                name: "deforestationdetector",
                description: "Deforestation Detector is a web application that is intended to promote awareness of deforestation in the Amazon and inform users how they can assist with conservation efforts. The experience involves exploring a 3D representation of the Amazon Rainforest.",
                live: "http://deforestationdetector.com",
                source: "https://github.com/Deforestation-Detector/web",
                color: "#c9461e",
                accentColor: "#007D5C",
                images: _imagesSlice__WEBPACK_IMPORTED_MODULE_1__/* .imagesSlice.deforestationdetector */ .$.deforestationdetector
            },
            {
                displayName: "Art of Jay Joson",
                name: "artofjayjoson",
                description: "Jay Joson is a multi-disciplinary artist based in California. His works are composed of illustrations, animations, character designs and more. This web portfolio showcases some of Jay's handpicked works in a unique and personal fashion",
                live: "http://artofjayjoson.com",
                source: "https://github.com/JMBeresford/art-of-jay-joson",
                color: "#8657b1",
                accentColor: "#aa5577",
                images: _imagesSlice__WEBPACK_IMPORTED_MODULE_1__/* .imagesSlice.artofjayjoson */ .$.artofjayjoson
            },
            {
                displayName: "UCSC Chess Club",
                name: "ucscchessclub",
                description: "UCSC Chess Club is a digital chess application for users to play against their peers in a controlled, localized environment. The app uses a standard ELO rating system to rate players relative to the rest of the 'club'.",
                live: null,
                source: "https://github.com/JMBeresford/UCSC-chessclub",
                color: "#B39554",
                accentColor: "#FFD478",
                images: _imagesSlice__WEBPACK_IMPORTED_MODULE_1__/* .imagesSlice.ucscchessclub */ .$.ucscchessclub
            }, 
        ],
        galleryHeight: 0,
        actions: {
            init: ()=>{}
        }
    }));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWorksStore);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;