(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3837:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(2221)}])},485:function(e,t,r){"use strict";r.d(t,{FW:function(){return a},kn:function(){return l}});var n=r(5893),o=r(7294);let l=(0,o.createContext)({catalogueData:[],defaultAlbumData:[],selectedAlbumData:[],setSelectedAlbumData:()=>{}}),a=e=>{let{children:t}=e,[r,a]=(0,o.useState)(),[i,c]=(0,o.useState)(),[u,s]=(0,o.useState)();(0,o.useEffect)(()=>{f()},[]);let f=async()=>{try{let e=await fetch("https://matthewviamusic.com/api/tracks"),t=await e.json();a(t),c(null==t?void 0:t.filter(e=>"A Government in Heaven"==e.albumName))}catch(e){console.log("ERROR>>>>>:",e)}if(!r)return{notFound:!0}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(l.Provider,{value:{catalogueData:r,defaultAlbumData:i,selectedAlbumData:u,setSelectedAlbumData:s},children:t})})}},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,o=r(7273).Z,l=n(r(7294)),a=r(1003),i=r(7795),c=r(4465),u=r(2692),s=r(8245),f=r(9246),d=r(227),C=r(3468);let p=new Set;function h(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(p.has(l))return;p.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function v(e){return"string"==typeof e?e:i.formatUrl(e)}let g=l.default.forwardRef(function(e,t){let r,n;let{href:i,as:p,children:g,prefetch:m,passHref:y,replace:b,shallow:x,scroll:L,locale:j,onClick:w,onMouseEnter:M,onTouchStart:_,legacyBehavior:k=!1}=e,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=g,k&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));let E=!1!==m,H=l.default.useContext(u.RouterContext),N=l.default.useContext(s.AppRouterContext),V=null!=H?H:N,P=!H,{href:R,as:S}=l.default.useMemo(()=>{if(!H){let e=v(i);return{href:e,as:p?v(p):e}}let[e,t]=a.resolveHref(H,i,!0);return{href:e,as:p?a.resolveHref(H,p):t||e}},[H,i,p]),z=l.default.useRef(R),Z=l.default.useRef(S);k&&(n=l.default.Children.only(r));let D=k?n&&"object"==typeof n&&n.ref:t,[I,T,A]=f.useIntersection({rootMargin:"200px"}),B=l.default.useCallback(e=>{(Z.current!==S||z.current!==R)&&(A(),Z.current=S,z.current=R),I(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[S,D,R,A,I]);l.default.useEffect(()=>{V&&T&&E&&h(V,R,S,{locale:j})},[S,R,T,j,E,null==H?void 0:H.locale,V]);let K={ref:B,onClick(e){k||"function"!=typeof w||w(e),k&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),V&&!e.defaultPrevented&&function(e,t,r,n,o,i,c,u,s,f){let{nodeName:d}=e.currentTarget,C="A"===d.toUpperCase();if(C&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:c}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(p):p()}(e,V,R,S,b,x,L,j,P,E)},onMouseEnter(e){k||"function"!=typeof M||M(e),k&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),V&&(E||!P)&&h(V,R,S,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){k||"function"!=typeof _||_(e),k&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),V&&(E||!P)&&h(V,R,S,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!k||y||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==H?void 0:H.locale,t=(null==H?void 0:H.isLocaleDomain)&&d.getDomainLocale(S,e,null==H?void 0:H.locales,null==H?void 0:H.domainLocales);K.href=t||C.addBasePath(c.addLocale(S,e,null==H?void 0:H.defaultLocale))}return k?l.default.cloneElement(n,K):l.default.createElement("a",Object.assign({},O,K),r)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:c}=e,u=c||!l,[s,f]=n.useState(!1),d=n.useRef(null),C=n.useCallback(e=>{d.current=e},[]);n.useEffect(()=>{if(l){if(u||s)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=i.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},i.push(r),a.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),a.delete(n);let e=i.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!s){let e=o.requestIdleCallback(()=>f(!0));return()=>o.cancelIdleCallback(e)}},[u,r,t,s,d.current]);let p=n.useCallback(()=>{f(!1)},[]);return[C,s,p]};var n=r(7294),o=r(4686);let l="function"==typeof IntersectionObserver,a=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2221:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(5893),o=r(485),l=r(9008),a=r.n(l),i=r(1664),c=r.n(i),u=r(8357);function s(e){return(0,u.w_)({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"}}]})(e)}function f(e){return(0,u.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}}]})(e)}function d(e){return(0,u.w_)({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"}}]})(e)}var C=r(5155),p=function(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"fixed w-20 h-screen pt-4 bg-gray-800 border-r-[1px] flex flex-col justify-between",children:(0,n.jsxs)("div",{className:"flex flex-col items-center",children:[(0,n.jsx)(c(),{href:"https://matthewviamusic.com",children:(0,n.jsx)("div",{className:"bg-gray-100 p-3 rounded-lg inline-block",children:(0,n.jsx)(f,{size:20})})}),(0,n.jsx)("span",{className:"border-b-[1px] border-gray-200 w-full p-2"}),(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("div",{className:"bg-gray-100 hover:bg-gray-200 cursor-pointer mt-5 p-3 rounded-lg inline-block",children:(0,n.jsx)(s,{size:20})})}),(0,n.jsx)(c(),{href:"/trackList",children:(0,n.jsx)("div",{className:"bg-gray-100 hover:bg-gray-200 cursor-pointer mt-4 p-3 rounded-lg inline-block",children:(0,n.jsx)(C.GKD,{size:20})})}),(0,n.jsx)(c(),{href:"/graphs",children:(0,n.jsx)("div",{className:"bg-gray-100 hover:bg-gray-200 cursor-pointer mt-4 p-3 rounded-lg inline-block",children:(0,n.jsx)(d,{size:20})})})]})}),(0,n.jsx)("main",{className:"ml-20 w-full",children:t})]})};function h(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"shortcut icon",href:"https://easycss.github.io/favicon/favicon.png",type:"image/x-icon"}),(0,n.jsx)("title",{children:"Matthew Via Music - Dashboard"}),(0,n.jsx)("meta",{name:"description",content:"API access to the music catalogue of recording artist Matthew Via Music."}),(0,n.jsx)("meta",{name:"author",content:"Matthew Via Music"})]}),(0,n.jsx)(o.FW,{children:(0,n.jsx)(p,{children:(0,n.jsx)(t,{...r})})})]})}r(4744)},4744:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},5155:function(e,t,r){"use strict";r.d(t,{GKD:function(){return o},dgi:function(){return l}});var n=r(8357);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M1,17.9979131 C1,16.8944962 1.88670635,16 2.99810135,16 L9,16 L9,20.0020869 C9,21.1055038 8.11329365,22 7.00189865,22 L2.99810135,22 C1.89458045,22 1,21.1017394 1,20.0020869 L1,17.9979131 Z M15,17.9979131 C15,16.8944962 15.8867064,16 16.9981014,16 L23,16 L23,20.0020869 C23,21.1055038 22.1132936,22 21.0018986,22 L16.9981014,22 C15.8945804,22 15,21.1017394 15,20.0020869 L15,17.9979131 Z M9,16 L9,2 L23,2 L23,15.5 M9,6 L23,6"}}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M19.0983701,10.6382791 C15.230178,8.34118115 8.85003755,8.12986439 5.15729493,9.25058527 C4.56433588,9.43062856 3.93727638,9.09580812 3.75758647,8.50284907 C3.57789655,7.90953664 3.91236362,7.28283051 4.50585273,7.10261054 C8.74455585,5.81598127 15.7909802,6.06440214 20.2440037,8.70780512 C20.7774195,9.02442687 20.9525156,9.71332656 20.6362472,10.2456822 C20.3198021,10.779098 19.6305491,10.9549008 19.0983701,10.6382791 M18.971686,14.0407262 C18.7004726,14.4810283 18.1246521,14.6190203 17.6848801,14.3486903 C14.4600027,12.3664473 9.54264764,11.792217 5.72728477,12.9503953 C5.23256328,13.0998719 4.70992535,12.8208843 4.55974204,12.3270462 C4.41061884,11.8323247 4.68978312,11.3107469 5.18362118,11.1602103 C9.5419409,9.83771368 14.9600247,10.4782013 18.6638986,12.7544503 C19.1036707,13.0253103 19.242016,13.6013075 18.971686,14.0407262 M17.5034233,17.308185 C17.2876894,17.6617342 16.827245,17.7725165 16.4749326,17.5571359 C13.6571403,15.8347984 10.1101639,15.4459119 5.93312425,16.4000177 C5.53063298,16.4922479 5.12937851,16.2399399 5.03767834,15.8376253 C4.94544812,15.4351341 5.19669597,15.0338796 5.60024736,14.9420027 C10.1712973,13.8970803 14.0923186,14.3467468 17.2551791,16.2796943 C17.6078449,16.4948982 17.7189805,16.9556959 17.5034233,17.308185 M12,0 C5.37267547,0 0,5.37249879 0,11.9998233 C0,18.6278546 5.37267547,24 12,24 C18.6275012,24 24,18.6278546 24,11.9998233 C24,5.37249879 18.6275012,0 12,0"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function c(e){return function(t){return n.createElement(u,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var r,o=e.attr,l=e.size,c=e.title,u=i(e,["attr","size","title"]),s=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(3837),t(880)}),_N_E=e.O()}]);