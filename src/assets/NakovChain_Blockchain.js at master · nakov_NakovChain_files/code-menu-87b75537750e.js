"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["code-menu"],{4722(a,b,c){c(41246)},87551(a,b,c){c.d(b,{X:()=>e});var d=c(64463);function e(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}(0,d.N7)(".js-remove-unless-platform",function(a){!function(a){let b=(a.getAttribute("data-platforms")||"").split(","),c=e();return Boolean(c&&b.includes(c))}(a)&&a.remove()})},41246(a,b,c){c.d(b,{b:()=>k});var d=c(76006),e=c(87551),f=c(86702),g=function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};let{getItem:h,setItem:i}=(0,f.Z)("localStorage"),j="code-button-default-tab",k=class GetRepoElement extends HTMLElement{showDownloadMessage(a){let b=this.findPlatform(a);b&&this.showPlatform(b)}showCodespaces(a){let b=this.findPlatform(a);b&&(this.showPlatform(b),this.loadAndUpdateContent())}showCodespaceSelector(a){let b=this.findPlatform(a);b&&(this.showPlatform(b),this.codespaceSelector&&(this.codespaceSelector.hidden=!1))}showOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&(this.openOrCreateInCodespace.hidden=!1)}removeOpenOrCreateInCodespace(){this.openOrCreateInCodespace&&this.openOrCreateInCodespace.remove()}refreshList(){this.shouldRefreshList&&(this.shouldRefreshList=!1,this.loadAndUpdateContent())}trackDelete(){this.shouldRefreshList=!0}hideSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!0),this.codespaceList&&(this.codespaceList.hidden=!1)}showSpinner(){this.codespaceLoadingMenu&&(this.codespaceLoadingMenu.hidden=!1),this.codespaceList&&(this.codespaceList.hidden=!0)}onDetailsToggle(a){for(let b of(this.modal.hidden=!1,this.platforms))b.hidden=!0;let c=a.target;c&&c.open&&this.selectDefaultTab()}showPlatform(a){for(let b of(this.modal.hidden=!0,this.platforms))b.hidden=b.getAttribute("data-platform")!==a}findPlatform(a){return a.currentTarget.getAttribute("data-open-app")||(0,e.X)()}refreshOnError(){window.location.reload()}pollForVscode(a){this.showPlatform("vscode");let b=a.currentTarget.getAttribute("data-src");b&&this.vscodePoller.setAttribute("src",b)}backToCodespacesFromVscodePolling(){this.loadAndUpdateContent(),this.showPlatform("codespaces")}localTabSelected(){i(j,"local")}cloudTabSelected(){i(j,"cloud")}selectDefaultTab(){let a=h(j);if(!a)return;let b=this.querySelector(`button[data-tab="${a}"`);b&&b.click()}loadAndUpdateContent(){this.codespaceList.setAttribute("src",this.codespaceList.getAttribute("data-src"))}constructor(...a){super(...a),this.shouldRefreshList=!1}};g([d.fA],k.prototype,"modal",void 0),g([d.fA],k.prototype,"codespaceForm",void 0),g([d.fA],k.prototype,"codespaceLoadingMenu",void 0),g([d.fA],k.prototype,"codespaceList",void 0),g([d.fA],k.prototype,"codespaceSelector",void 0),g([d.fA],k.prototype,"openOrCreateInCodespace",void 0),g([d.fA],k.prototype,"vscodePoller",void 0),g([d.GO],k.prototype,"platforms",void 0),k=g([d.Ih],k)},86702(a,b,c){c.d(b,{Z:()=>e,"_":()=>f});var d=c(94109);class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}function e(a,b={throwQuotaErrorsOnSet:!1},c=d.i,e=a=>a,f=a=>a){let g;try{if(!c)throw Error();g=c[a]}catch{g=new NoOpStorage}let{throwQuotaErrorsOnSet:h}=b;return{getItem:function(a){try{let b=g.getItem(a);return b?e(b):null}catch(c){return null}},setItem:function(a,b){try{g.setItem(a,f(b))}catch(c){if(h&&c.message.toLowerCase().includes("quota"))throw c}},removeItem:function(a){try{g.removeItem(a)}catch(b){}}}}function f(a){return e(a,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},94109(a,b,c){c.d(b,{i:()=>e,n:()=>d});let d="undefined"==typeof document?void 0:document,e="undefined"==typeof window?void 0:window},76006(a,b,c){c.d(b,{Lj:()=>o,Ih:()=>v,nW:()=>D,fA:()=>t,GO:()=>u});let d=new WeakSet;function e(a){h(a),g(a)}let f=new WeakMap;function g(a=document){if(f.has(a))return f.get(a);let b=!1,c=new MutationObserver(a=>{for(let b of a)if("attributes"===b.type&&b.target instanceof Element)k(b.target);else if("childList"===b.type&&b.addedNodes.length)for(let c of b.addedNodes)c instanceof Element&&h(c)});c.observe(a,{childList:!0,subtree:!0,attributeFilter:["data-action"]});let d={get closed(){return b},unsubscribe(){b=!0,f.delete(a),c.disconnect()}};return f.set(a,d),d}function h(a){for(let b of a.querySelectorAll("[data-action]"))k(b);a instanceof Element&&a.hasAttribute("data-action")&&k(a)}function i(a){let b=a.currentTarget;for(let c of j(b))if(a.type===c.type){let e=b.closest(c.tag);d.has(e)&&"function"==typeof e[c.method]&&e[c.method](a);let f=b.getRootNode();if(f instanceof ShadowRoot&&d.has(f.host)&&f.host.matches(c.tag)){let g=f.host;"function"==typeof g[c.method]&&g[c.method](a)}}}function*j(a){for(let b of(a.getAttribute("data-action")||"").trim().split(/\s+/)){let c=b.lastIndexOf(":"),d=Math.max(0,b.lastIndexOf("#"))||b.length;yield{type:b.slice(0,c),tag:b.slice(c+1,d),method:b.slice(d+1)||"handleEvent"}}}function k(a){for(let b of j(a))a.addEventListener(b.type,i)}let l=a=>String("symbol"==typeof a?a.description:a).replace(/([A-Z]($|[a-z]))/g,"-$1").replace(/--/g,"-").replace(/^-|-$/,"").toLowerCase(),m=(a,b="property")=>{let c=l(a);if(!c.includes("-"))throw new DOMException(`${b}: ${String(a)} is not a valid ${b} name`,"SyntaxError");return c},n="attr";function o(a,b){s(a,n).add(b)}let p=new WeakSet;function q(a,b){if(p.has(a))return;p.add(a);let c=Object.getPrototypeOf(a),d=c?.constructor?.attrPrefix??"data-";for(let e of(b||(b=s(c,n)),b)){let f=a[e],g=m(`${d}${e}`),h={configurable:!0,get(){return this.getAttribute(g)||""},set(a){this.setAttribute(g,a||"")}};"number"==typeof f?h={configurable:!0,get(){return Number(this.getAttribute(g)||0)},set(a){this.setAttribute(g,a)}}:"boolean"==typeof f&&(h={configurable:!0,get(){return this.hasAttribute(g)},set(a){this.toggleAttribute(g,a)}}),Object.defineProperty(a,e,h),e in a&&!a.hasAttribute(g)&&h.set.call(a,f)}}let r=Symbol.for("catalyst");class CatalystDelegate{constructor(a){let b=this,c=a.prototype.connectedCallback;a.prototype.connectedCallback=function(){b.connectedCallback(this,c)};let d=a.prototype.disconnectedCallback;a.prototype.disconnectedCallback=function(){b.disconnectedCallback(this,d)};let e=a.prototype.attributeChangedCallback;a.prototype.attributeChangedCallback=function(a,c,d){b.attributeChangedCallback(this,a,c,d,e)};let f=a.observedAttributes||[];Object.defineProperty(a,"observedAttributes",{configurable:!0,get(){return b.observedAttributes(this,f)},set(a){f=a}}),function(a){let b=a.observedAttributes||[],c=a.attrPrefix??"data-",d=a=>m(`${c}${a}`);Object.defineProperty(a,"observedAttributes",{configurable:!0,get:()=>[...s(a.prototype,n)].map(d).concat(b),set(a){b=a}})}(a),function(a){let b=l(a.name).replace(/-element$/,"");try{window.customElements.define(b,a),window[a.name]=customElements.get(b)}catch(c){if(!(c instanceof DOMException&&"NotSupportedError"===c.name))throw c}}(a)}observedAttributes(a,b){return b}connectedCallback(a,b){var c;a.toggleAttribute("data-catalyst",!0),customElements.upgrade(a),function(a){for(let b of a.querySelectorAll("template[data-shadowroot]"))b.parentElement===a&&a.attachShadow({mode:"closed"===b.getAttribute("data-shadowroot")?"closed":"open"}).append(b.content.cloneNode(!0))}(a),q(a),c=a,d.add(c),c.shadowRoot&&e(c.shadowRoot),h(c),g(c.ownerDocument),b?.call(a),a.shadowRoot&&e(a.shadowRoot)}disconnectedCallback(a,b){b?.call(a)}attributeChangedCallback(a,b,c,d,e){q(a),"data-catalyst"!==b&&e&&e.call(a,b,c,d)}}function s(a,b){if(!Object.prototype.hasOwnProperty.call(a,r)){let c=a[r],d=a[r]=new Map;if(c)for(let[e,f]of c)d.set(e,new Set(f))}let g=a[r];return g.has(b)||g.set(b,new Set),g.get(b)}function t(a,b){s(a,"target").add(b),Object.defineProperty(a,b,{configurable:!0,get(){return function(a,b){let c=a.tagName.toLowerCase();if(a.shadowRoot){for(let d of a.shadowRoot.querySelectorAll(`[data-target~="${c}.${b}"]`))if(!d.closest(c))return d}for(let e of a.querySelectorAll(`[data-target~="${c}.${b}"]`))if(e.closest(c)===a)return e}(this,b)}})}function u(a,b){s(a,"targets").add(b),Object.defineProperty(a,b,{configurable:!0,get(){return function(a,b){let c=a.tagName.toLowerCase(),d=[];if(a.shadowRoot)for(let e of a.shadowRoot.querySelectorAll(`[data-targets~="${c}.${b}"]`))e.closest(c)||d.push(e);for(let f of a.querySelectorAll(`[data-targets~="${c}.${b}"]`))f.closest(c)===a&&d.push(f);return d}(this,b)}})}function v(a){new CatalystDelegate(a)}let w=new Map,x=new Promise(a=>{"loading"!==document.readyState?a():document.addEventListener("readystatechange",()=>a(),{once:!0})}),y=new Promise(a=>{let b=new AbortController;b.signal.addEventListener("abort",()=>a());let c={once:!0,passive:!0,signal:b.signal},d=()=>b.abort();document.addEventListener("mousedown",d,c),document.addEventListener("touchstart",d,c),document.addEventListener("keydown",d,c),document.addEventListener("pointerdown",d,c)}),z={ready:()=>x,firstInteraction:()=>y,visible:a=>new Promise(b=>{let c=new IntersectionObserver(a=>{for(let d of a)if(d.isIntersecting){b(),c.disconnect();return}},{rootMargin:"0px 0px 256px 0px",threshold:.01});for(let d of document.querySelectorAll(a))c.observe(d)})},A=new WeakMap;function B(a){cancelAnimationFrame(A.get(a)||0),A.set(a,requestAnimationFrame(()=>{for(let b of w.keys()){let c=a.matches(b)?a:a.querySelector(b);if(customElements.get(b)||c){let d=c?.getAttribute("data-load-on")||"ready",e=d in z?z[d]:z.ready;for(let f of w.get(b)||[])e(b).then(f);w.delete(b),A.delete(a)}}}))}let C;function D(a,b){w.has(a)||w.set(a,new Set),w.get(a).add(b),B(document.body),C||(C=new MutationObserver(a=>{if(w.size)for(let b of a)for(let c of b.addedNodes)c instanceof Element&&B(c)})).observe(document,{subtree:!0,childList:!0})}}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js"],()=>b(4722));var c=a.O()}])
//# sourceMappingURL=code-menu-128270149ff1.js.map