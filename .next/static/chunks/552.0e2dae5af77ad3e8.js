(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[552],{1033:function(e,t,r){"use strict";r.d(t,{j:function(){return l}});var n=r(7294),i=r(3887),s=r(3466),o=r.n(s);function a(e,t){"function"===typeof e?e(t):null!=e&&(e.current=t)}function l({showPanel:e=0,className:t,parent:r}){const s=function(e,t=[],r){const[i,s]=n.useState();return n.useLayoutEffect((()=>{const t=e();return s(t),a(r,t),()=>a(r,null)}),t),i}((()=>new(o())),[]);return n.useEffect((()=>{if(s){const n=r&&r.current||document.body;s.showPanel(e),null==n||n.appendChild(s.dom),t&&s.dom.classList.add(...t.split(" ").filter((e=>e)));const o=(0,i.m)((()=>s.begin())),a=(0,i.n)((()=>s.end()));return()=>{null==n||n.removeChild(s.dom),o(),a()}}}),[r,s,t,e]),null}},6135:function(e,t,r){"use strict";r.d(t,{Xz:function(){return m}});var n=r(3887),i=r(7462),s=r(7294),o=r(9477),a=r(296),l=r.n(a);function c(e){let{debounce:t,scroll:r,polyfill:n,offsetSize:i}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e;const o=n||("undefined"===typeof window?class{}:window.ResizeObserver);if(!o)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[a,c]=(0,s.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,s.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:a}),p=t?"number"===typeof t?t:t.scroll:null,f=t?"number"===typeof t?t:t.resize:null,m=(0,s.useRef)(!1);(0,s.useEffect)((()=>(m.current=!0,()=>{m.current=!1})));const[g,x,y]=(0,s.useMemo)((()=>{const e=()=>{if(!d.current.element)return;const{left:e,top:t,width:r,height:n,bottom:s,right:o,x:a,y:l}=d.current.element.getBoundingClientRect(),u={left:e,top:t,width:r,height:n,bottom:s,right:o,x:a,y:l};d.current.element instanceof HTMLElement&&i&&(u.height=d.current.element.offsetHeight,u.width=d.current.element.offsetWidth),Object.freeze(u),m.current&&!h(d.current.lastBounds,u)&&c(d.current.lastBounds=u)};return[e,f?l()(e,f):e,p?l()(e,p):e]}),[c,i,p,f]);function b(){d.current.scrollContainers&&(d.current.scrollContainers.forEach((e=>e.removeEventListener("scroll",y,!0))),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null)}function v(){d.current.element&&(d.current.resizeObserver=new o(y),d.current.resizeObserver.observe(d.current.element),r&&d.current.scrollContainers&&d.current.scrollContainers.forEach((e=>e.addEventListener("scroll",y,{capture:!0,passive:!0}))))}var j,w,S;return j=y,w=Boolean(r),(0,s.useEffect)((()=>{if(w){const e=j;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",e,!0)}}}),[j,w]),S=x,(0,s.useEffect)((()=>{const e=S;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[S]),(0,s.useEffect)((()=>{b(),v()}),[r,y,x]),(0,s.useEffect)((()=>b),[]),[e=>{e&&e!==d.current.element&&(b(),d.current.element=e,d.current.scrollContainers=u(e),v())},a,g]}function u(e){const t=[];if(!e||e===document.body)return t;const{overflow:r,overflowX:n,overflowY:i}=window.getComputedStyle(e);return[r,n,i].some((e=>"auto"===e||"scroll"===e))&&t.push(e),[...t,...u(e.parentElement)]}const d=["x","y","top","bottom","left","right","width","height"],h=(e,t)=>d.every((r=>e[r]===t[r]));r(2576),r(6525),r(3840);const p={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function f(e){const{handlePointer:t}=(0,n.c)(e);return{priority:1,enabled:!0,compute(e,t,r){t.pointer.set(e.offsetX/t.size.width*2-1,-e.offsetY/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(p).reduce(((e,r)=>({...e,[r]:t(r)})),{}),connect:t=>{var r;const{set:n,events:i}=e.getState();null==i.disconnect||i.disconnect(),n((e=>({events:{...e.events,connected:t}}))),Object.entries(null!=(r=i.handlers)?r:[]).forEach((([e,r])=>{const[n,i]=p[e];t.addEventListener(n,r,{passive:i})}))},disconnect:()=>{const{set:t,events:r}=e.getState();var n;r.connected&&(Object.entries(null!=(n=r.handlers)?n:[]).forEach((([e,t])=>{if(r&&r.connected instanceof HTMLElement){const[n]=p[e];r.connected.removeEventListener(n,t)}})),t((e=>({events:{...e.events,connected:void 0}}))))}}}const m=s.forwardRef((function({children:e,fallback:t,resize:r,style:a,gl:l,events:u=f,shadows:d,linear:h,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:y,performance:b,raycaster:v,camera:j,onPointerMissed:w,onCreated:S,...E},z){s.useMemo((()=>(0,n.e)(o)),[]);const[C,{width:A,height:M}]=c({scroll:!0,debounce:{scroll:50,resize:0},...r}),P=s.useRef(null),L=s.useRef(null),[O,k]=s.useState(null);s.useImperativeHandle(z,(()=>P.current));const R=(0,n.u)(w),[T,I]=s.useState(!1),[D,U]=s.useState(!1);if(T)throw T;if(D)throw D;const _=s.useRef(null);return A>0&&M>0&&O&&(_.current||(_.current=(0,n.a)(O)),_.current.configure({gl:l,events:u,shadows:d,linear:h,flat:p,legacy:m,orthographic:g,frameloop:x,dpr:y,performance:b,raycaster:v,camera:j,size:{width:A,height:M},onPointerMissed:(...e)=>null==R.current?void 0:R.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(L.current),null==S||S(e)}}),_.current.render(s.createElement(n.E,{set:U},s.createElement(s.Suspense,{fallback:s.createElement(n.B,{set:I})},e)))),(0,n.b)((()=>{k(P.current)}),[]),s.useEffect((()=>{if(O)return()=>(0,n.d)(O)}),[O]),s.createElement("div",(0,i.Z)({ref:L,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",...a}},E),s.createElement("div",{ref:C,style:{width:"100%",height:"100%"}},s.createElement("canvas",{ref:P,style:{display:"block"}},t)))}))},296:function(e){function t(e,t,r){var n,i,s,o,a;function l(){var c=Date.now()-o;c<t&&c>=0?n=setTimeout(l,t-c):(n=null,r||(a=e.apply(s,i),s=i=null))}null==t&&(t=100);var c=function(){s=this,i=arguments,o=Date.now();var c=r&&!n;return n||(n=setTimeout(l,t)),c&&(a=e.apply(s,i),s=i=null),a};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(a=e.apply(s,i),s=i=null,clearTimeout(n),n=null)},c}t.debounce=t,e.exports=t},7925:function(e,t,r){"use strict";r.d(t,{Iy:function(){return ue}});var n=r(7294),i=r(3887),s=r(6135),o=r(9477);function a(e){let t;const r=new Set,n=(e,n)=>{const i="function"===typeof e?e(t):e;if(i!==t){const e=t;t=n?i:Object.assign({},t,i),r.forEach((r=>r(t,e)))}},i=()=>t,s={setState:n,getState:i,subscribe:(e,n,s)=>n||s?((e,n=i,s=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let o=n(t);function a(){const r=n(t);if(!s(o,r)){const t=o;e(o=r,t)}}return r.add(a),()=>r.delete(a)})(e,n,s):(r.add(e),()=>r.delete(e)),destroy:()=>r.clear()};return t=e(n,i,s),s}const l="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?n.useEffect:n.useLayoutEffect;var c=r(6744),u=r(2469),d=r(6625),h=r(5893),p=r(745);function f(e){let t=0;for(let n in e.attributes){const r=e.getAttribute(n);t+=r.count*r.itemSize*r.array.BYTES_PER_ELEMENT}const r=e.getIndex();return t+=r?r.count*r.itemSize*r.array.BYTES_PER_ELEMENT:0,t}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}class y{constructor(e={}){this.names=[""],this.finished=[],this.gl=void 0,this.extension=void 0,this.query=void 0,this.paused=!1,this.queryHasResult=!1,this.queryCreated=!1,this.isWebGL2=!0,this.memAccums=[],this.gpuAccums=[],this.activeAccums=[],this.chart=[],this.gpuChart=[],this.memChart=[],this.paramLogger=()=>{},this.glFinish=()=>{},this.chartLogger=()=>{},this.chartLen=60,this.maxMemory=1500,this.chartHz=10,this.chartFrame=0,this.gpuTimeProcess=0,this.chartTime=0,this.activeQueries=0,this.circularId=0,this.detected=0,this.frameId=0,this.rafId=0,this.checkQueryId=0,this.uuid=void 0,this.currentMem=0,this.paramFrame=0,this.paramTime=0,this.now=()=>{},this.t0=0,window.GLPerf=window.GLPerf||{},Object.assign(this,e),this.chart=new Array(this.chartLen).fill(0),this.gpuChart=new Array(this.chartLen).fill(0),this.memChart=new Array(this.chartLen).fill(0),this.now=()=>window.performance&&window.performance.now?window.performance.now():Date.now(),this.initGpu(),this.is120hz()}initGpu(){this.uuid=o.MathUtils.generateUUID(),this.gl&&(this.isWebGL2=!0,this.extension||(this.extension=this.gl.getExtension("EXT_disjoint_timer_query_webgl2")),null===this.extension&&(this.isWebGL2=!1))}is120hz(){let e=0;const t=r=>{++e<20?this.rafId=window.requestAnimationFrame(t):(this.detected=Math.ceil(1e3*e/(r-this.t0)/70),window.cancelAnimationFrame(this.rafId)),this.t0||(this.t0=r)};this.rafId=window.requestAnimationFrame(t)}addUI(e){-1===this.names.indexOf(e)&&(this.names.push(e),this.gpuAccums.push(0),this.activeAccums.push(!1))}nextFrame(e){this.frameId++;const t=e||this.now(),r=t-this.paramTime;let n=0;if(this.frameId<=1)this.paramFrame=this.frameId,this.paramTime=t;else if(t>=this.paramTime+200){this.maxMemory=window.performance.memory?window.performance.memory.jsHeapSizeLimit/1048576:0;const e=this.frameId-this.paramFrame,i=1e3*e/r;for(let t=0;t<this.names.length;t++)n=this.isWebGL2?this.gpuAccums[t]:this.gpuAccums[t]/r,this.currentMem=Math.round(window.performance&&window.performance.memory?window.performance.memory.usedJSHeapSize/1048576:0),this.paramLogger({gpu:n,i:t,mem:this.currentMem,maxMemory:this.maxMemory,fps:i,duration:Math.round(r),frameCount:e}),this.isWebGL2?this.gpuAccums[t]=0:Promise.all(this.finished).then((()=>{this.gpuAccums[t]=0,this.finished=[]}));this.paramFrame=this.frameId,this.paramTime=t}if(this.detected&&this.chartFrame){const e=t-this.chartTime;let n=this.chartHz*e/1e3;for(;--n>0&&this.detected;){const n=(this.frameId-this.chartFrame)/e*1e3;this.chart[this.circularId%this.chartLen]=n;const i=1e3/this.currentMem,s=(this.isWebGL2?2*this.gpuAccums[1]:Math.round(this.gpuAccums[1]/r*100))+4;s>0&&(this.gpuChart[this.circularId%this.chartLen]=s),i>0&&(this.memChart[this.circularId%this.chartLen]=i);for(let e=0;e<this.names.length;e++)this.chartLogger({i:e,data:{fps:this.chart,gpu:this.gpuChart,mem:this.memChart},circularId:this.circularId});this.circularId++,this.chartFrame=this.frameId,this.chartTime=t}}else this.chartFrame=this.frameId,this.chartTime=t,this.circularId=0}startGpu(){const e=this.gl,t=this.extension;if(e&&t&&this.isWebGL2){let r,n,i=!1;if(this.query){this.queryHasResult=!1;let s=this.query;if(i=e.getQueryParameter(s,e.QUERY_RESULT_AVAILABLE),r=e.getParameter(t.GPU_DISJOINT_EXT),i&&!r){n=e.getQueryParameter(this.query,e.QUERY_RESULT);const t=1e-6*n;i&&t>0&&(r||this.activeAccums.forEach(((e,r)=>{this.gpuAccums[r]=t})))}}!i&&this.query||(this.queryCreated=!0,this.query=e.createQuery(),e.beginQuery(t.TIME_ELAPSED_EXT,this.query))}}endGpu(){const e=this.extension,t=this.gl;this.isWebGL2&&this.queryCreated&&t.getQuery(e.TIME_ELAPSED_EXT,t.CURRENT_QUERY)&&t.endQuery(e.TIME_ELAPSED_EXT)}begin(e){this.startGpu(),this.updateAccums(e)}end(e){this.endGpu(),this.updateAccums(e)}updateAccums(e){let t=this.names.indexOf(e);-1===t&&(t=this.names.length,this.addUI(e));const r=this.now();this.activeAccums[t]=!this.activeAccums[t],this.t0=r}}const b=o.Object3D.prototype.updateMatrixWorld;let v={value:-1};const j=(e,t)=>{e.defines||(e.defines={}),e.defines&&!e.defines.muiPerf&&(e.defines=Object.assign(e.defines||{},{muiPerf:e.uuid}));const r=e.uuid;return t[r]||(t[r]={meshes:{},material:e},e.needsUpdate=!0),e.needsUpdate=!1,r},w=e=>"muiPerf"===e,S=function(e){const t="function"===typeof e?a(e):e,r=(e=t.getState,r=Object.is)=>{const[,i]=(0,n.useReducer)((e=>e+1),0),s=t.getState(),o=(0,n.useRef)(s),a=(0,n.useRef)(e),c=(0,n.useRef)(r),u=(0,n.useRef)(!1),d=(0,n.useRef)();let h;void 0===d.current&&(d.current=e(s));let p=!1;(o.current!==s||a.current!==e||c.current!==r||u.current)&&(h=e(s),p=!r(d.current,h)),l((()=>{p&&(d.current=h),o.current=s,a.current=e,c.current=r,u.current=!1}));const f=(0,n.useRef)(s);l((()=>{const e=()=>{try{const e=t.getState(),r=a.current(e);c.current(d.current,r)||(o.current=e,d.current=r,i())}catch(e){u.current=!0,i()}},r=t.subscribe(e);return t.getState()!==f.current&&e(),r}),[]);const m=p?h:d.current;return(0,n.useDebugValue)(m),m};return Object.assign(r,t),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[r,t];return{next(){const t=e.length<=0;return{value:e.shift(),done:t}}}},r}((e=>({log:null,paused:!1,triggerProgramsUpdate:0,customData:0,chart:{data:{fps:[],gpu:[],mem:[]},circularId:0},gl:void 0,objectWithMaterials:null,scene:void 0,programs:new Map,sceneLength:void 0,tab:"infos"}))),E=({trackCPU:e,chart:t,deepAnalyze:r,matrixUpdate:s})=>{const{gl:a,scene:l}=(0,i.w)();S.setState({gl:a,scene:l});const c=(0,n.useMemo)((()=>{const e=new y({trackGPU:!0,chartLen:t?t.length:120,chartHz:t?t.hz:60,gl:a.getContext(),chartLogger:e=>{S.setState({chart:e})},paramLogger:e=>{S.setState({log:{maxMemory:e.maxMemory,gpu:e.gpu,mem:e.mem,fps:e.fps,totalTime:e.duration,frameCount:e.frameCount}})}}),r=new Map,n=new Map;return Object.defineProperty(o.Scene.prototype,"onBeforeRender",{get(){return(...t)=>{var n;e&&e.begin("profiler"),null===(n=r.get(this))||void 0===n||n(...t)}},set(e){r.set(this,e)},configurable:!0}),Object.defineProperty(o.Scene.prototype,"onAfterRender",{get(){return(...t)=>{var r;e&&e.end("profiler"),null===(r=n.get(this))||void 0===r||r(...t)}},set(e){n.set(this,e)},configurable:!0}),e}),[]);return(0,n.useEffect)((()=>{s&&(o.Object3D.prototype.updateMatrixWorld=function(){v.value++,b.apply(this,arguments)}),a.info.autoReset=!1;let e=null,t=null;if(a.info)return e=(0,i.m)((()=>{S.getState().paused&&S.setState({paused:!1}),v.value=-1,a.info&&a.info.reset()})),t=(0,i.n)((()=>{if(c&&!c.paused&&c.nextFrame(window.performance.now()),r){var e,t;const r={},n=new Map;l.traverse((function(e){if((e instanceof o.Mesh||e instanceof o.Points)&&e.material){let t=e.material.uuid;const n=Array.isArray(e.material)&&e.material.length>1;t=j(n?e.material[1]:e.material,r),r[t].meshes[e.uuid]=e}})),null===a||void 0===a||null===(e=a.info)||void 0===e||null===(t=e.programs)||void 0===t||t.forEach((e=>{const t=e.cacheKey.split(","),i=t[t.findIndex(w)+1];if((e=>{let t=""+e;return t=t.match("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"),null!==t})(i)&&r[i]){const{material:t,meshes:s}=r[i];n.set(i,{program:e,material:t,meshes:s,drawCounts:{total:0,type:"triangle",data:[]},expand:!1,visible:!0})}})),n.size!==S.getState().programs.size&&((e=>{e.forEach(((e,t)=>{const{meshes:r}=e;if(!r)return;let n={total:0,type:"Triangle",data:[]};Object.keys(r).forEach((e=>{const t=r[e],{geometry:i,material:s}=t;let o=i.index;const a=i.attributes.position;if(!a)return;let l=1;!0===s.wireframe&&(l=0);const c=null!==o?o.count:a.count,u=i.drawRange.start*l,d=i.drawRange.count*l,h=u,p=Math.min(c,u+d)-1;let f=1;const m=t.count||1;let g="Triangle",x=0;t.isMesh?!0===s.wireframe?(g="Line",f/=2):(g="Triangle",f/=3):t.isLine?(g="Line",t.isLineSegments?f/=2:t.isLineLoop||(f-=1)):t.isPoints?g="Point":t.isSprite&&(g="Triangle",f/=3);const y=Math.round(Math.max(0,p-h+1)*(f*m));y>x&&(x=y,n.type=g),n.total+=y,n.data.push({drawCount:y,type:g}),t.userData.drawCount={type:g,count:y}})),e.drawCounts=n}))})(n),S.setState({programs:n,triggerProgramsUpdate:S.getState().triggerProgramsUpdate++}))}})),()=>{c&&(window.cancelAnimationFrame(c.rafId),window.cancelAnimationFrame(c.checkQueryId)),s&&(o.Object3D.prototype.updateMatrixWorld=b),e(),t()}}),[c,a,e,t,s]),(0,n.useEffect)((()=>{const e=(0,i.o)((()=>(c&&(c.paused=!0,v.value=-1,S.setState({paused:!0,log:{maxMemory:0,gpu:0,mem:0,fps:0,totalTime:0,frameCount:0}})),!1)));return()=>{e()}}),[]),null},z=(0,c.zo)("div",{position:"fixed",top:0,right:0,zIndex:9999,fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif",backgroundColor:"rgba(36, 36, 36, .9)",color:"#fff",margin:0,minHeight:"100px",padding:"4px 0","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale",userSelect:"none","&.top-left":{right:"initial",left:0},"&.bottom-left":{right:"initial",top:"initial",bottom:0,left:0,".__perf_toggle":{top:"-20px",bottom:"initial"}},"&.bottom-right":{top:"initial",bottom:0,".__perf_toggle":{top:"-20px",bottom:"initial"}},"&.minimal":{backgroundColor:"rgba(36, 36, 36, .75)"},"*":{margin:"0",padding:"0",border:"0",fontSize:"100%",lineHeight:"1",verticalAlign:"baseline"}}),C=(0,c.zo)("small",{position:"absolute",right:0,fontSize:"10px"}),A=(0,c.zo)("div",{display:"inline-flex",fontStyle:"normal",padding:0,lineHeight:"13px",fontSize:"14px",width:"62px",position:"relative",pointerEvents:"auto",cursor:"default",fontWeight:500,letterSpacing:"0px",textAlign:"left",height:"29px",whiteSpace:"nowrap",justifyContent:"space-evenly",fontVariantNumeric:"tabular-nums",small:{paddingLeft:"12px"},svg:{padding:0,color:"rgba(145, 145, 145, 0.3)",fontSize:"40px",position:"absolute",zIndex:1,maxHeight:"20px",left:" 50%",marginLeft:"-23px",top:"4px"}}),M=(0,c.zo)("span",{verticalAlign:"bottom",position:"absolute",bottom:"5px",color:"rgba(101, 197, 188, 1)",textAlign:"right",letterSpacing:"1px",fontSize:"8px",fontWeight:"500",width:"60px"}),P=(0,c.zo)("div",{display:"flex"}),L=(0,c.zo)("div",{backgroundColor:"#404040",padding:"6px",display:"block",fontSize:"12px",marginBottom:"6px",cursor:"pointer","*":{cursor:"pointer !important"},"> span":{},small:{fontSize:"9px"},"> b":{marginRight:"4px",cursor:"pointer"}}),O=(0,c.zo)("div",{height:"66px",overflow:"hidden",position:"absolute",pointerEvents:"none",display:"flex",top:"0px",justifyContent:"center",width:"100%",minWidth:"310px",margin:"0 auto",canvas:{background:"transparent !important",position:"absolute !important"}}),k=(0,c.zo)("div",{textAlign:"center",fontWeight:700,fontSize:"12px",lineHeight:"12px",display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle",color:"#f1f1f1",padding:"7px",width:"100%",backgroundColor:"rgba(36, 36, 37, 0.8)",zIndex:1,position:"absolute",height:"100%"}),R=(0,c.zo)("div",{pointerEvents:"auto",justifyContent:"center",cursor:"pointer",fontSize:"12px",backgroundColor:"rgb(41, 43, 45)",marginTop:"6px",width:"auto",margin:"0",color:"rgba(145, 145, 145, 1)",textAlign:"center",display:"inline-block",verticalAlign:"middle",padding:"4px 6px","&.__perf_toggle_tab_active":{backgroundColor:"rgb(31 31 31)"},svg:{width:"12px",height:"12px",float:"left"}}),T=(0,c.zo)("div",{pointerEvents:"auto",justifyContent:"center",cursor:"pointer",fontSize:"12px",float:"right",backgroundColor:"rgb(41, 43, 45)",width:"auto",margin:"0",color:"rgba(145, 145, 145, 1)",textAlign:"center",display:"inline-block",verticalAlign:"middle",padding:"4px 6px","&.__perf_toggle_tab_active":{backgroundColor:"rgb(31 31 31)"},svg:{width:"12px",height:"12px",float:"left"}}),I=(0,c.zo)("div",{padding:"4px 6px",fontSize:"12px",pointerEvents:"auto"}),D=(0,c.zo)("span",{fontWeight:"bold",letterSpacing:"0.08em",maxWidth:"145px",overflow:"hidden",textOverflow:"ellipsis",display:"inline-block",verticalAlign:"middle",fontSize:"11px",marginRight:"10px"}),U=(0,c.zo)("div",{maxHeight:"50vh",overflowY:"auto",marginTop:"38px"}),_=(0,c.zo)("div",{marginTop:"0"}),B=(0,c.zo)("div",{display:"flex",position:"relative",fontWeight:"bold",color:"#fff",lineHeight:"14px",svg:{marginRight:"4px",display:"inline-block"}}),F=(0,c.zo)("ul",{display:"block",position:"relative",paddingLeft:"10px",margin:"6px 6px",img:{maxHeight:"60px",maxWidth:"100%",margin:"6px auto",display:"block"},"&:after":{content:"",position:"absolute",left:"0px",top:"0px",width:"1px",height:"100%",backgroundColor:"grey",transform:"translateX(-50%)",maxHeight:"50vh",overflowY:"auto"},li:{borderBottom:"1px solid #313131",display:"block",padding:"4px",margin:0,lineHeight:1,verticalAlign:"middle",height:"24px"},b:{fontWeight:"bold"},small:{textAlign:"revert",letterSpacing:"1px",fontSize:"10px",fontWeight:"500",marginLeft:"2px",color:"rgb(101, 197, 188)"}}),G=(0,c.zo)("button",{fontWeight:"bold",letterSpacing:"0.02em",backgroundColor:"rgb(41, 43, 45)",color:"rgb(211, 211, 211)",overflow:"hidden",textOverflow:"ellipsis",cursor:"pointer",display:"block",verticalAlign:"middle",fontSize:"11px",padding:"5px",margin:"4px auto"}),W=(0,c.zo)("div",{display:"flex",justifyContent:"center",cursor:"pointer",fontSize:"12px",backgroundColor:"rgb(41, 43, 45)",marginTop:"6px",width:"auto",margin:"0 auto",color:"rgba(145, 145, 145, 1)",textAlign:"center",position:"absolute",right:0,bottom:" -20px",svg:{width:"12px",height:"12px",float:"left"}}),X=(0,c.zo)("li",{display:"flex !important",height:"auto !important",span:{height:"40px",display:"block",position:"relative"},b:{paddingLeft:"12px"}}),H=(0,n.memo)((({isPerf:e,color:t,customData:r,isMemory:s,isShadersInfo:o,metric:a,fontSize:l,offsetY:c=0,offsetX:u,round:p,hasInstance:f})=>{const{width:m,height:g}=(0,i.w)((e=>e.viewport)),x=(0,n.useRef)(null),y=(0,n.useRef)(null);return(0,i.x)((()=>{const t=S.getState().gl,n=S.getState().log;if(!n||!x.current)return;if(r&&(x.current.text=S.getState().customData),!a)return;let i=n[a];var u;if(o)i=null===(u=t.info.programs)||void 0===u?void 0:u.length;else if("matriceCount"===a)i=v.value;else if(!e&&t.info.render){i=(s?t.info.memory:t.info.render)[a]}if(x.current.text=("maxMemory"===a?"/":"")+(Math.round(i*Math.pow(10,p))/Math.pow(10,p)).toFixed(p),f){const e=t.info.instance;if("undefined"===typeof e)return;const r=e[a];r>0?(x.current.fontSize=l/1.15,y.current.fontSize=i>0?l/1.4:l,x.current.position.y=g/2-c-l/1.9,y.current.text=" \xb1\t"+(Math.round(r*Math.pow(10,p))/Math.pow(10,p)).toFixed(p)):(x.current.position.y=g/2-c-l,x.current.fontSize=l)}v.value-=1,x.current.updateMatrixWorld()})),(0,h.jsxs)(n.Suspense,{fallback:null,children:[(0,h.jsx)(d.x,{textAlign:"justify",ref:x,fontSize:l,position:[-m/2+u+l,g/2-c-l,0],color:t,characters:"0123456789",onUpdate:e=>e.updateMatrixWorld(),children:"0"}),f&&(0,h.jsx)(d.x,{textAlign:"justify",ref:y,fontSize:8,position:[-m/2+u+l,g/2-c-1.15*l,0],color:"lightgrey",characters:"0123456789",onUpdate:e=>e.updateMatrixWorld()})]})})),N=({colorBlind:e,customData:t,minimal:r,matrixUpdate:n})=>{const i=14;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(H,{color:`rgb(${re(e).fps.toString()})`,isPerf:!0,metric:"fps",fontSize:i,offsetX:140,round:0}),(0,h.jsx)(H,{color:"",isPerf:!0,metric:"mem",fontSize:i,offsetX:80,round:0}),(0,h.jsx)(H,{color:"",isPerf:!0,metric:"maxMemory",fontSize:8,offsetX:112,offsetY:10,round:0}),(0,h.jsx)(H,{color:`rgb(${re(e).gpu.toString()})`,isPerf:!0,metric:"gpu",fontSize:i,offsetX:10,round:3}),r?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(H,{metric:"calls",fontSize:i,offsetX:200,round:0,hasInstance:!0}),(0,h.jsx)(H,{metric:"triangles",fontSize:i,offsetX:260,round:0,hasInstance:!0}),(0,h.jsx)(H,{isMemory:!0,metric:"geometries",fontSize:i,offsetY:30,offsetX:0,round:0}),(0,h.jsx)(H,{isMemory:!0,metric:"textures",fontSize:i,offsetY:30,offsetX:80,round:0}),(0,h.jsx)(H,{isShadersInfo:!0,metric:"programs",fontSize:i,offsetY:30,offsetX:140,round:0}),(0,h.jsx)(H,{metric:"lines",fontSize:i,offsetY:30,offsetX:200,round:0,hasInstance:!0}),(0,h.jsx)(H,{metric:"points",fontSize:i,offsetY:30,offsetX:260,round:0,hasInstance:!0}),n&&(0,h.jsx)(H,{isPerf:!0,metric:"matriceCount",fontSize:i,offsetY:30,offsetX:320,round:0})]}),t&&(0,h.jsx)(H,{color:`rgb(${re(e).custom.toString()})`,customData:t,fontSize:i,offsetY:0,offsetX:r?200:320,round:0})]})},Y=({colorBlind:e,minimal:t,chart:r={length:30,hz:15}})=>{const s=(0,n.useMemo)((()=>({fps:new Float32Array(3*r.length),mem:new Float32Array(3*r.length),gpu:new Float32Array(3*r.length)})),[r]),a=(0,n.useRef)(null),l=(0,n.useRef)(null),c=(0,n.useRef)(null),u=(0,n.useMemo)((()=>new o.Vector3(0,0,0)),[]),d=(e,r=1,n,i)=>{let s=0;const{width:o,height:a}=i,l=S.getState().chart.data[e];if(!l||0===l.length)return;const c=t?2:6,d=t?12:50;let h=l.length;for(let t=0;t<h;t++){let e=(S.getState().chart.circularId+t+1)%h;void 0!==l[e]&&(l[e]>s&&(s=l[e]*r),u.set(c+t/(h-1)*(o-2*c)-o/2,Math.min(100,l[e])*r/100*(a-2*c-d)-a/2,0),u.toArray(n.attributes.position.array,3*t))}n.attributes.position.needsUpdate=!0},[p]=(0,n.useState)(window.performance.memory);return(0,i.x)((({viewport:e})=>{d("fps",1,a.current,e),d("gpu",5,l.current,e),p&&d("mem",1,c.current,e)})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("line",{children:[(0,h.jsx)("bufferGeometry",{ref:a,children:(0,h.jsx)("bufferAttribute",{attach:"attributes-position",count:r.length,array:s.fps,itemSize:3,needsUpdate:!0})}),(0,h.jsx)("lineBasicMaterial",{color:`rgb(${re(e).fps.toString()})`,transparent:!0,opacity:.5})]}),(0,h.jsxs)("line",{children:[(0,h.jsx)("bufferGeometry",{ref:l,children:(0,h.jsx)("bufferAttribute",{attach:"attributes-position",count:r.length,array:s.gpu,itemSize:3,needsUpdate:!0})}),(0,h.jsx)("lineBasicMaterial",{color:`rgb(${re(e).gpu.toString()})`,transparent:!0,opacity:.5})]}),p&&(0,h.jsxs)("line",{children:[(0,h.jsx)("bufferGeometry",{ref:c,children:(0,h.jsx)("bufferAttribute",{attach:"attributes-position",count:r.length,array:s.mem,itemSize:3,needsUpdate:!0})}),(0,h.jsx)("lineBasicMaterial",{color:`rgb(${re(e).mem.toString()})`,transparent:!0,opacity:.5})]})]})},q=({colorBlind:e,chart:t,customData:r,matrixUpdate:i,showGraph:o=!0,antialias:a=!0,minimal:l})=>{const c=(0,n.useRef)(void 0),d=S((e=>e.paused));return(0,h.jsxs)(O,{style:{display:"flex",position:"absolute",height:(l?37:o?100:60)+"px",minWidth:""+(l?"100px":r?"370px":"310px")},children:[(0,h.jsx)(s.Xz,{ref:c,orthographic:!0,dpr:a?[1,2]:1,gl:{antialias:!0,alpha:!0,stencil:!1,depth:!1},onCreated:({scene:e})=>e.autoUpdate=!1,flat:!0,style:{marginBottom:"-42px",position:"relative",pointerEvents:"none",background:"transparent !important",height:(l?37:o?100:60)+"px"},children:d?null:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N,{customData:r,minimal:l,matrixUpdate:i}),o&&(0,h.jsx)(Y,{colorBlind:e,minimal:l,chart:t})]})}),d&&(0,h.jsxs)(k,{children:[(0,h.jsx)(u.fpf,{})," PAUSED"]})]})};function $(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}const Q=["portal","className","children"],V=(0,n.forwardRef)(((e,t)=>{let{portal:r,className:s,children:o}=e,a=$(e,Q);const l=(0,i.w)((e=>e.gl)),c=(0,n.useRef)(null),u=(0,n.useRef)(null),d=null!=(null===r||void 0===r?void 0:r.current)?r.current:l.domElement.parentNode;return(0,n.useLayoutEffect)((()=>{if(!c.current||!d)return;const e=document.createElement("div"),t=u.current=(0,p.createRoot)(e);return d.appendChild(e),()=>{t.unmount(),u.current=null,d.removeChild(e)}}),[d]),(0,n.useLayoutEffect)((()=>{const e=u.current;e&&e.render((0,h.jsx)("div",{ref:t,className:s,children:o}))})),(0,h.jsx)("group",x(x({},a),{},{ref:c}))})),J=(e,t)=>({name:e,url:t.image.currentSrc,encoding:(e=>{switch(e){case 3e3:return"LinearEncoding";case 3001:return"sRGBEncoding";case 3002:return"RGBEEncoding";case 3003:return"LogLuvEncoding";case 3004:return"RGBM7Encoding";case 3005:return"RGBM16Encoding";case 3006:return"RGBDEncoding";case 3007:return"GammaEncoding";default:return"ClampToEdgeWrapping"}})(t.encoding),wrapT:(e=>{switch(e){case 1e3:return"RepeatWrapping";case 1001:default:return"ClampToEdgeWrapping";case 1002:return"MirroredRepeatWrapping"}})(t.image.wrapT),flipY:t.flipY.toString()}),K=({program:e,material:t,setTexNumber:r})=>{const i=S((e=>e.gl)),[s,a]=(0,n.useState)(null);return(0,n.useEffect)((()=>{if(i){const n=null===e||void 0===e?void 0:e.getUniforms();let i=0;const s=new Map;n.seq.forEach((e=>{if(!e.id.includes("uTroika")&&"isOrthographic"!==e.id&&"uvTransform"!==e.id&&"lightProbe"!==e.id&&"projectionMatrix"!==e.id&&"viewMatrix"!==e.id&&"normalMatrix"!==e.id&&"modelMatrix"!==e.id&&"modelViewMatrix"!==e.id){let r=[],n={name:e.id};e.cache&&(e.cache.forEach((e=>{"undefined"!==typeof e&&r.push(e.toString().substring(0,4))})),n.value=r.join(),t[e.id]&&t[e.id].image&&t[e.id].image&&(i++,n.value=J(e.id,t[e.id])),n.value||(n.value="empty"),s.set(e.id,n))}})),t.uniforms&&Object.keys(t.uniforms).forEach((e=>{const r=t.uniforms[e];if(r.value){const{value:t}=r;let a={name:e};if(e.includes("uTroika"))return;if(t instanceof o.Texture)i++,a.value=J(e,t);else{let e=JSON.stringify(t);try{e=JSON.stringify(t)}catch(n){e=t.toString()}a.value=e}s.set(e,a)}})),i>0&&r(i),a(s)}}),[]),(0,h.jsx)(F,{children:s&&Array.from(s.values()).map((e=>(0,h.jsx)("span",{children:"string"===typeof e.value?(0,h.jsx)("li",{children:(0,h.jsxs)("span",{children:[e.name," :"," ",(0,h.jsxs)("b",{children:[e.value.substring(0,30),e.value.length>30?"...":""]})]})}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("li",{children:(0,h.jsxs)("b",{children:[e.value.name,":"]})}),(0,h.jsxs)("div",{children:[Object.keys(e.value).map((t=>"name"!==t?(0,h.jsx)("div",{children:"url"===t?(0,h.jsx)("a",{href:e.value[t],target:"_blank",children:(0,h.jsx)("img",{src:e.value[t]})}):(0,h.jsxs)("li",{children:[t,": ",(0,h.jsx)("b",{children:e.value[t]})]})},t):null)),(0,h.jsxs)(G,{onClick:()=>{var r;console.info(t[e.value.name]||(null===t||void 0===t||null===(r=t.uniforms[e.value.name])||void 0===r?void 0:r.value))},children:["console.info(",e.value.name,");"]})]})]})},e.name)))})},Z=({el:e})=>{S((e=>e.log));const t=S((e=>e.gl));return(0,h.jsx)(h.Fragment,{children:e.drawCounts.total>0&&(0,h.jsxs)(A,{style:{height:"auto",width:"auto",margin:"0 4px"},children:["Triangle"===e.drawCounts.type?(0,h.jsx)(u.vVm,{style:{top:"-1px"}}):(0,h.jsx)(u.X4t,{style:{top:"-1px"}}),e.drawCounts.total,(0,h.jsxs)("small",{children:[e.drawCounts.type,"s"]}),t&&(0,h.jsxs)(M,{style:{bottom:"-10px",width:"40px",fontWeight:"bold"},children:[e.visible&&!e.material.wireframe?(e=>{if(!t)return 0;const r=Math.round(e.drawCounts.total/(t.info.render.triangles+t.info.render.lines+t.info.render.points)*100*10)/10;return isFinite(r)&&r||0})(e):0,"%"]})]})})},ee=({el:e})=>{const[t,r]=(0,n.useState)(e.visible),[i,s]=(0,n.useState)(e.expand),[o,a]=(0,n.useState)(0),{meshes:l,program:c,material:d}=e;return(0,h.jsxs)(I,{children:[(0,h.jsxs)(L,{onClick:()=>{e.expand=!i,Object.keys(l).forEach((e=>{l[e].material.wireframe=!1})),s(!i)},children:[(0,h.jsx)(R,{style:{marginRight:"6px"},children:i?(0,h.jsx)("span",{children:(0,h.jsx)(u.AS7,{})}):(0,h.jsx)("span",{children:(0,h.jsx)(u.$lt,{})})}),c&&(0,h.jsxs)("span",{children:[(0,h.jsx)(D,{children:c.name}),(0,h.jsxs)(A,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[(0,h.jsx)(u.uQz,{style:{top:"-1px"}}),Object.keys(l).length,(0,h.jsx)("small",{children:Object.keys(l).length>1?"users":"user"})]}),o>0&&(0,h.jsxs)(A,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[(0,h.jsx)(u.XBm,{style:{top:"-1px"}}),o,(0,h.jsx)("small",{children:"tex"})]}),(0,h.jsx)(Z,{el:e}),"300 es"===d.glslVersion&&(0,h.jsxs)(A,{style:{height:"auto",width:"auto",margin:"0 4px"},children:[(0,h.jsx)(u.WCv,{style:{top:"-1px"}}),"300",(0,h.jsx)("small",{children:"es"}),(0,h.jsx)(M,{style:{bottom:"-10px",width:"40px"},children:"glsl"})]})]}),(0,h.jsx)(T,{onPointerEnter:()=>{Object.keys(l).forEach((e=>{l[e].material.wireframe=!0}))},onPointerLeave:()=>{Object.keys(l).forEach((e=>{l[e].material.wireframe=!1}))},onClick:n=>{n.stopPropagation(),Object.keys(l).forEach((n=>{const i=l[n],s=!t;i.visible=s,e.visible=s,r(s)}))},children:t?(0,h.jsx)(u.hsE,{}):(0,h.jsx)(u.L52,{})})]}),(0,h.jsxs)("div",{style:{maxHeight:i?"9999px":0,overflow:"hidden"},children:[(0,h.jsxs)(B,{children:[(0,h.jsx)(u.Eik,{})," Uniforms:"]}),(0,h.jsx)(K,{program:c,material:d,setTexNumber:a}),(0,h.jsxs)(B,{children:[(0,h.jsx)(u.FMB,{})," Geometries:"]}),(0,h.jsx)(F,{children:l&&Object.keys(l).map((e=>l[e]&&l[e].geometry&&(0,h.jsxs)(X,{children:[(0,h.jsxs)("span",{children:[l[e].geometry.type,": "]}),l[e].userData&&l[e].userData.drawCount&&(0,h.jsxs)("b",{children:[(0,h.jsxs)("div",{children:[l[e].userData.drawCount.count,(0,h.jsxs)("small",{children:[" ",l[e].userData.drawCount.type,"s"]})]}),(0,h.jsx)("br",{}),(0,h.jsxs)("div",{children:[Math.round(f(l[e].geometry)/1024*1e3)/1e3,"Kb",(0,h.jsx)("small",{children:" memory used"})]})]})]},e)))}),(0,h.jsxs)(G,{onClick:()=>{console.info(d)},children:["console.info(",d.type,")"]})]})]})},te=()=>{S((e=>e.triggerProgramsUpdate));const e=S((e=>e.programs));return(0,h.jsx)(_,{children:e&&Array.from(e.values()).map((e=>e&&e?(0,h.jsx)(ee,{el:e},e.material.uuid):null))})},re=e=>({fps:e?"100, 143, 255":"238,38,110",mem:e?"254, 254, 98":"66,226,46",gpu:e?"254,254,254":"253,151,31",custom:e?"86,180,233":"40,255,255"}),ne=({showGraph:e,colorBlind:t,customData:r,minimal:n})=>{const i=S((e=>e.gl));return i?(0,h.jsxs)(P,{children:[(0,h.jsxs)(A,{children:[(0,h.jsx)(u.YGl,{}),(0,h.jsx)(M,{style:e?{color:`rgb(${re(t).gpu.toString()})`}:{},children:"GPU"}),(0,h.jsx)(C,{children:"ms"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.yw7,{}),(0,h.jsx)(M,{style:e?{color:`rgb(${re(t).mem.toString()})`}:{},children:"Memory"}),(0,h.jsx)(C,{children:"mb"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.lFK,{}),(0,h.jsx)(M,{style:e?{color:`rgb(${re(t).fps})`}:{},children:"FPS"})]}),!n&&i&&(0,h.jsxs)(A,{children:[(0,h.jsx)(u.ux3,{}),(0,h.jsx)(M,{children:1===i.info.render.calls?"call":"calls"})]}),!n&&i&&(0,h.jsxs)(A,{children:[(0,h.jsx)(u.vVm,{}),(0,h.jsx)(M,{children:"Triangles"})]}),r&&(0,h.jsxs)(A,{children:[(0,h.jsx)(u.eJP,{}),(0,h.jsx)(M,{style:e?{color:`rgb(${re(t).custom})`}:{},children:r.name}),r.info&&(0,h.jsx)(C,{children:r.info})]})]}):null},ie=({showGraph:e,colorBlind:t,deepAnalyze:r,customData:n,matrixUpdate:i,openByDefault:s,minimal:o})=>(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(ne,{showGraph:e,colorBlind:t,customData:n,minimal:o}),!o&&(0,h.jsx)(ae,{matrixUpdate:i,openByDefault:s,deepAnalyze:r,showGraph:e})]}),se=({matrixUpdate:e})=>(0,h.jsxs)("div",{children:[(0,h.jsxs)(A,{children:[(0,h.jsx)(u.Ui3,{}),(0,h.jsx)(M,{children:"Geometries"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.XBm,{}),(0,h.jsx)(M,{children:"Textures"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.X4t,{}),(0,h.jsx)(M,{children:"shaders"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.V_R,{}),(0,h.jsx)(M,{children:"Lines"})]}),(0,h.jsxs)(A,{children:[(0,h.jsx)(u.ZNd,{}),(0,h.jsx)(M,{children:"Points"})]}),e&&(0,h.jsxs)(A,{children:[(0,h.jsx)(u.$Pd,{}),(0,h.jsx)(M,{children:"Matrices"})]})]}),oe=({tab:e,title:t,set:r})=>{const n=S((e=>e.tab));return(0,h.jsx)(R,{className:""+(n===e?" __perf_toggle_tab_active":""),onClick:()=>{r(!0),S.setState({tab:e})},children:(0,h.jsx)("span",{children:t})})},ae=({openByDefault:e,showGraph:t,deepAnalyze:r,matrixUpdate:i})=>{const[s,o]=n.useState(e);return(0,h.jsxs)("span",{children:[(0,h.jsx)(le,{show:s,showGraph:t,matrixUpdate:i}),e&&!r?null:(0,h.jsxs)(W,{className:"__perf_toggle",children:[r&&(0,h.jsx)(oe,{tab:"programs",title:"Programs",set:o}),r&&(0,h.jsx)(oe,{tab:"infos",title:"Infos",set:o}),(0,h.jsx)(R,{onClick:()=>{o(!s)},children:s?(0,h.jsxs)("span",{children:[(0,h.jsx)(u.AS7,{})," Minimize"]}):(0,h.jsxs)("span",{children:[(0,h.jsx)(u.$lt,{})," More"]})})]})]})},le=({show:e,showGraph:t,matrixUpdate:r})=>{const n=S((e=>e.tab));return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(se,{matrixUpdate:r}),e&&(0,h.jsx)("div",{children:(0,h.jsx)(U,{style:{marginTop:t?"38px":0},children:"programs"===n&&(0,h.jsx)(te,{})})})]})},ce=({showGraph:e,colorBlind:t,openByDefault:r,className:i,style:s,position:o,chart:a,deepAnalyze:l,antialias:c,customData:u,matrixUpdate:d,minimal:p})=>{const f=(0,n.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(E,{chart:a,deepAnalyze:l,matrixUpdate:d}),(0,h.jsx)(V,{transform:!1,children:(0,h.jsxs)(z,{className:(i?" ".concat(i):" ")+` ${o||""} ${p?"minimal":""}`,style:x({minHeight:p?"37px":e?"100px":"60px"},s),ref:f,children:[(0,h.jsx)(q,{perfContainerRef:f,colorBlind:t,chart:a,showGraph:e,antialias:c,customData:u,minimal:p,matrixUpdate:d}),(0,h.jsx)(ie,{colorBlind:t,showGraph:e,deepAnalyze:l,openByDefault:r,customData:u,matrixUpdate:d,minimal:p})]})})]})},ue=({headless:e=!1,colorBlind:t=!1,showGraph:r=!0,trackCPU:n=!1,deepAnalyze:i=!1,antialias:s=!0,openByDefault:o=!0,customData:a,matrixUpdate:l=!1,position:c="top-right",chart:u={length:30,hz:15},className:d,style:p,minimal:f=!1})=>e?(0,h.jsx)(E,{chart:u,deepAnalyze:i,matrixUpdate:l}):(0,h.jsx)(ce,{colorBlind:t,showGraph:r,trackCPU:n,openByDefault:o,className:d,style:p,position:c,antialias:s,chart:u,deepAnalyze:i,minimal:f,customData:a,matrixUpdate:l})},3466:function(e){e.exports=function(){var e=function(){function t(e){return i.appendChild(e.dom),e}function r(e){for(var t=0;t<i.children.length;t++)i.children[t].style.display=t===e?"block":"none";n=e}var n=0,i=document.createElement("div");i.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",i.addEventListener("click",(function(e){e.preventDefault(),r(++n%i.children.length)}),!1);var s=(performance||Date).now(),o=s,a=0,l=t(new e.Panel("FPS","#0ff","#002")),c=t(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var u=t(new e.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:i,addPanel:t,showPanel:r,begin:function(){s=(performance||Date).now()},end:function(){a++;var e=(performance||Date).now();if(c.update(e-s,200),e>o+1e3&&(l.update(1e3*a/(e-o),100),o=e,a=0,u)){var t=performance.memory;u.update(t.usedJSHeapSize/1048576,t.jsHeapSizeLimit/1048576)}return e},update:function(){s=this.end()},domElement:i,setMode:r}};return e.Panel=function(e,t,r){var n=1/0,i=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,d=3*o,h=15*o,p=74*o,f=30*o,m=document.createElement("canvas");m.width=a,m.height=l,m.style.cssText="width:80px;height:48px";var g=m.getContext("2d");return g.font="bold "+9*o+"px Helvetica,Arial,sans-serif",g.textBaseline="top",g.fillStyle=r,g.fillRect(0,0,a,l),g.fillStyle=t,g.fillText(e,c,u),g.fillRect(d,h,p,f),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(d,h,p,f),{dom:m,update:function(l,x){n=Math.min(n,l),i=Math.max(i,l),g.fillStyle=r,g.globalAlpha=1,g.fillRect(0,0,a,h),g.fillStyle=t,g.fillText(s(l)+" "+e+" ("+s(n)+"-"+s(i)+")",c,u),g.drawImage(m,d+o,h,p-o,f,d,h,p-o,f),g.fillRect(d+p-o,h,o,f),g.fillStyle=r,g.globalAlpha=.9,g.fillRect(d+p-o,h,o,s((1-l/x)*f))}}},e}()}}]);