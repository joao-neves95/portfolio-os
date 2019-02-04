/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// Imports for MergerJS.
//
// @import './constants'
// ignore 'https://cdnjs.cloudflare.com/ajax/libs/ajv/6.5.5/ajv.min.js'
// %import<<GH 'js-cookie/js-cookie/master/src/js.cookie.js'
// $import 'sweetalert2/dist/sweetalert2.all.min.js'
// @import './externalLibs'
// $import 'vanillatree/vanillatree.min.js'
// @import<<DIR '../../../../common/enums'
// @import<<DIR './enums/'
// @import './domUtils'
// @import './utils'
// @import '../../../../common/commonUtils'
// @import '../../../../common/models/fsItemModelBase'
// @import '../../../../common/models/fileModel'
// @import '../../../../common/models/directoryModel'
// @import '../../../../common/models/systemDirectoryModel'
// @import<<DIR './models/'
// @import './systemLibs/notifications'
// @import './systemLibs/httpClient'
// @import './systemLibs/authentication'
// @import './systemLibs/gridSystem/gridSystemTemplates'
// @import './systemLibs/gridSystem/gridSystem'
// @import './systemLibs/dragAndDrop.js'
// @import './systemLibs/windowResizer.js'
// @import './modules/fileSystem/fileSystem'
// @import './modules/taskbarManager/taskbarIcon'
// @import './modules/taskbarManager/taskbarManager'
// @import './modules/windowManager/window'
// @import './modules/windowManager/windowManager'
// @import './userApps/userAppsManager'
// @import './systemApps/systemAppsManager'
// @import './systemApps/trash/trash'
// @import './systemApps/trash/trashTemplates'
// @import './systemApps/terminal/terminalTemplates'
// @import './systemApps/terminal/terminal'
// @import './systemApps/appStore/addNewApp/addNewApp.templates'
// @import './systemApps/appStore/addNewApp/addNewApp.model'
// @import './systemApps/appStore/addNewApp/addNewApp.view'
// @import './systemApps/appStore/addNewApp/addNewApp.controller'
// @import './systemApps/appStore/appStore.templates'
// @import './systemApps/appStore/appStore.model'
// @import './systemApps/appStore/appStore.view'
// @import './systemApps/appStore/appStore.controller'
// @import './systemApps/appStore/appStore'
// @import './systemApps/profiles/myProfile/myProfile.templates'
// @import './systemApps/profiles/myProfile/myProfile.model'
// @import './systemApps/profiles/myProfile/myProfile.view'
// @import './systemApps/profiles/myProfile/myProfile.controller'
// @import './systemApps/profiles/exploreProfiles/exploreProfiles.templates'
// @import './systemApps/profiles/exploreProfiles/exploreProfiles.model'
// @import './systemApps/profiles/exploreProfiles/exploreProfiles.view'
// @import './systemApps/profiles/exploreProfiles/exploreProfiles.controller'
// @import './systemApps/profiles/userProfiles/userProfiles.templates'
// @import './systemApps/profiles/userProfiles/userProfiles.model'
// @import './systemApps/profiles/userProfiles/userProfiles.view'
// @import './systemApps/profiles/userProfiles/userProfiles.controller'
// @import './systemApps/profiles/profiles.templates'
// @import './systemApps/profiles/profiles.model'
// @import './systemApps/profiles/profiles.view'
// @import './systemApps/profiles/profiles'
// @import './systemApps/theCodeChan/theCodeChan.templates'
// @import './systemApps/theCodeChan/theCodeChan.model'
// @import './systemApps/theCodeChan/theCodeChan.view'
// @import './systemApps/theCodeChan/theCodeChan'
// @import './systemApps/explorer/explorer.templates'
// @import './systemApps/explorer/explorer.model'
// @import './systemApps/explorer/explorer.view'
// @import './systemApps/explorer/explorer.controller'
// @import './systemApps/explorer/explorer'
// @import './userApps/shivaylCV'
// @import './modules/processManager/process'
// @import './modules/processManager/processManager'
// @import './modules/startMenuManager/startMenuApp'
// @import './modules/startMenuManager/startMenuManager'
// @import './modules/desktopManager/desktopTemplates'
// @import './modules/desktopManager/desktopIcon'
// @import './modules/desktopManager/desktopManager'
// @import './modules/contextMenu/contextMenu.templates'
// @import './modules/contextMenu/contextMenu.controller'
// @import './modules/globalEvents'
// @import './main'
//
'use strict';

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

 const SERVER_ROOT_PATH = 'http://localhost:55555/';
//const SERVER_ROOT_PATH = 'https://shivayl.com/';
const API_ROOT_PATH = `${SERVER_ROOT_PATH}portfolio-os/api/`;
const IMG_PATH = `${SERVER_ROOT_PATH}img/`;
const DEFAULT_APP_ICON = `${IMG_PATH}default-taskbar-icon-white.svg`;
const HIDE_REFERER_REDIRECT = `${SERVER_ROOT_PATH}goto?url=`;
const HIDE_REFERER = 'https://1ll.us/bL/';
const AUTH_TOKEN_ID = 'JWT';
const PROCESS_ID_LENGTH = 5;
const START_MENU_ANIM_DELAY = 1;

const ERROR_MSG_INSTALL_APP = 'There was an error while installing the app.';

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Sweetalert2=t()}(this,function(){"use strict";function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t,n){return(l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&u(i,n.prototype),i}).apply(null,arguments)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}var t="SweetAlert2:",f=function(e){return Array.prototype.slice.call(e)},R=function(e){console.warn("".concat(t," ").concat(e))},I=function(e){console.error("".concat(t," ").concat(e))},n=[],m=function(e){-1===n.indexOf(e)&&(n.push(e),R(e))},H=function(e){return"function"==typeof e?e():e},D=function(e){return e&&Promise.resolve(e)===e},e=Object.freeze({cancel:"cancel",backdrop:"overlay",close:"close",esc:"esc",timer:"timer"}),h=function(e){var t={};for(var n in e)t[e[n]]="swal2-"+e[n];return t},_=h(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","toast","toast-shown","toast-column","fade","show","hide","noanimation","close","title","header","content","actions","confirm","cancel","footer","icon","icon-text","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","validation-message","progresssteps","activeprogressstep","progresscircle","progressline","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl"]),g=h(["success","warning","info","question","error"]),b={previousBodyPadding:null},v=function(e,t){return e.classList.contains(t)},N=function(e){if(e.focus(),"file"!==e.type){var t=e.value;e.value="",e.value=t}},y=function(e,t,n){e&&t&&("string"==typeof t&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(function(t){e.forEach?e.forEach(function(e){n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)}))},z=function(e,t){y(e,t,!0)},W=function(e,t){y(e,t,!1)},U=function(e,t){for(var n=0;n<e.childNodes.length;n++)if(v(e.childNodes[n],t))return e.childNodes[n]},K=function(e){e.style.opacity="",e.style.display=e.id===_.content?"block":"flex"},F=function(e){e.style.opacity="",e.style.display="none"},Z=function(e){return e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w=function(){return document.body.querySelector("."+_.container)},C=function(e){var t=w();return t?t.querySelector("."+e):null},k=function(){return C(_.popup)},x=function(){var e=k();return f(e.querySelectorAll("."+_.icon))},A=function(){return C(_.title)},B=function(){return C(_.content)},S=function(){return C(_.image)},P=function(){return C(_.progresssteps)},E=function(){return C(_["validation-message"])},L=function(){return C(_.confirm)},O=function(){return C(_.cancel)},Q=function(){return C(_.actions)},Y=function(){return C(_.footer)},$=function(){return C(_.close)},J=function(){var e=f(k().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(e,t){return e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0}),t=f(k().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function(e){return"-1"!==e.getAttribute("tabindex")});return function(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}(e.concat(t)).filter(function(e){return Z(e)})},T=function(){return!M()&&!document.body.classList.contains(_["no-backdrop"])},M=function(){return document.body.classList.contains(_["toast-shown"])},j=function(){return"undefined"==typeof window||"undefined"==typeof document},V='\n <div aria-labelledby="'.concat(_.title,'" aria-describedby="').concat(_.content,'" class="').concat(_.popup,'" tabindex="-1">\n   <div class="').concat(_.header,'">\n     <ul class="').concat(_.progresssteps,'"></ul>\n     <div class="').concat(_.icon," ").concat(g.error,'">\n       <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n     </div>\n     <div class="').concat(_.icon," ").concat(g.question,'">\n       <span class="').concat(_["icon-text"],'">?</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.warning,'">\n       <span class="').concat(_["icon-text"],'">!</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.info,'">\n       <span class="').concat(_["icon-text"],'">i</span>\n      </div>\n     <div class="').concat(_.icon," ").concat(g.success,'">\n       <div class="swal2-success-circular-line-left"></div>\n       <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n       <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n       <div class="swal2-success-circular-line-right"></div>\n     </div>\n     <img class="').concat(_.image,'" />\n     <h2 class="').concat(_.title,'" id="').concat(_.title,'"></h2>\n     <button type="button" class="').concat(_.close,'">×</button>\n   </div>\n   <div class="').concat(_.content,'">\n     <div id="').concat(_.content,'"></div>\n     <input class="').concat(_.input,'" />\n     <input type="file" class="').concat(_.file,'" />\n     <div class="').concat(_.range,'">\n       <input type="range" />\n       <output></output>\n     </div>\n     <select class="').concat(_.select,'"></select>\n     <div class="').concat(_.radio,'"></div>\n     <label for="').concat(_.checkbox,'" class="').concat(_.checkbox,'">\n       <input type="checkbox" />\n       <span class="').concat(_.label,'"></span>\n     </label>\n     <textarea class="').concat(_.textarea,'"></textarea>\n     <div class="').concat(_["validation-message"],'" id="').concat(_["validation-message"],'"></div>\n   </div>\n   <div class="').concat(_.actions,'">\n     <button type="button" class="').concat(_.confirm,'">OK</button>\n     <button type="button" class="').concat(_.cancel,'">Cancel</button>\n   </div>\n   <div class="').concat(_.footer,'">\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),X=function(e){var t=w();if(t&&(t.parentNode.removeChild(t),W([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]])),!j()){var n=document.createElement("div");n.className=_.container,n.innerHTML=V;var o="string"==typeof e.target?document.querySelector(e.target):e.target;o.appendChild(n);var i,r=k(),a=B(),s=U(a,_.input),c=U(a,_.file),u=a.querySelector(".".concat(_.range," input")),l=a.querySelector(".".concat(_.range," output")),d=U(a,_.select),p=a.querySelector(".".concat(_.checkbox," input")),f=U(a,_.textarea);r.setAttribute("role",e.toast?"alert":"dialog"),r.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||r.setAttribute("aria-modal","true"),"rtl"===window.getComputedStyle(o).direction&&z(w(),_.rtl);var m=function(e){De.isVisible()&&i!==e.target.value&&De.resetValidationMessage(),i=e.target.value};return s.oninput=m,c.onchange=m,d.onchange=m,p.onchange=m,f.oninput=m,u.oninput=function(e){m(e),l.value=u.value},u.onchange=function(e){m(e),u.nextSibling.value=u.value},r}I("SweetAlert2 requires document to initialize")},G=function(e,t){if(!e)return F(t);if(e instanceof HTMLElement)t.appendChild(e);else if("object"===q(e))if(t.innerHTML="",0 in e)for(var n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0));else e&&(t.innerHTML=e);K(t)},ee=function(){if(j())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n])return t[n];return!1}(),te=function(e){var t=Q(),n=L(),o=O();if(e.showConfirmButton||e.showCancelButton?K(t):F(t),e.showCancelButton?o.style.display="inline-block":F(o),e.showConfirmButton?n.style.removeProperty("display"):F(n),n.innerHTML=e.confirmButtonText,o.innerHTML=e.cancelButtonText,n.setAttribute("aria-label",e.confirmButtonAriaLabel),o.setAttribute("aria-label",e.cancelButtonAriaLabel),n.className=_.confirm,z(n,e.confirmButtonClass),o.className=_.cancel,z(o,e.cancelButtonClass),e.buttonsStyling){z([n,o],_.styled),e.confirmButtonColor&&(n.style.backgroundColor=e.confirmButtonColor),e.cancelButtonColor&&(o.style.backgroundColor=e.cancelButtonColor);var i=window.getComputedStyle(n).getPropertyValue("background-color");n.style.borderLeftColor=i,n.style.borderRightColor=i}else W([n,o],_.styled),n.style.backgroundColor=n.style.borderLeftColor=n.style.borderRightColor="",o.style.backgroundColor=o.style.borderLeftColor=o.style.borderRightColor=""},ne=function(e){var t=B().querySelector("#"+_.content);e.html?G(e.html,t):e.text?(t.textContent=e.text,K(t)):F(t)},oe=function(e){for(var t=x(),n=0;n<t.length;n++)F(t[n]);if(e.type)if(-1!==Object.keys(g).indexOf(e.type)){var o=De.getPopup().querySelector(".".concat(_.icon,".").concat(g[e.type]));K(o),e.animation&&z(o,"swal2-animate-".concat(e.type,"-icon"))}else I('Unknown type! Expected "success", "error", "warning", "info" or "question", got "'.concat(e.type,'"'))},ie=function(e){var t=S();e.imageUrl?(t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),K(t),e.imageWidth?t.setAttribute("width",e.imageWidth):t.removeAttribute("width"),e.imageHeight?t.setAttribute("height",e.imageHeight):t.removeAttribute("height"),t.className=_.image,e.imageClass&&z(t,e.imageClass)):F(t)},re=function(i){var r=P(),a=parseInt(null===i.currentProgressStep?De.getQueueStep():i.currentProgressStep,10);i.progressSteps&&i.progressSteps.length?(K(r),r.innerHTML="",a>=i.progressSteps.length&&R("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),i.progressSteps.forEach(function(e,t){var n=document.createElement("li");if(z(n,_.progresscircle),n.innerHTML=e,t===a&&z(n,_.activeprogressstep),r.appendChild(n),t!==i.progressSteps.length-1){var o=document.createElement("li");z(o,_.progressline),i.progressStepsDistance&&(o.style.width=i.progressStepsDistance),r.appendChild(o)}})):F(r)},ae=function(e){var t=A();e.titleText?t.innerText=e.titleText:e.title&&("string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),G(e.title,t))},se=function(){null===b.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(b.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=b.previousBodyPadding+function(){if("ontouchstart"in window||navigator.msMaxTouchPoints)return 0;var e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}()+"px")},ce=function(){return!!window.MSInputMethodContext&&!!document.documentMode},ue=function(){var e=w(),t=k();e.style.removeProperty("align-items"),t.offsetTop<0&&(e.style.alignItems="flex-start")},le={},de=function(e,t){var n=w(),o=k();if(o){null!==e&&"function"==typeof e&&e(o),W(o,_.show),z(o,_.hide);var i=function(){M()?pe(t):(new Promise(function(e){var t=window.scrollX,n=window.scrollY;le.restoreFocusTimeout=setTimeout(function(){le.previousActiveElement&&le.previousActiveElement.focus?(le.previousActiveElement.focus(),le.previousActiveElement=null):document.body&&document.body.focus(),e()},100),void 0!==t&&void 0!==n&&window.scrollTo(t,n)}).then(function(){return pe(t)}),le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),n.parentNode&&n.parentNode.removeChild(n),W([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"],_["toast-column"]]),T()&&(null!==b.previousBodyPadding&&(document.body.style.paddingRight=b.previousBodyPadding,b.previousBodyPadding=null),function(){if(v(document.body,_.iosfix)){var e=parseInt(document.body.style.top,10);W(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=-1*e}}(),"undefined"!=typeof window&&ce()&&window.removeEventListener("resize",ue),f(document.body.children).forEach(function(e){e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")}))};ee&&!v(o,_.noanimation)?o.addEventListener(ee,function e(){o.removeEventListener(ee,e),v(o,_.hide)&&i()}):i()}},pe=function(e){null!==e&&"function"==typeof e&&setTimeout(function(){e()})};function fe(e){var t=function e(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];if(!(this instanceof e))return l(e,n);Object.getPrototypeOf(e).apply(this,n)};return t.prototype=r(Object.create(e.prototype),{constructor:t}),"function"==typeof Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e,t}var me={title:"",titleText:"",text:"",html:"",footer:"",type:null,toast:!1,customClass:"",customContainerClass:"",target:"body",backdrop:!0,animation:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showCancelButton:!1,preConfirm:null,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:null,confirmButtonClass:null,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:null,cancelButtonClass:null,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusCancel:!1,showCloseButton:!1,closeButtonAriaLabel:"Close this dialog",showLoaderOnConfirm:!1,imageUrl:null,imageWidth:null,imageHeight:null,imageAlt:"",imageClass:null,timer:null,width:null,padding:null,background:null,input:null,inputPlaceholder:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputClass:null,inputAttributes:{},inputValidator:null,validationMessage:null,grow:!1,position:"center",progressSteps:[],currentProgressStep:null,progressStepsDistance:null,onBeforeOpen:null,onAfterClose:null,onOpen:null,onClose:null,useRejections:!1,expectRejections:!1},he=["useRejections","expectRejections","extraParams"],ge=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusCancel","heightAuto","keydownListenerCapture"],be=function(e){return me.hasOwnProperty(e)||"extraParams"===e},ve=function(e){return-1!==he.indexOf(e)},ye=function(e){for(var t in e)be(t)||R('Unknown parameter "'.concat(t,'"')),e.toast&&-1!==ge.indexOf(t)&&R('The parameter "'.concat(t,'" is incompatible with toasts')),ve(t)&&m('The parameter "'.concat(t,'" is deprecated and will be removed in the next major release.'))},we='"setDefaults" & "resetDefaults" methods are deprecated in favor of "mixin" method and will be removed in the next major release. For new projects, use "mixin". For past projects already using "setDefaults", support will be provided through an additional package.',Ce={};var ke=[],xe=function(){var e=k();e||De(""),e=k();var t=Q(),n=L(),o=O();K(t),K(n),z([e,t],_.loading),n.disabled=!0,o.disabled=!0,e.setAttribute("data-loading",!0),e.setAttribute("aria-busy",!0),e.focus()},Ae=Object.freeze({isValidParameter:be,isDeprecatedParameter:ve,argsToParams:function(n){var o={};switch(q(n[0])){case"object":r(o,n[0]);break;default:["title","html","type"].forEach(function(e,t){switch(q(n[t])){case"string":o[e]=n[t];break;case"undefined":break;default:I("Unexpected type of ".concat(e,'! Expected "string", got ').concat(q(n[t])))}})}return o},adaptInputValidator:function(n){return function(e,t){return n.call(this,e,t).then(function(){},function(e){return e})}},close:de,closePopup:de,closeModal:de,closeToast:de,isVisible:function(){return!!k()},clickConfirm:function(){return L().click()},clickCancel:function(){return O().click()},getContainer:w,getPopup:k,getTitle:A,getContent:B,getImage:S,getIcons:x,getCloseButton:$,getButtonsWrapper:function(){return m("swal.getButtonsWrapper() is deprecated and will be removed in the next major release, use swal.getActions() instead"),C(_.actions)},getActions:Q,getConfirmButton:L,getCancelButton:O,getFooter:Y,getFocusableElements:J,getValidationMessage:E,isLoading:function(){return k().hasAttribute("data-loading")},fire:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l(this,t)},mixin:function(n){return fe(function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,e),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},n,e))}}]),t}(this))},queue:function(e){var r=this;ke=e;var a=function(){ke=[],document.body.removeAttribute("data-swal2-queue-step")},s=[];return new Promise(function(i){!function t(n,o){n<ke.length?(document.body.setAttribute("data-swal2-queue-step",n),r(ke[n]).then(function(e){void 0!==e.value?(s.push(e.value),t(n+1,o)):(a(),i({dismiss:e.dismiss}))})):(a(),i({value:s}))}(0)})},getQueueStep:function(){return document.body.getAttribute("data-swal2-queue-step")},insertQueueStep:function(e,t){return t&&t<ke.length?ke.splice(t,0,e):ke.push(e)},deleteQueueStep:function(e){void 0!==ke[e]&&ke.splice(e,1)},showLoading:xe,enableLoading:xe,getTimerLeft:function(){return le.timeout&&le.timeout.getTimerLeft()},stopTimer:function(){return le.timeout&&le.timeout.stop()},resumeTimer:function(){return le.timeout&&le.timeout.start()},toggleTimer:function(){var e=le.timeout;return e&&(e.running?e.stop():e.start())},increaseTimer:function(e){return le.timeout&&le.timeout.increase(e)},isTimerRunning:function(){return le.timeout&&le.timeout.isRunning()}}),Be="function"==typeof Symbol?Symbol:function(){var t=0;function e(e){return"__"+e+"_"+Math.floor(1e9*Math.random())+"_"+ ++t+"__"}return e.iterator=e("Symbol.iterator"),e}(),Se="function"==typeof WeakMap?WeakMap:function(n,o,t){function e(){o(this,n,{value:Be("WeakMap")})}return e.prototype={delete:function(e){delete e[this[n]]},get:function(e){return e[this[n]]},has:function(e){return t.call(e,this[n])},set:function(e,t){o(e,this[n],{configurable:!0,value:t})}},e}(Be("WeakMap"),Object.defineProperty,{}.hasOwnProperty),Pe={promise:new Se,innerParams:new Se,domCache:new Se};function Ee(){var e=Pe.innerParams.get(this),t=Pe.domCache.get(this);e.showConfirmButton||(F(t.confirmButton),e.showCancelButton||F(t.actions)),W([t.popup,t.actions],_.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.cancelButton.disabled=!1}function Le(e){var t=Pe.domCache.get(this);t.validationMessage.innerHTML=e;var n=window.getComputedStyle(t.popup);t.validationMessage.style.marginLeft="-".concat(n.getPropertyValue("padding-left")),t.validationMessage.style.marginRight="-".concat(n.getPropertyValue("padding-right")),K(t.validationMessage);var o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedBy",_["validation-message"]),N(o),z(o,_.inputerror))}function Oe(){var e=Pe.domCache.get(this);e.validationMessage&&F(e.validationMessage);var t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedBy"),W(t,_.inputerror))}var Te=function e(t,n){a(this,e);var o,i,r=n;this.running=!1,this.start=function(){return this.running||(this.running=!0,i=new Date,o=setTimeout(t,r)),r},this.stop=function(){return this.running&&(this.running=!1,clearTimeout(o),r-=new Date-i),r},this.increase=function(e){var t=this.running;return t&&this.stop(),r+=e,t&&this.start(),r},this.getTimerLeft=function(){return this.running&&(this.stop(),this.start()),r},this.isRunning=function(){return this.running},this.start()},Me={email:function(e,t){return/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid email address")},url:function(e,t){return/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(e)?Promise.resolve():Promise.reject(t&&t.validationMessage?t.validationMessage:"Invalid URL")}};var je=function(e){var t=w(),n=k();null!==e.onBeforeOpen&&"function"==typeof e.onBeforeOpen&&e.onBeforeOpen(n),e.animation?(z(n,_.show),z(t,_.fade),W(n,_.hide)):W(n,_.fade),K(n),t.style.overflowY="hidden",ee&&!v(n,_.noanimation)?n.addEventListener(ee,function e(){n.removeEventListener(ee,e),t.style.overflowY="auto"}):t.style.overflowY="auto",z([document.documentElement,document.body,t],_.shown),e.heightAuto&&e.backdrop&&!e.toast&&z([document.documentElement,document.body],_["height-auto"]),T()&&(se(),function(){if(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&!v(document.body,_.iosfix)){var e=document.body.scrollTop;document.body.style.top=-1*e+"px",z(document.body,_.iosfix)}}(),"undefined"!=typeof window&&ce()&&(ue(),window.addEventListener("resize",ue)),f(document.body.children).forEach(function(e){e===w()||function(e,t){if("function"==typeof e.contains)return e.contains(t)}(e,w())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),setTimeout(function(){t.scrollTop=0})),M()||le.previousActiveElement||(le.previousActiveElement=document.activeElement),null!==e.onOpen&&"function"==typeof e.onOpen&&setTimeout(function(){e.onOpen(n)})};var Ve,qe=Object.freeze({hideLoading:Ee,disableLoading:Ee,getInput:function(e){var t=Pe.innerParams.get(this),n=Pe.domCache.get(this);if(!(e=e||t.input))return null;switch(e){case"select":case"textarea":case"file":return U(n.content,_[e]);case"checkbox":return n.popup.querySelector(".".concat(_.checkbox," input"));case"radio":return n.popup.querySelector(".".concat(_.radio," input:checked"))||n.popup.querySelector(".".concat(_.radio," input:first-child"));case"range":return n.popup.querySelector(".".concat(_.range," input"));default:return U(n.content,_.input)}},enableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!1,e.cancelButton.disabled=!1},disableButtons:function(){var e=Pe.domCache.get(this);e.confirmButton.disabled=!0,e.cancelButton.disabled=!0},enableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!1},disableConfirmButton:function(){Pe.domCache.get(this).confirmButton.disabled=!0},enableInput:function(){var e=this.getInput();if(!e)return!1;if("radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!1;else e.disabled=!1},disableInput:function(){var e=this.getInput();if(!e)return!1;if(e&&"radio"===e.type)for(var t=e.parentNode.parentNode.querySelectorAll("input"),n=0;n<t.length;n++)t[n].disabled=!0;else e.disabled=!0},showValidationMessage:Le,resetValidationMessage:Oe,resetValidationError:function(){m("Swal.resetValidationError() is deprecated and will be removed in the next major release, use Swal.resetValidationMessage() instead"),Oe.bind(this)()},showValidationError:function(e){m("Swal.showValidationError() is deprecated and will be removed in the next major release, use Swal.showValidationMessage() instead"),Le.bind(this)(e)},getProgressSteps:function(){return Pe.innerParams.get(this).progressSteps},setProgressSteps:function(e){var t=r({},Pe.innerParams.get(this),{progressSteps:e});Pe.innerParams.set(this,t),re(t)},showProgressSteps:function(){var e=Pe.domCache.get(this);K(e.progressSteps)},hideProgressSteps:function(){var e=Pe.domCache.get(this);F(e.progressSteps)},_main:function(e){var T=this;ye(e);var M=r({},me,e);!function(t){var e;t.inputValidator||Object.keys(Me).forEach(function(e){t.input===e&&(t.inputValidator=t.expectRejections?Me[e]:De.adaptInputValidator(Me[e]))}),t.validationMessage&&("object"!==q(t.extraParams)&&(t.extraParams={}),t.extraParams.validationMessage=t.validationMessage),(!t.target||"string"==typeof t.target&&!document.querySelector(t.target)||"string"!=typeof t.target&&!t.target.appendChild)&&(R('Target parameter is not valid, defaulting to "body"'),t.target="body"),"function"==typeof t.animation&&(t.animation=t.animation.call());var n=k(),o="string"==typeof t.target?document.querySelector(t.target):t.target;e=n&&o&&n.parentNode!==o.parentNode?X(t):n||X(t),t.width&&(e.style.width="number"==typeof t.width?t.width+"px":t.width),t.padding&&(e.style.padding="number"==typeof t.padding?t.padding+"px":t.padding),t.background&&(e.style.background=t.background);for(var i=window.getComputedStyle(e).getPropertyValue("background-color"),r=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"),a=0;a<r.length;a++)r[a].style.backgroundColor=i;var s=w(),c=$(),u=Y();if(ae(t),ne(t),"string"==typeof t.backdrop?w().style.background=t.backdrop:t.backdrop||z([document.documentElement,document.body],_["no-backdrop"]),!t.backdrop&&t.allowOutsideClick&&R('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.position in _?z(s,_[t.position]):(R('The "position" parameter is not valid, defaulting to "center"'),z(s,_.center)),t.grow&&"string"==typeof t.grow){var l="grow-"+t.grow;l in _&&z(s,_[l])}t.showCloseButton?(c.setAttribute("aria-label",t.closeButtonAriaLabel),K(c)):F(c),e.className=_.popup,t.toast?(z([document.documentElement,document.body],_["toast-shown"]),z(e,_.toast)):z(e,_.modal),t.customClass&&z(e,t.customClass),t.customContainerClass&&z(s,t.customContainerClass),re(t),oe(t),ie(t),te(t),G(t.footer,u),!0===t.animation?W(e,_.noanimation):z(e,_.noanimation),t.showLoaderOnConfirm&&!t.preConfirm&&R("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request")}(M),Object.freeze(M),Pe.innerParams.set(this,M),le.timeout&&(le.timeout.stop(),delete le.timeout),clearTimeout(le.restoreFocusTimeout);var j={popup:k(),container:w(),content:B(),actions:Q(),confirmButton:L(),cancelButton:O(),closeButton:$(),validationMessage:E(),progressSteps:P()};Pe.domCache.set(this,j);var V=this.constructor;return new Promise(function(t,n){var o=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?t(e):t({value:e})},c=function(e){V.closePopup(M.onClose,M.onAfterClose),M.useRejections?n(e):t({dismiss:e})},u=function(e){V.closePopup(M.onClose,M.onAfterClose),n(e)};M.timer&&(le.timeout=new Te(function(){c("timer"),delete le.timeout},M.timer)),M.input&&setTimeout(function(){var e=T.getInput();e&&N(e)},0);for(var l=function(t){if(M.showLoaderOnConfirm&&V.showLoading(),M.preConfirm){T.resetValidationMessage();var e=Promise.resolve().then(function(){return M.preConfirm(t,M.extraParams)});M.expectRejections?e.then(function(e){return o(e||t)},function(e){T.hideLoading(),e&&T.showValidationMessage(e)}):e.then(function(e){Z(j.validationMessage)||!1===e?T.hideLoading():o(e||t)},function(e){return u(e)})}else o(t)},e=function(e){var t=e.target,n=j.confirmButton,o=j.cancelButton,i=n&&(n===t||n.contains(t)),r=o&&(o===t||o.contains(t));switch(e.type){case"click":if(i&&V.isVisible())if(T.disableButtons(),M.input){var a=function(){var e=T.getInput();if(!e)return null;switch(M.input){case"checkbox":return e.checked?1:0;case"radio":return e.checked?e.value:null;case"file":return e.files.length?e.files[0]:null;default:return M.inputAutoTrim?e.value.trim():e.value}}();if(M.inputValidator){T.disableInput();var s=Promise.resolve().then(function(){return M.inputValidator(a,M.extraParams)});M.expectRejections?s.then(function(){T.enableButtons(),T.enableInput(),l(a)},function(e){T.enableButtons(),T.enableInput(),e&&T.showValidationMessage(e)}):s.then(function(e){T.enableButtons(),T.enableInput(),e?T.showValidationMessage(e):l(a)},function(e){return u(e)})}else T.getInput().checkValidity()?l(a):(T.enableButtons(),T.showValidationMessage(M.validationMessage))}else l(!0);else r&&V.isVisible()&&(T.disableButtons(),c(V.DismissReason.cancel))}},i=j.popup.querySelectorAll("button"),r=0;r<i.length;r++)i[r].onclick=e,i[r].onmouseover=e,i[r].onmouseout=e,i[r].onmousedown=e;if(j.closeButton.onclick=function(){c(V.DismissReason.close)},M.toast)j.popup.onclick=function(){M.showConfirmButton||M.showCancelButton||M.showCloseButton||M.input||c(V.DismissReason.close)};else{var a=!1;j.popup.onmousedown=function(){j.container.onmouseup=function(e){j.container.onmouseup=void 0,e.target===j.container&&(a=!0)}},j.container.onmousedown=function(){j.popup.onmouseup=function(e){j.popup.onmouseup=void 0,(e.target===j.popup||j.popup.contains(e.target))&&(a=!0)}},j.container.onclick=function(e){a?a=!1:e.target===j.container&&H(M.allowOutsideClick)&&c(V.DismissReason.backdrop)}}M.reverseButtons?j.confirmButton.parentNode.insertBefore(j.cancelButton,j.confirmButton):j.confirmButton.parentNode.insertBefore(j.confirmButton,j.cancelButton);var s=function(e,t){for(var n=J(M.focusCancel),o=0;o<n.length;o++)return(e+=t)===n.length?e=0:-1===e&&(e=n.length-1),n[e].focus();j.popup.focus()};le.keydownHandlerAdded&&(le.keydownTarget.removeEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!1),M.toast||(le.keydownHandler=function(e){return function(e,t){if(t.stopKeydownPropagation&&e.stopPropagation(),"Enter"!==e.key||e.isComposing)if("Tab"===e.key){for(var n=e.target,o=J(t.focusCancel),i=-1,r=0;r<o.length;r++)if(n===o[r]){i=r;break}e.shiftKey?s(i,-1):s(i,1),e.stopPropagation(),e.preventDefault()}else-1!==["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Left","Right","Up","Down"].indexOf(e.key)?document.activeElement===j.confirmButton&&Z(j.cancelButton)?j.cancelButton.focus():document.activeElement===j.cancelButton&&Z(j.confirmButton)&&j.confirmButton.focus():"Escape"!==e.key&&"Esc"!==e.key||!0!==H(t.allowEscapeKey)||(e.preventDefault(),c(V.DismissReason.esc));else if(e.target&&T.getInput()&&e.target.outerHTML===T.getInput().outerHTML){if(-1!==["textarea","file"].indexOf(t.input))return;V.clickConfirm(),e.preventDefault()}}(e,M)},le.keydownTarget=M.keydownListenerCapture?window:j.popup,le.keydownListenerCapture=M.keydownListenerCapture,le.keydownTarget.addEventListener("keydown",le.keydownHandler,{capture:le.keydownListenerCapture}),le.keydownHandlerAdded=!0),T.enableButtons(),T.hideLoading(),T.resetValidationMessage(),M.toast&&(M.input||M.footer||M.showCloseButton)?z(document.body,_["toast-column"]):W(document.body,_["toast-column"]);for(var d,p,f=["input","file","range","select","radio","checkbox","textarea"],m=function(e){e.placeholder&&!M.inputPlaceholder||(e.placeholder=M.inputPlaceholder)},h=0;h<f.length;h++){var g=_[f[h]],b=U(j.content,g);if(d=T.getInput(f[h])){for(var v in d.attributes)if(d.attributes.hasOwnProperty(v)){var y=d.attributes[v].name;"type"!==y&&"value"!==y&&d.removeAttribute(y)}for(var w in M.inputAttributes)"range"===f[h]&&"placeholder"===w||d.setAttribute(w,M.inputAttributes[w])}b.className=g,M.inputClass&&z(b,M.inputClass),F(b)}switch(M.input){case"text":case"email":case"password":case"number":case"tel":case"url":d=U(j.content,_.input),"string"==typeof M.inputValue||"number"==typeof M.inputValue?d.value=M.inputValue:D(M.inputValue)||R('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(q(M.inputValue),'"')),m(d),d.type=M.input,K(d);break;case"file":m(d=U(j.content,_.file)),d.type=M.input,K(d);break;case"range":var C=U(j.content,_.range),k=C.querySelector("input"),x=C.querySelector("output");k.value=M.inputValue,k.type=M.input,x.value=M.inputValue,K(C);break;case"select":var A=U(j.content,_.select);if(A.innerHTML="",M.inputPlaceholder){var B=document.createElement("option");B.innerHTML=M.inputPlaceholder,B.value="",B.disabled=!0,B.selected=!0,A.appendChild(B)}p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("option");o.value=t,o.innerHTML=n,M.inputValue.toString()===t.toString()&&(o.selected=!0),A.appendChild(o)}),K(A),A.focus()};break;case"radio":var S=U(j.content,_.radio);S.innerHTML="",p=function(e){e.forEach(function(e){var t=e[0],n=e[1],o=document.createElement("input"),i=document.createElement("label");o.type="radio",o.name=_.radio,o.value=t,M.inputValue.toString()===t.toString()&&(o.checked=!0);var r=document.createElement("span");r.innerHTML=n,r.className=_.label,i.appendChild(o),i.appendChild(r),S.appendChild(i)}),K(S);var t=S.querySelectorAll("input");t.length&&t[0].focus()};break;case"checkbox":var P=U(j.content,_.checkbox),E=T.getInput("checkbox");E.type="checkbox",E.value=1,E.id=_.checkbox,E.checked=Boolean(M.inputValue),P.querySelector("span").innerHTML=M.inputPlaceholder,K(P);break;case"textarea":var L=U(j.content,_.textarea);L.value=M.inputValue,m(L),K(L);break;case null:break;default:I('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(M.input,'"'))}if("select"===M.input||"radio"===M.input){var O=function(e){return p((t=e,n=[],"undefined"!=typeof Map&&t instanceof Map?t.forEach(function(e,t){n.push([t,e])}):Object.keys(t).forEach(function(e){n.push([e,t[e]])}),n));var t,n};D(M.inputOptions)?(V.showLoading(),M.inputOptions.then(function(e){T.hideLoading(),O(e)})):"object"===q(M.inputOptions)?O(M.inputOptions):I("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(q(M.inputOptions)))}else-1!==["text","email","number","tel","textarea"].indexOf(M.input)&&D(M.inputValue)&&(V.showLoading(),F(d),M.inputValue.then(function(e){d.value="number"===M.input?parseFloat(e)||0:e+"",K(d),d.focus(),T.hideLoading()}).catch(function(e){I("Error in inputValue promise: "+e),d.value="",K(d),d.focus(),T.hideLoading()}));je(M),M.toast||(H(M.allowEnterKey)?M.focusCancel&&Z(j.cancelButton)?j.cancelButton.focus():M.focusConfirm&&Z(j.confirmButton)?j.confirmButton.focus():s(-1,1):document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()),j.container.scrollTop=0})}});function Re(){if("undefined"!=typeof window){"undefined"==typeof Promise&&I("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)"),Ve=this;for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=Object.freeze(this.constructor.argsToParams(t));Object.defineProperties(this,{params:{value:o,writable:!1,enumerable:!0}});var i=this._main(this.params);Pe.promise.set(this,i)}}Re.prototype.then=function(e,t){return Pe.promise.get(this).then(e,t)},Re.prototype.catch=function(e){return Pe.promise.get(this).catch(e)},Re.prototype.finally=function(e){return Pe.promise.get(this).finally(e)},r(Re.prototype,qe),r(Re,Ae),Object.keys(qe).forEach(function(t){Re[t]=function(){var e;if(Ve)return(e=Ve)[t].apply(e,arguments)}}),Re.DismissReason=e,Re.noop=function(){};var Ie,He,De=fe((Ie=Re,He=function(e){function t(){return a(this,t),d(this,c(t).apply(this,arguments))}return s(t,Ie),i(t,[{key:"_main",value:function(e){return p(c(t.prototype),"_main",this).call(this,r({},Ce,e))}}],[{key:"setDefaults",value:function(t){if(m(we),!t||"object"!==q(t))throw new TypeError("SweetAlert2: The argument for setDefaults() is required and has to be a object");ye(t),Object.keys(t).forEach(function(e){Ie.isValidParameter(e)&&(Ce[e]=t[e])})}},{key:"resetDefaults",value:function(){m(we),Ce={}}}]),t}(),"undefined"!=typeof window&&"object"===q(window._swalDefaults)&&He.setDefaults(window._swalDefaults),He));return De.default=De}),"undefined"!=typeof window&&window.Sweetalert2&&(window.Sweetalert2.version="7.33.1",window.swal=window.sweetAlert=window.Swal=window.SweetAlert=window.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;box-shadow:0 0 .625em #d9d9d9;overflow-y:hidden}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:initial;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon-text{font-size:2em;font-weight:700;line-height:1em}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:2em;height:2.8125em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.25em;left:-.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 2em;transform-origin:0 2em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:showSweetToast .5s;animation:showSweetToast .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:hideSweetToast .2s forwards;animation:hideSweetToast .2s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:animate-toast-success-tip .75s;animation:animate-toast-success-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:animate-toast-success-long .75s;animation:animate-toast-success-long .75s}@-webkit-keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@keyframes showSweetToast{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg);opacity:0}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg);opacity:.5}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg);opacity:.7}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0);opacity:1}}@-webkit-keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes hideSweetToast{0%{opacity:1}33%{opacity:.5}100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes animate-toast-success-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes animate-toast-success-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:10px;background-color:transparent;z-index:1060;overflow-x:hidden;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem;box-sizing:border-box}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-popup .swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-popup .swal2-title{display:block;position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-popup .swal2-actions{flex-wrap:wrap;align-items:center;justify-content:center;margin:1.25em auto 0;z-index:1}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-popup .swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-confirm{width:2.5em;height:2.5em;margin:.46875em;padding:0;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;box-sizing:border-box;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-popup .swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-popup .swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{display:inline-block;width:15px;height:15px;margin-left:5px;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff;content:'';-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal}.swal2-popup .swal2-styled{margin:.3125em;padding:.625em 2em;font-weight:500;box-shadow:none}.swal2-popup .swal2-styled:not([disabled]){cursor:pointer}.swal2-popup .swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-popup .swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-popup .swal2-styled::-moz-focus-inner{border:0}.swal2-popup .swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-popup .swal2-image{max-width:100%;margin:1.25em auto}.swal2-popup .swal2-close{position:absolute;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer;overflow:hidden}.swal2-popup .swal2-close:hover{-webkit-transform:none;transform:none;color:#f27474}.swal2-popup>.swal2-checkbox,.swal2-popup>.swal2-file,.swal2-popup>.swal2-input,.swal2-popup>.swal2-radio,.swal2-popup>.swal2-select,.swal2-popup>.swal2-textarea{display:none}.swal2-popup .swal2-content{justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;z-index:1;word-wrap:break-word}.swal2-popup #swal2-content{text-align:center}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-radio,.swal2-popup .swal2-select,.swal2-popup .swal2-textarea{margin:1em auto}.swal2-popup .swal2-file,.swal2-popup .swal2-input,.swal2-popup .swal2-textarea{width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;font-size:1.125em;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);box-sizing:border-box}.swal2-popup .swal2-file.swal2-inputerror,.swal2-popup .swal2-input.swal2-inputerror,.swal2-popup .swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-popup .swal2-file:focus,.swal2-popup .swal2-input:focus,.swal2-popup .swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-popup .swal2-file::-webkit-input-placeholder,.swal2-popup .swal2-input::-webkit-input-placeholder,.swal2-popup .swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-popup .swal2-file:-ms-input-placeholder,.swal2-popup .swal2-input:-ms-input-placeholder,.swal2-popup .swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::-ms-input-placeholder,.swal2-popup .swal2-input::-ms-input-placeholder,.swal2-popup .swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-popup .swal2-file::placeholder,.swal2-popup .swal2-input::placeholder,.swal2-popup .swal2-textarea::placeholder{color:#ccc}.swal2-popup .swal2-range input{width:80%}.swal2-popup .swal2-range output{width:20%;font-weight:600;text-align:center}.swal2-popup .swal2-range input,.swal2-popup .swal2-range output{height:2.625em;margin:1em auto;padding:0;font-size:1.125em;line-height:2.625em}.swal2-popup .swal2-input{height:2.625em;padding:0 .75em}.swal2-popup .swal2-input[type=number]{max-width:10em}.swal2-popup .swal2-file{font-size:1.125em}.swal2-popup .swal2-textarea{height:6.75em;padding:.75em}.swal2-popup .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;color:#545454;font-size:1.125em}.swal2-popup .swal2-checkbox,.swal2-popup .swal2-radio{align-items:center;justify-content:center}.swal2-popup .swal2-checkbox label,.swal2-popup .swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-popup .swal2-checkbox input,.swal2-popup .swal2-radio input{margin:0 .4em}.swal2-popup .swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;background:#f0f0f0;color:#666;font-size:1em;font-weight:300;overflow:hidden}.swal2-popup .swal2-validation-message::before{display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center;content:'!';zoom:normal}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;zoom:normal}.swal2-icon-text{font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;top:-.25em;left:-.25em;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%;z-index:2;box-sizing:content-box}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);z-index:1}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;height:.3125em;border-radius:.125em;background-color:#a5dc86;z-index:2}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progresssteps{align-items:center;margin:0 0 1.25em;padding:0;font-weight:600}.swal2-progresssteps li{display:inline-block;position:relative}.swal2-progresssteps .swal2-progresscircle{width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center;z-index:20}.swal2-progresssteps .swal2-progresscircle:first-child{margin-left:0}.swal2-progresssteps .swal2-progresscircle:last-child{margin-right:0}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep{background:#3085d6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progresscircle{background:#add8e6}.swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep~.swal2-progressline{background:#add8e6}.swal2-progresssteps .swal2-progressline{width:2.5em;height:.4em;margin:0 -1px;background:#3085d6;z-index:10}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:initial!important}}");
/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// when-dom-ready
// https://github.com/lukechilds/when-dom-ready
!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.whenDomReady = n() }(this, function () { "use strict"; var e = ["interactive", "complete"], n = function (n, t) { return new Promise(function (o) { n && "function" != typeof n && (t = n, n = null), t = t || window.document; var i = function () { return o(void (n && setTimeout(n))) }; -1 !== e.indexOf(t.readyState) ? i() : t.addEventListener("DOMContentLoaded", i) }) }; return n.resume = function (e) { return function (t) { return n(e).then(function () { return t }) } }, n });

// random-js
// https://github.com/ckknight/random-js
!function (n) { "use strict"; function t(n) { if (!(this instanceof t)) return new t(n); if (null == n) n = t.engines.nativeMath; else if ("function" != typeof n) throw new TypeError("Expected engine to be a function, got " + typeof n); this.engine = n } function r(n) { return function () { return n } } function e(n, t) { return 0 === t ? n : function (r) { return n(r) + t } } function i(n) { var t = +n; return 0 > t ? Math.ceil(t) : Math.floor(t) } function u(n, t) { return 0 > n ? Math.max(n + t, 0) : Math.min(n, t) } function o() { return void 0 } var f = "Random", c = "function" != typeof Math.imul || -5 !== Math.imul(4294967295, 5) ? function (n, t) { var r = n >>> 16 & 65535, e = 65535 & n, i = t >>> 16 & 65535, u = 65535 & t; return e * u + (r * u + e * i << 16 >>> 0) | 0 } : Math.imul, a = "function" == typeof String.prototype.repeat && "xxx" === "x".repeat(3) ? function (n, t) { return n.repeat(t) } : function (n, t) { for (var r = ""; t > 0;)1 & t && (r += n), t >>= 1, n += n; return r }, l = t.prototype; t.engines = { nativeMath: function () { return 4294967296 * Math.random() | 0 }, mt19937: function (n) { function r(n) { for (var t = 0, r = 0; 227 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t + 397 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); for (; 623 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t - 227 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); r = 2147483648 & n[623] | 2147483647 & n[0], n[623] = n[396] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0) } function e(n) { return n ^= n >>> 11, n ^= n << 7 & 2636928640, n ^= n << 15 & 4022730752, n ^ n >>> 18 } function i(n, t) { for (var r = 1, e = 0, i = t.length, u = 0 | Math.max(i, 624), o = 0 | n[0]; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1664525)) + (0 | t[e]) + (0 | e) | 0, r = r + 1 | 0, ++e, (0 | r) > 623 && (n[0] = n[623], r = 1), e >= i && (e = 0); for (u = 623; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1566083941)) - r | 0, r = r + 1 | 0, (0 | r) > 623 && (n[0] = n[623], r = 1); n[0] = 2147483648 } function u() { function u() { (0 | f) >= 624 && (r(o), f = 0); var n = o[f]; return f = f + 1 | 0, 0 | e(n) } var o = new n(624), f = 0; return u.discard = function (n) { for ((0 | f) >= 624 && (r(o), f = 0); n - f > 624;)n -= 624 - f, r(o), f = 0; return f = f + n | 0, u }, u.seed = function (n) { var t = 0; o[0] = t = 0 | n; for (var r = 1; 624 > r; r = r + 1 | 0)o[r] = t = c(t ^ t >>> 30, 1812433253) + r | 0; return f = 624, u }, u.seedWithArray = function (n) { return u.seed(19650218), i(o, n), u }, u.autoSeed = function () { return u.seedWithArray(t.generateEntropyArray()) }, u } return u }("function" == typeof Int32Array ? Int32Array : Array), browserCrypto: "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof Int32Array ? function () { var n = null, t = 128; return function () { return t >= 128 && (null === n && (n = new Int32Array(128)), crypto.getRandomValues(n), t = 0), 0 | n[t++] } }() : null }, t.generateEntropyArray = function () { for (var n = [], r = t.engines.nativeMath, e = 0; 16 > e; ++e)n[e] = 0 | r(); return n.push(0 | (new Date).getTime()), n }, t.int32 = function (n) { return 0 | n() }, l.int32 = function () { return t.int32(this.engine) }, t.uint32 = function (n) { return n() >>> 0 }, l.uint32 = function () { return t.uint32(this.engine) }, t.uint53 = function (n) { var t = 2097151 & n(), r = n() >>> 0; return 4294967296 * t + r }, l.uint53 = function () { return t.uint53(this.engine) }, t.uint53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(2097152 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r } if (2097152 === (4194303 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.uint53Full = function () { return t.uint53Full(this.engine) }, t.int53 = function (n) { var t = 0 | n(), r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) }, l.int53 = function () { return t.int53(this.engine) }, t.int53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(4194304 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) } if (4194304 === (8388607 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.int53Full = function () { return t.int53Full(this.engine) }, t.integer = function () { function n(n) { return 0 === (n + 1 & n) } function i(n) { return function (t) { return t() & n } } function u(n) { var t = n + 1, r = t * Math.floor(4294967296 / t); return function (n) { var e = 0; do e = n() >>> 0; while (e >= r); return e % t } } function o(t) { return n(t) ? i(t) : u(t) } function f(n) { return 0 === (0 | n) } function c(n) { return function (t) { var r = t() & n, e = t() >>> 0; return 4294967296 * r + e } } function a(n) { var t = n * Math.floor(9007199254740992 / n); return function (r) { var e = 0; do { var i = 2097151 & r(), u = r() >>> 0; e = 4294967296 * i + u } while (e >= t); return e % n } } function l(t) { var r = t + 1; if (f(r)) { var e = (r / 4294967296 | 0) - 1; if (n(e)) return c(e) } return a(r) } function h(n, t) { return function (r) { var e = 0; do { var i = 0 | r(), u = r() >>> 0; e = 4294967296 * (2097151 & i) + u + (2097152 & i ? -9007199254740992 : 0) } while (n > e || e > t); return e } } return function (n, i) { if (n = Math.floor(n), i = Math.floor(i), -9007199254740992 > n || !isFinite(n)) throw new RangeError("Expected min to be at least -9007199254740992"); if (i > 9007199254740992 || !isFinite(i)) throw new RangeError("Expected max to be at most 9007199254740992"); var u = i - n; return 0 >= u || !isFinite(u) ? r(n) : 4294967295 === u ? 0 === n ? t.uint32 : e(t.int32, n + 2147483648) : 4294967295 > u ? e(o(u), n) : 9007199254740991 === u ? e(t.uint53, n) : 9007199254740991 > u ? e(l(u), n) : i - 1 - n === 9007199254740991 ? e(t.uint53Full, n) : -9007199254740992 === n && 9007199254740992 === i ? t.int53Full : -9007199254740992 === n && 9007199254740991 === i ? t.int53 : -9007199254740991 === n && 9007199254740992 === i ? e(t.int53, 1) : 9007199254740992 === i ? e(h(n - 1, i - 1), 1) : h(n, i) } }(), l.integer = function (n, r) { return t.integer(n, r)(this.engine) }, t.realZeroToOneInclusive = function (n) { return t.uint53Full(n) / 9007199254740992 }, l.realZeroToOneInclusive = function () { return t.realZeroToOneInclusive(this.engine) }, t.realZeroToOneExclusive = function (n) { return t.uint53(n) / 9007199254740992 }, l.realZeroToOneExclusive = function () { return t.realZeroToOneExclusive(this.engine) }, t.real = function () { function n(n, t) { return 1 === t ? n : 0 === t ? function () { return 0 } : function (r) { return n(r) * t } } return function (r, i, u) { if (!isFinite(r)) throw new RangeError("Expected left to be a finite number"); if (!isFinite(i)) throw new RangeError("Expected right to be a finite number"); return e(n(u ? t.realZeroToOneInclusive : t.realZeroToOneExclusive, i - r), r) } }(), l.real = function (n, r, e) { return t.real(n, r, e)(this.engine) }, t.bool = function () { function n(n) { return 1 === (1 & n()) } function e(n, t) { return function (r) { return n(r) < t } } function i(n) { if (0 >= n) return r(!1); if (n >= 1) return r(!0); var i = 4294967296 * n; return i % 1 === 0 ? e(t.int32, i - 2147483648 | 0) : e(t.uint53, Math.round(9007199254740992 * n)) } return function (u, o) { return null == o ? null == u ? n : i(u) : 0 >= u ? r(!1) : u >= o ? r(!0) : e(t.integer(0, o - 1), u) } }(), l.bool = function (n, r) { return t.bool(n, r)(this.engine) }, t.pick = function (n, r, e, o) { var f = r.length, c = null == e ? 0 : u(i(e), f), a = void 0 === o ? f : u(i(o), f); if (c >= a) return void 0; var l = t.integer(c, a - 1); return r[l(n)] }, l.pick = function (n, r, e) { return t.pick(this.engine, n, r, e) }; var h = Array.prototype.slice; t.picker = function (n, r, e) { var i = h.call(n, r, e); if (!i.length) return o; var u = t.integer(0, i.length - 1); return function (n) { return i[u(n)] } }, t.shuffle = function (n, r, e) { var i = r.length; if (i) { null == e && (e = 0); for (var u = i - 1 >>> 0; u > e; --u) { var o = t.integer(0, u), f = o(n); if (u !== f) { var c = r[u]; r[u] = r[f], r[f] = c } } } return r }, l.shuffle = function (n) { return t.shuffle(this.engine, n) }, t.sample = function (n, r, e) { if (0 > e || e > r.length || !isFinite(e)) throw new RangeError("Expected sampleSize to be within 0 and the length of the population"); if (0 === e) return []; var i = h.call(r), u = i.length; if (u === e) return t.shuffle(n, i, 0); var o = u - e; return t.shuffle(n, i, o - 1).slice(o) }, l.sample = function (n, r) { return t.sample(this.engine, n, r) }, t.die = function (n) { return t.integer(1, n) }, l.die = function (n) { return t.die(n)(this.engine) }, t.dice = function (n, r) { var e = t.die(n); return function (n) { var t = []; t.length = r; for (var i = 0; r > i; ++i)t[i] = e(n); return t } }, l.dice = function (n, r) { return t.dice(n, r)(this.engine) }, t.uuid4 = function () { function n(n, t) { return a("0", t - n.length) + n } return function (t) { var r = t() >>> 0, e = 0 | t(), i = 0 | t(), u = t() >>> 0; return n(r.toString(16), 8) + "-" + n((65535 & e).toString(16), 4) + "-" + n((e >> 4 & 4095 | 16384).toString(16), 4) + "-" + n((16383 & i | 32768).toString(16), 4) + "-" + n((i >> 4 & 65535).toString(16), 4) + n(u.toString(16), 8) } }(), l.uuid4 = function () { return t.uuid4(this.engine) }, t.string = function () { var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"; return function (r) { null == r && (r = n); var e = r.length; if (!e) throw new Error("Expected pool not to be an empty string"); var i = t.integer(0, e - 1); return function (n, t) { for (var e = "", u = 0; t > u; ++u) { var o = i(n); e += r.charAt(o) } return e } } }(), l.string = function (n, r) { return t.string(r)(this.engine, n) }, t.hex = function () { var n = "0123456789abcdef", r = t.string(n), e = t.string(n.toUpperCase()); return function (n) { return n ? e : r } }(), l.hex = function (n, r) { return t.hex(r)(this.engine, n) }, t.date = function (n, r) { if (!(n instanceof Date)) throw new TypeError("Expected start to be a Date, got " + typeof n); if (!(r instanceof Date)) throw new TypeError("Expected end to be a Date, got " + typeof r); var e = t.integer(n.getTime(), r.getTime()); return function (n) { return new Date(e(n)) } }, l.date = function (n, r) { return t.date(n, r)(this.engine) }, "function" == typeof define && define.amd ? define(function () { return t }) : "undefined" != typeof module && "function" == typeof require ? module.exports = t : (!function () { var r = n[f]; t.noConflict = function () { return n[f] = r, this } }(), n[f] = t) }(this);

!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof module&&module.exports?module.exports=t():e.VanillaTree=t()}(this,function(){"use strict";var n,i,r,a,s,l,t,o,c,d,h,u,p=(n=window,i=document,r=[],a=/\.(.+)/,s=0,l="EventListener",t="MatchesSelector",(u=function(e,t){return new u.i(e,t)}).i=function(e,t){r.push.apply(this,e?e.nodeType||e==n?[e]:""+e===e?/</.test(e)?((o=i.createElement(t||"q")).innerHTML=e,o.children):(t&&u(t)[0]||i).querySelectorAll(e):/f/.test(typeof e)?/c/.test(i.readyState)?e():u(i).on("DOMContentLoaded",e):e:r)},u.i[h="prototype"]=(u.extend=function(e){for(d=arguments,o=1;o<d.length;o++)if(h=d[o])for(c in h)e[c]=h[c];return e})(u.fn=u[h]=r,{on:function(t,n){return t=t.split(a),this.map(function(e){(a[o=t[0]+(e.b$=e.b$||++s)]=a[o]||[]).push([n,t[1]]),e["add"+l](t[0],n)}),this},off:function(t,n){return t=t.split(a),h="remove"+l,this.map(function(e){if(o=(d=a[t[0]+e.b$])&&d.length)for(;c=d[--o];)n&&n!=c[0]||t[1]&&t[1]!=c[1]||(e[h](t[0],c[0]),d.splice(o,1));else!t[1]&&e[h](t[0],n)}),this},is:function(e){return!!(c=(o=this[0])&&(o.matches||o["webkit"+t]||o["moz"+t]||o["ms"+t]))&&c.call(o,e)}}),u),f=function(e,t){return p.extend(document.createElement(e),t)},e=function(e,i){var t=this,n=t.container=p(e)[0],r=t.tree=n.appendChild(f("ul",{className:"vtree"}));t.placeholder=i&&i.placeholder,t._placeholder(),t.leafs={},r.addEventListener("click",function(e){p(e.target).is(".vtree-leaf-label")?t.select(e.target.parentNode.getAttribute("data-vtree-id")):p(e.target).is(".vtree-toggle")&&t.toggle(e.target.parentNode.getAttribute("data-vtree-id"))}),i&&i.contextmenu&&(r.addEventListener("contextmenu",function(t){var n;if(p(".vtree-contextmenu").forEach(function(e){e.parentNode.removeChild(e)}),p(t.target).is(".vtree-leaf-label")){t.preventDefault(),t.stopPropagation(),n=f("menu",{className:"vtree-contextmenu"});var e=t.target.getBoundingClientRect();p.extend(n.style,{top:(t.target.offsetTop+e.height).toString()+"px",left:t.target.offsetLeft.toString()+"px",display:"block"}),i.contextmenu.forEach(function(e){n.appendChild(f("li",{className:"vtree-contextmenu-item",innerHTML:e.label})).addEventListener("click",e.action.bind(e,t.target.parentNode.getAttribute("data-vtree-id")))}),t.target.parentNode.appendChild(n)}}),document.addEventListener("click",function(e){2!==e.button&&p(".vtree-contextmenu").forEach(function(e){e.parentNode.removeChild(e)})}))};return e.prototype={constructor:e,_dispatch:function(t,n){var i;try{i=new CustomEvent("vtree-"+t,{bubbles:!0,cancelable:!0,detail:{id:n}})}catch(e){(i=document.createEvent("CustomEvent")).initCustomEvent("vtree-"+t,!0,!0,{id:n})}return(this.getLeaf(n,!0)||this.tree).dispatchEvent(i),this},_placeholder:function(){var e;return!this.tree.children.length&&this.placeholder?this.tree.innerHTML='<li class="vtree-placeholder">'+this.placeholder+"</li>":(e=this.tree.querySelector(".vtree-placeholder"))&&this.tree.removeChild(e),this},getLeaf:function(e,t){var n=p('[data-vtree-id="'+e+'"]',this.tree)[0];if(!t&&!n)throw Error('No VanillaTree leaf with id "'+e+'"');return n},getChildList:function(e){var t,n;return e?(n=this.getLeaf(e),(t=p("ul",n)[0])||(t=n.appendChild(f("ul",{className:"vtree-subtree"})))):t=this.tree,t},add:function(e){var t,n=f("li",{className:"vtree-leaf"}),i=this.getChildList(e.parent);return n.setAttribute("data-vtree-id",t=e.id||Math.random()),n.appendChild(f("span",{className:"vtree-toggle"})),n.appendChild(f("a",{className:"vtree-leaf-label",innerHTML:e.label})),i.appendChild(n),i!==this.tree&&i.parentNode.classList.add("vtree-has-children"),(this.leafs[t]=e).opened||this.close(t),e.selected&&this.select(t),this._placeholder()._dispatch("add",t)},move:function(e,t){var n=this.getLeaf(e),i=n.parentNode,r=this.getLeaf(t,!0);return r&&r.classList.add("vtree-has-children"),this.getChildList(t).appendChild(n),i.parentNode.classList.toggle("vtree-has-children",!!i.children.length),this._dispatch("move",e)},remove:function(e){var t=this.getLeaf(e),n=t.parentNode;return n.removeChild(t),n.parentNode.classList.toggle("vtree-has-children",!!n.children.length),this._placeholder()._dispatch("remove",e)},open:function(e){return this.getLeaf(e).classList.remove("closed"),this._dispatch("open",e)},close:function(e){return this.getLeaf(e).classList.add("closed"),this._dispatch("close",e)},toggle:function(e){return this[this.getLeaf(e).classList.contains("closed")?"open":"close"](e)},select:function(e){var t=this.getLeaf(e);return t.classList.contains("vtree-selected")||(p("li.vtree-leaf",this.tree).forEach(function(e){e.classList.remove("vtree-selected")}),t.classList.add("vtree-selected"),this._dispatch("select",e)),this}},e});

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const LoginType = Object.freeze( {
  Local: 'Id',
  GitHub: 'Github_Id',
  Google: 'Google_Id'
} );

try {
  if ( process.env !== undefined )
    module.exports = LoginType;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const PermissionType = Object.freeze( {
  /** Read only */
  UserRead: 'user.read',
  /** Read and write */
  UserWrite: 'user.write',
  /** Read, write, delete */
  UserDelete: 'user.delete',
  /** Admin only (Portfolio-OS) */
  Admin: 'admin'
} );

try {
  if ( process.env !== undefined )
    module.exports = PermissionType;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const DefaultWebsiteHosts = Object.freeze( {
  GitHub: 'github.com'
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const FileSystemItemType = Object.freeze( {
  File: 1,
  FileUrl: 2,
  Executable: 3,
  Directory: 4,
  ExecutableDirectory: 5
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const GridType = Object.freeze( {
  /** Horizontal. */
  GridX: 'grid-x',
  /** Vertical. */
  GridY: 'grid-y'
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const HostId = Object.freeze( {
  GitHub: 1,
  Behance: 2,
  Twitter: 3,
  Instagram: 4,
  CodePen: 5
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const ProfilePageType = Object.freeze( {
  MyProfile: 'myProfile',
  Explore: 'explore',
  UserProfiles: 'userProfiles'
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const RequestType = Object.freeze( {
  Get: 'GET',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE'
} );

const TheCodeChanPageType = Object.freeze( {
  Board: 1,
  Thread: 2
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const voteType = Object.freeze( {
  DownVote: 0,
  UpVote: 1
} );

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class DomUtils {

  /**
   * 
   * @param {any} query
   * @returns { HTMLElement }
   */
  static get( query ) {
    return document.querySelector( query );
  }

  /**
   * 
   * @param {any} query
   * @returns { HTMLElement[] }
   */
  static getAll( query ) {
    return document.querySelectorAll( query );
  }

  /**
   * Get a parent element with an id include. If it's not found it returns false.
   * 
   * @param {any} elem Element that defines where the search starts.
   * @param {any} query A query with part of, or the full id of the seeked element.
   * @returns {Element | false}
   */
  static getParentByIdInclude(elem, query) {
    let that = elem;

    while ( that && !that.id.includes( query ) ) {
      that = that.parentNode;
    }

    return that;
  }

  static getParentByTag(elem, tag) {
    let that = elem;

    while (that && that.localName !== tag) {
      that = that.parentNode;
    }

    return that;
  }

  /**
   * Get a parent element with an class include. If it's not found it returns false.
   * 
   * @param {any} elem Element that defines where the search starts.
   * @param {any} query Query with part of, or the full class of the seeked element.
   * @returns {HTMLElement | false}
   */
  static getParentByClassInclude( elem, query ) {
    let that = elem;

    while ( that && !that.className.includes( query ) ) {
      that = that.parentNode;
    }

    return that;
  }

  static getDirectChildrenByTag(elem, tag) {
    if (elem.localName === tag) return elem;

    const that = elem.children;
    let found = false;
    let elems = [];
    for (let i = 0; i < that.length; i++) {
      if (that[i].localName === tag) {
        elems.push(that[i]);
        found = true;
      }
    }
    if (found) {
      if (elems.length <= 1)
        return elems[0];
      else
        return elems;
    }
    return false;
  }

  /**
   * 
   * @param { HTMLElement } element
   * @param { string } propertyName The CSS property element.
   */
  static getStyleProp( element, propertyName ) {
    return window.getComputedStyle( element ).getPropertyValue( propertyName );
  }

  static getAttributeFromElem(elem, attribute) {
    const attr = elem.attributes;
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].localName === attribute)
        return attr[i].nodeValue;
    }
  }

  static getOffset(elem) {
    let x = 0;
    let y = 0;

    while (elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop)) {
      x += elem.offsetLeft - elem.scrollLeft;
      y += elem.offsetTop - elem.scrollTop;
      elem = elem.offsetParent;
    }

    return {
      top: y,
      left: x
    };
  }

  static openFullScreen() {
    const elem = document.documentElement;

    if ( elem.requestFullscreen ) {
      elem.requestFullscreen();
    } else if ( elem.mozRequestFullScreen ) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if ( elem.webkitRequestFullscreen ) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if ( elem.msRequestFullscreen ) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  static closeFullScreen() {
    if ( document.exitFullscreen ) {
      document.exitFullscreen();
    } else if ( document.mozCancelFullScreen ) { /* Firefox */
      document.mozCancelFullScreen();
    } else if ( document.webkitExitFullscreen ) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if ( document.msExitFullscreen ) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

Array.prototype.last = () => {
  return this[this.length - 1];
};

class Utils {
  static log(message) {
    console.log(message);
  }

  static spoofRefererRedirectUrl( url ) {
    return HIDE_REFERER_REDIRECT + encodeURIComponent( url );
  }

  // From an external library.
  static randomString(length) {
    return Random.string('qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890«»')(Random.engines.browserCrypto, length);
  }

  // From an external library.
  static randomNumString(length) {
    return Random.string('1234567890')(Random.engines.browserCrypto, length);
  }

  static parseIDs(id) {
    const split = id.split(/_/g);
    return split;
  }

  static parsePxToInt(pxString) {
    try {
      return parseInt(pxString.substring(0, pxString.length - 2));
    } catch (e) {
      console.error('Error:', e);
    }
  }

  static calculateGrid(cellWidthPercent, cellHeightPercent) {
    const x = Math.floor(100 / cellWidthPercent) - 1;
    const y = Math.floor( 100 / cellHeightPercent ) - 1;

    return {
      x: x,
      y: y
    };
  }
}

/*

  Copyright (c) 2018 João Pedro Martins Neves <joao95neves@gmail.com> - All Rights Reserved
  Written by João Pedro Martins Neves <joao95neves@gmail.com>

  https://github.com/joao-neves95/Exercises_Challenges_Courses/blob/master/JavaScript/Collections.js



  Class Dictionary(): let dictionary = new Dictionary(uniqueKeys = false)

  Type safe Class List(): let list = new List('string' | 'number' | 'int' | 'float' | 'boolean' | 'any')

*/

class Errors {
  static get existingKey() { throw new Error( 'An item with the same key has already been added.' ); };

  static get noTypeProvided() { throw new Error( 'No type provided on Collection instantiation.' ) };

  static wrongType( type ) { throw new Error( `The value is not from the same type as the List<${type}>` ); };
}

class Collection {
  constructor( uniqueKeys = false, type = 'any' ) {
    this.elements = [];
    this.uniqueKeys = uniqueKeys;

    if ( !type ) throw Errors.noTypeProvided;
    this.type = type;
  }


  get length() {
    return this.elements.length;
  }

  /**
   * (private)
   */
  get __last() {
    return this.elements[this.length - 1];
  }

  /**
   * Get all elements from the Collection.
   * For Dictionary is best to use .getAllValues()
   * 
   * Returns elements[]
   */
  getAll() {
    return this.elements;
  }

  /**
   * 
   * @param { number } index
   */
  get( index ) {
    return this.elements[index];
  }

  /**
   * Remove all elements from the Collection.
   */
  clear() {
    this.elements = [];
  }


  /**
   * (private) 
   */
  __forEach( Callback ) {
    for ( let i = 0; i < this.elements.length; ++i ) {
      Callback( this.elements[i] );
    }
  }

  /**
   * (private)
   * No type safety. For private class use.
   * @param {Type} value
   */
  push( value ) {
    this.elements.push( value );
  }

  /**
    * (private)
    * No checks. For private class use.
    * @param {Number} index
    */
  splice( index ) {
    this.elements.splice( index, 1 );
  }
}

class Dictionary extends Collection {
  /**
   * Dictionary of key-value pairs.
   * @param {Boolean} uniqueKeys Whether the keys should be unique or not.
   * Optional. It defaults to false
   * @default {false}
   */
  constructor( uniqueKeys ) {
    super( uniqueKeys, 'any' );
  }

  /**
   * Returns the last element of the Dictionary or false.
   * 
   * @returns { any }
   */
  get lastValue() {
    try {
      return Object.values( this.__last )[0];

    } catch ( e ) {
      return false;
    }
  }

  /** 
   * Returns an Array containing all the values.
   */
  getAllValues() {
    let allValues = [];

    for ( let i = 0; i < this.elements.length; ++i ) {
      allValues.push( Object.values( this.elements[i] )[0] );
    }

    return allValues;
  }


  add( key, value ) {
    if ( this.uniqueKeys ) {
      if ( this.findIndexOfKey( key ) !== false )
        throw new Error( Errors.existingKey );
    }

    this.push( { [key]: value } );
  }

  /*
   * Removes an item in the Dictionary with the provided key.
   * @return { bool }
   */
  remove( key ) {
    const index = this.findIndexOfKey( key );
    if ( index === false )
      return false;

    this.splice( index, 1 );
    return true;
  }

  /*
   * Updates an item in the Dictionary with the provided key.
   * @param { any } key
   * @param { any } newValue
   * @return { bool }
   */
  updateByKey( key, newValue ) {
    const index = this.findIndexOfKey( key );
    if ( index === false )
      return false;

    return this.updateByIndex( index, newValue );
  }
  /*
   * Updates an item in the Dictionary with the provided index.
   * @param { any } key
   * @param { any } newValue
   * @return { bool }
   */

  updateByIndex( idx, newValue ) {
    try {
      Object.defineProperty( this.elements[idx], key, {
        value: newValue
      } );

      return true;

    } catch ( e ) {
      return false;
    }
  }

  /**
   * Get a value with its index. Returns an array with the values.
   * @param {number} index
   * @return {any[]}
   */
  getByIndex( index ) {
    return Object.values( this.elements[index] )[0];
  }

  /**
   * Get a key with its index.
   * @param {number} index
   * @return {any}
   */
  getKeyByIndex( index ) {
    return Object.keys( this.elements[index] )[0];
  }

  /**
   * Returns the value by key or <false> if not found.
   * @param { any } key
   * @returns { any | false }
   */
  getByKey( key ) {
    try {
      const keyIdx = this.findIndexOfKey( key );

      if ( keyIdx === false )
        return false;

      return this.elements[keyIdx][key];

    } catch ( e ) {
      console.error( e );
    }
  }

  findIndexOfKey( key ) {
    for ( let i = 0; i < this.elements.length; i++ ) {
      if ( Object.keys( this.elements[i] )[0] === key )
        return i;
    }

    return false;
  }

  forEachValue( Callback ) {
    this.__forEach( ( item ) => {
      Callback( Object.values( item )[0] );
    } );
  }
}

// Type safe list.
class List extends Collection {
  /**
   * 
   * The Type of the list.
   * ('string' | 'number' | 'int' | 'float' | 'boolean' | 'any')
   * @param {String} type
   */
  constructor( type ) {
    super( false, type );
  }

  /**
   * Returns the last element of the List or false.
   * 
   * @returns { any }
   */
  get last() {
    try {
      return this.__last;

    } catch ( e ) {
      return false;
    }
  }

  /**
   * Add a new item to the List<T>.
   * @param {Type} value
   */
  add( value ) {
    switch ( this.type ) {
      case 'any':
        return this.push( value );
      case 'int':
        if ( this.isInt( value ) ) {
          return this.push( value );
        }
        break;
      case 'float':
        if ( this.isFloat( value ) ) {
          return this.push( value );
        }
        break;
      default:
        if ( typeof value === this.type )
          return this.push( value );
        break;
    }

    throw Errors.wrongType( this.type );
  }

  /**
   * Remove an new item from the List<T> by index.
   * @param {Number} index
   */
  remove( index ) {
    this.splice( index );
  }


  forEach( Callback ) {
    this.__forEach( ( item ) => {
      Callback( item );
    } );
  }

  /**
   * (private)
   * @param {Number} value
   */
  isInt( value ) {
    if ( typeof value !== 'number' )
      return false;

    return value % 1 === 0;
  }

  /**
   * (private)
   * @param {Number} value
   */
  isFloat( value ) {
    if ( typeof value !== 'number' )
      return false;

    return value % 1 !== 0;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class CommonUtils {
  /**
   * Escaping following OWASP's rules.
   * https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
   * @param { string } input
   * @returns { string }
   */
  static sanitizeHTML( input ) {
    if ( !input )
      return null;

    input = input.toString().trim().replace( /&/g, '&amp;' ).replace( /</g, '&lt;' ).replace( />/g, '&gt;' ).replace( /'/g, '&#x27;' ).replace( /"/g, '&#34;' ).replace( /\//g, '&#x2F;' );
    return input;
  }

  static desanitizeHTML( input ) {
    if ( !input )
      return null;

    input = input.toString().trim().replace( /&amp;/g, '&' ).replace( /&lt;/g, '<' ).replace( /&gt;/g, '>' ).replace( /&#x27;/g, "'" ).replace( /&#34;/g, '"' ).replace( /&#x2F;/g, '\/' ).replace( /&#x27;/g, "'" );
    return input;
  }
}

try {
  if ( process.env !== undefined )
    module.exports = CommonUtils;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Chnage the parameter order.

class FSItemModelBase {
  constructor( type, permission, name, iconUrl = null, content ) {
    this.type = type;
    this.permission = permission;
    this.name = name;
    this.content = content;
    this.iconUrl = iconUrl;
  }
}

try {
  if ( process.env !== undefined )
    module.exports = FSItemModelBase;

} catch ( e ) {
  // This is the browser.
}


/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let fsItemModelBaseFile;

try {
  if ( process.env !== undefined )
    fsItemModelBaseFile = require( './fsItemModelBase' );

} catch ( e ) {
  // This is the browser.
  fsItemModelBaseFile = FSItemModelBase;
}

class FileModel extends fsItemModelBaseFile {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } content
   * @param { string } iconUrl "null" defaults to the default file icon.
   */
  constructor( type, permission, name, content, iconUrl = null ) {
    super( type, permission, name, content, iconUrl );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = FileModel;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let fsItemModelBaseDir;

try {
  if ( process.env !== undefined )
    fsItemModelBaseDir = require( './fsItemModelBase' );

} catch ( e ) {
  // This is the browser.
  fsItemModelBaseDir = FSItemModelBase;
}

class DirectoryModel extends fsItemModelBaseDir {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } iconUrl "null" defaults to the default folder icon.
   * @param { FileSystemItemType } type "null" defaults to "FileSystemItemType.Directory".
   * @param { string } content
   */
  constructor( permission, name, iconUrl = null, type = null, content ) {
    super( !type ? FileSystemItemType.Directory : type,
      permission,
      name,
      !iconUrl ? '' : iconUrl,
      content
    );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = DirectoryModel;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class SystemDirectoryModel extends DirectoryModel {
  constructor( name, content ) {
    super( PermissionType.UserRead, name, null, null, content );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = SystemDirectoryModel;

} catch ( e ) {
  // Do nothing, this is the browser.
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppRating {
  constructor() {
    this.upVotes = 0;
    this.downVotes = 0;
    this.voteRatio = 0;
    this.userVotes = [];
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const DEFAULT_ICON = '';

class AppStoreApplication {
  /**
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } appName
   * @param { string } creator
   * @param { string } htmlIndexUrl
   * @param { string } description
   * @param { string } startMenuIconUrl
   * @param { string } taskbarIconUrl
   */
  constructor( type, id, appName, creator, htmlIndexUrl, description, iconUrl = '' ) {
    this.type = type;
    this.id = id;
    this.name = appName;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl; // https://cdn.jsdelivr.net/gh/user/repo@version/file
    this.description = description;

    this.rating = [];
    /** An array with the users id's
     * @type { string[] } */
    this.downloads = [];
    this.creationDate = '';
    this.lastUpdateDate = '';

    this.startMenuIconUrl = !iconUrl ? null : iconUrl;
    this.taskbarIconUrl = !iconUrl ? null : iconUrl;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class SystemApp {
  constructor(appName, startMenuIconUrl, taskbarIconUrl, executeFunction) {
    this.name = appName;
    this.executeFunction = (processId) => { executeFunction(processId); };
    this.startMenuIconUrl = startMenuIconUrl;
    this.taskbarIconUrl = taskbarIconUrl;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class UserVote {
  constructor( user, voteType ) {
    this.user = user;
    this.voteType = voteType;
    this.timestamp = '';
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// SweetAlert2
// https://github.com/sweetalert2/sweetalert2

class Notifications {
  constructor() {
    throw DevErrors.cantInstantiateStatic( 'Notifications' );
  }

  static successToast( title = 'Success' ) {
    Notifications.____toast( title )( { type: 'success' } );
  }

  static successPopUp( title, description = '' ) {
  }

  static infoToast( title ) {
    Notifications.____toast( title )( { type: 'info' } );
  }

  static infoPopUp( title, description = '' ) {
  }

  static warningToast( title ) {
    Notifications.____toast( title )( { type: 'warning' } );
  }

  static warningPopUp( title, description = '' ) {
  }

  static errorToast( title = 'Error' ) {
    Notifications.____toast( title )( { type: 'error' } );
  }

  static errorPopUp( title, description = '' ) {
  }

  static optionToast() {
  }

  /**
   * 
   * @param {any} title
   * @param { string } position Can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
   * Defaults to 'top-end'.
   * @param {any} timer
   */
  static ____toast( title, text = '', position = 'top-end', timer = 10000 ) {
    return Swal.mixin( {
      target: '#page-container',
      title: title,
      text: text,
      timer: timer,
      position: position,
      toast: true,
      showConfirmButton: false,
      allowOutsideClick: false
    } );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/**
 * Note: All methods are asynchronous.
 */
class HttpClient {
  constructor() {
    throw new Error( 'Can not instantiate the static classs HttpClient' );
  }

  /**
   * Awaitable (async/await) Fetch JSON object or an error.
   * 
   * @param { string } url
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static get( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Get, url, null, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( e => reject( e ) );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   *
   * @param {any} url
   * @param {any} body
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static post( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Post, url, body, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( e => { reject( e ); } );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param {any} url
   * @param {any} body
   * @param { boolean } jwtAuth Defaults to true.
   * 
   * @return { Promise<Response | Error> }
   */
  static put( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Put, url, body, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  static delete( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Delete, url, null, jwtAuth )
        .then( res => { return resolve( res ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  /**
   * Returns a Fetch Response object, false (and a notification to the user) if it's a guest session (not authenticated) or an error.
   * 
   * @param { RequestType } requestType
   * @param { string } url
   * @param { any } body
   * @param { boolean } jwtAuth Whether or not to use JWT authentication (from localStorage).
   * 
   * @return { Primise<Response | Error> }
   */
  static request( requestType, url, body = null, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {

      let requestObject = {
        method: requestType,
        headers: {}
      };

      if ( jwtAuth )
        requestObject.headers['Authorization'] = 'Bearer ' + localStorage.getItem( AUTH_TOKEN_ID );

      if ( requestType === RequestType.Post || requestType === RequestType.Put ) {
        requestObject.body = !body ? '' : JSON.stringify( body );
        requestObject.headers['Content-Type'] = 'application/json;charset=utf-8';
      }

      await fetch( url, requestObject )
        .then( res => {
          if ( res.status === 401 ) {
            Notifications.errorToast( 'The user must be authenticated.' );
            return false;
          }

          return resolve( res );
        } )
        .catch( err => { return reject( err ); } );
    } );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Authentication {
  constructor() {
  }

  init() {
    let jwt = Cookies.get( 'JWT' );

    try {

      jwt = jwt.split( ':' )[1].split( '.' );
      jwt.pop();
      jwt = jwt.join( '.' );

      //if ( !jwt )
      //  window.location = `${SERVER_ROOT_PATH}portfolio-os/auth`;

    } catch ( e ) {
      //
    } finally {
      Cookies.remove( 'JWT' );
      if ( jwt !== undefined )
        localStorage.setItem( AUTH_TOKEN_ID, jwt );
    }
  }

  /**
   * 
   * @param { object } additionalData <object> ( {} ) or null. Defaults to null.
   */
  JWTLocalStorageToCookie( additionalData = null ) {
    let data = !additionalData ? this.getJWT() : JSON.stringify( Object.assign( { JWT: this.getJWT() }, additionalData ) );
    Cookies.set( 'JWT', data );
    localStorage.removeItem( AUTH_TOKEN_ID );
  }

  getJWT() {
    return localStorage.getItem( AUTH_TOKEN_ID );
  }

  logout() {
    localStorage.removeItem( AUTH_TOKEN_ID );
    Cookies.remove( 'JWT' );
    window.location = `${SERVER_ROOT_PATH}portfolio-os/auth`;
  }

}
const authentication = new Authentication();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class GridSystemTemplates {
  constructor() {
    throw new Error( 'Can not intantiate the static class \'GridSystemTemplates\'' );
  }

   /**
    * If grid-y use width, if grid-x use height.
    * 
   * @param { string } id
   * @param { GridType } gridType
   * @param { number | null } widthPercent <number | null>
   * @param { number | null } heightPercent <number | null>
   */
  static rowTemplate( id, gridType, widthPercent = null, heightPercent = null ) {
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%;min-width: 10em !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%;min-height: 40em !important;`;
    const gridTypeClass = gridType === GridType.GridY ? 'grid-system-row-y' : 'grid-system-row-x';

    return `
      <div id="${id}" class="${gridType} ${gridTypeClass} unselectable" style="${widthPercent}${heightPercent}"></div>
    `;
  }

  /**
    * If grid-y use height, if grid-x use width.
    * 
   * @param { string } id
   * @param { number | null } widthPercent <number | null>
   * @param { number | null } heightPercent <number | null>
   * @param { boolean } droppable
   */
  static cellTemplate( id, widthPercent, heightPercent, droppable = false, additionalClasses ) {
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%; min-width: ${widthPercent.toString()}% !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%; min-height: ${heightPercent.toString()}% !important;`;
    droppable = droppable ? 'droppable' : '';

    return `
        <article id="${id}" class="cell grid-system-cell unselectable ${droppable} ${additionalClasses}" style="${widthPercent}${heightPercent}">&nbsp;</article>
      `;
  }
}
/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { GridSystem } */
let gridSystem = null;

class GridSystem {
  constructor() {
    if ( gridSystem )
      throw new Error( 'GridSystem can only have one instance (singleton)' );

    gridSystem = this;
    Object.freeze( gridSystem );
  }

  static _() { return gridSystem; }

  // TODO: Change from parameters to a config object.
  insertGrid( config ) {
    let rowCount = 0;
    let cellCount = 0;
    const rowWidth = config.gridType === GridType.GridY ? config.cellWidthPercent : 100;
    const rowHeight = config.gridType === GridType.GridX ? config.cellHeightPercent : 100;
    const cellWidth = config.gridType === GridType.GridX ? config.cellWidthPercent : 100;
    const cellHeight = config.gridType === GridType.GridY ? config.cellHeightPercent : 100;

    for ( let rowIdx = 0; rowIdx <= config.gridXCount; rowIdx++ ) {
      config.target.innerHTML += GridSystemTemplates.rowTemplate( config.rowIdsPrefix + ( rowIdx + 1 ).toString(), config.gridType, rowWidth, rowHeight );
      rowCount++;

      for ( let cellIdx = 0; cellIdx <= config.gridYCount; cellIdx++ ) {
        const lastInsertedRow = document.getElementById( `${config.rowIdsPrefix}${rowCount}` );
        lastInsertedRow.innerHTML += GridSystemTemplates.cellTemplate( config.cellIdsPrefix + ( cellCount + 1 ).toString(), cellWidth, cellHeight, config.droppableCell, config.additionalCellClasses );
        cellCount++;
      }
    }
  }

  findEmptyCell( cellIdsPrefix, cellCount ) {
    for ( let i = 0; i < cellCount; i++ ) {
      let currentCell = document.getElementById( `${cellIdsPrefix}${i + 1}` );
      if ( currentCell.childElementCount <= 0 )
        return currentCell;
    }

    return false;
  }
}

new GridSystem();

/*
 *
 * Copyright (c) 2018 Jo�o Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let dragAndDrop = null;

class DragAndDrop {
  constructor() {
    if ( dragAndDrop )
      throw new Error( 'There can only be one instance of DragAndDrop' );

    this.isDragging = Boolean;
    this.currentFreeDragElem = HTMLElement;
    // This is an hack because chrome only allows me to read dataTrasfer on the drop event
    // and I need to access it before the drop...
    this.currentDragData = '';
    this.currentFreeDragData = '';

    // #region UTILITIES

    this.utils = {
      populateDataTransfer: ( e ) => {
        const that = e.target;
        const id = that.id;
        const tag = that.localName;
        const classes = that.className;
        const data = `<${tag} id="${id}" class="${classes}"> ${that.innerHTML} </${tag}>`;
        e.dataTransfer.setData( 'text/plain', data );
        this.currentDragData = data;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';

        if ( classes.includes( 'window-manager' ) )
          this.currentFreeDragData = e.dataTransfer.getData( 'text/plain' );
      },

      acceptDrop: ( e ) => {
        e.preventDefault();
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.dropEffect = 'move';
      }

    };

    // #endregion

    dragAndDrop = this;
    Object.seal( dragAndDrop );

    this.init();
  }

  static _() { return dragAndDrop; }

  init() {
    this.updateDraggables();
    this.updateFreeDraggListeners();
  }

  // #region UPDATES

  updateDraggables() {
    this.cancelNonDraggableElements();
    this.updateDraggableElements();
    this.updateDraggListeners();
    this.updateDroppableListeners();
  }

  cancelNonDraggableElements() {
    Array.from( document.getElementsByTagName( 'img' ) ).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );

    Array.from( document.getElementsByTagName( 'a' ) ).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );
  }

  updateDraggableElements() {
    Array.from( document.getElementsByClassName( 'draggable' ) ).forEach( value => {
      value.setAttribute( 'draggable', 'true' );
    } );

    Array.from( document.getElementsByClassName( 'free-draggable' ) ).forEach( value => {
      value.setAttribute( 'draggable', 'true' );
    } );
  }

  // #endregion

  // #region LISTENERS

  updateDraggListeners() {
    const constrainedDraggableElems = document.getElementsByClassName( 'draggable' );

    if (constrainedDraggableElems.length <= 0)
      return;

    for (let i = 0; i < constrainedDraggableElems.length; i++) {
      constrainedDraggableElems[i].removeEventListener('dragstart', (e) => { this.dragstartHandler; });
      constrainedDraggableElems[i].addEventListener( 'dragstart', ( e ) => {
        e.stopPropagation();
        this.dragstartHandler( e );
      } );
    }
  }

  updateDroppableListeners() {
    const droppableElems = document.getElementsByClassName( 'droppable' );

    if (droppableElems.length <= 0)
      return;

    for (let i = 0; i < droppableElems.length; i++) {
      droppableElems[i].removeEventListener( 'dragover', ( e ) => { this.dragoverHandler; });
      droppableElems[i].addEventListener('dragover', (e) => {
        e.stopPropagation();
        this.dragoverHandler(e);
      }, false);

      droppableElems[i].removeEventListener( 'drop', ( e ) => { this.dropHandler; });
      droppableElems[i].addEventListener('drop', (e) => {
        e.stopPropagation();
        this.dropHandler( e );
      }, false);
    }
  }

  updateFreeDraggListeners() {
    const freeDraggableElems = document.getElementsByClassName('free-draggable');

    if (freeDraggableElems.length <= 0)
      return;

    for (let i = 0; i < freeDraggableElems.length; i++) {

      freeDraggableElems[i].removeEventListener( 'mousedown', ( e ) => { this.freeDragHandler( e ); } );
      freeDraggableElems[i].addEventListener( 'mousedown', ( e ) => {
        this.freeDragHandler( e );
        return false;
      } );

      window.removeEventListener( 'mouseup', ( e ) => { this.freeDragendHandler( e ); } );
      window.addEventListener( 'mouseup', ( e ) => {
        this.freeDragendHandler( e );
      } );
    }
  }

  // #endregion

  // #region EVENT HANDLERS

  dragstartHandler( e ) {
    e.stopPropagation();
    this.utils.populateDataTransfer( e );
    return false;
  }

  dragoverHandler( e ) {
    e.stopPropagation();
    const that = e.target;

    if ( that.children.length > 0 || that.localName !== 'article' || this.currentDragData === this.currentFreeDragData )
      return;

    this.utils.acceptDrop( e );
    return false;
  }

  dropHandler( e ) {
    e.stopPropagation();
    e.preventDefault();
    const that = e.target;

    const newElement = new DOMParser().parseFromString( e.dataTransfer.getData( 'text/plain' ), 'text/html' ).body.firstChild;
    document.getElementById( newElement.id ).remove();
    this.currentDragData = '';
    // data.classList.add('animated', 'bounceIn');
    that.insertAdjacentElement( 'afterbegin', newElement );
    this.updateDraggables();
    desktopManager.updateListeners();
  }

  freeDragHandler( e ) {
    e.stopPropagation();
    e.preventDefault();
    this.isDragging = true;
    this.currentFreeDragElem = DomUtils.getParentByTag( e.target, 'article' );

    window.addEventListener( 'mousemove', ( e ) => {
      this.mousePositionHandler( e );
    } );

    return false;
  }

  mousePositionHandler( e ) {
    e.stopPropagation();
    if ( !this.isDragging )
      return;

    // const offset = DomUtils.getOffset( this.currentFreeDragElem );

    this.currentFreeDragElem.style.top = ( e.pageY ).toString() + 'px';
    this.currentFreeDragElem.style.left = ( e.pageX ).toString() + 'px';
    // this.currentFreeDragElem.style.left = (e.pageX - this.currentFreeDragElem.offsetTop).toString() + 'px';
  }

  freeDragendHandler( e ) {
    e.stopPropagation();
    window.removeEventListener( 'mousemove', ( e ) => {
      this.mousePositionHandler( e );
    } );
    // Hack.
    this.isDragging = false;
    this.currentFreeDragData = '';
    this.currentFreeDragElem = null;
  }

  // #ENDREGION
}

new DragAndDrop();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d

let windowResizer = null;

class WindowResizer {
  constructor() {
    if ( windowResizer )
      throw new Error( 'There can only be one instance of WindowResizer' );

    this.currentResizer = null;

    windowResizer = this;
    Object.seal( windowResizer );
  }

  get _() { return windowResizer; }

  updateListeners() {
    const resizers = document.getElementsByClassName( 'resizer' );

    for ( let i = 0; i < resizers.length; ++i ) {
      resizers[i].addEventListener( 'mousedown', ( e ) => {
        e.preventDefault();
        this.currentResizer = e.target;
        window.addEventListener( 'mousemove', resizeWindowHandler );
        // Multiple cancel events just to be sure.
        window.addEventListener( 'mouseup', this.stopResizing );
        window.addEventListener( 'mouseleave', this.stopResizing );
        window.addEventListener( 'mousemouseout', this.stopResizing );
      } );
    }
  }

  stopResizing( e ) {
    e.preventDefault();
    window.removeEventListener( 'mousemove', resizeWindowHandler );
    this.currentResizable = null;
  }
}

const resizeWindowHandler = ( e ) => {
  const thisWindow = DomUtils.getParentByClassInclude( windowResizer.currentResizer, 'resizable' );
  const currWidth = e.pageX - thisWindow.getBoundingClientRect().left;
  const currHight = e.pageY - thisWindow.getBoundingClientRect().top;

  if ( currWidth >= 577 )
    thisWindow.style.width = currWidth.toString() + 'px';

  if ( currHight >= 268 )
    thisWindow.style.height = currHight.toString() + 'px';
};

new WindowResizer();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Pass to the server.
class FileSystem {

  __fetchFileSystem() {

  }

  /**
   * Get a directory using its complete path.
   * It returns false if the directory was not found.
   * 
   * @param { string[] } name
   */
  getDiretory( path ) {
    let dir = this.structure;
    let currDir = dir;

    for ( let i = 0; i < path.length; ++i ) {
      try {
        currDir = dir[path[i]];

        if ( !currDir ) {
          try {
            currDir = dir;
            currDir = dir[path[i] + '/'];

            if ( !currDir )
              return false;

            dir = currDir;
          } catch ( e ) {
            return false;
          }
        }

        dir = currDir;
      } catch ( e ) {
        return false;
      }
    }

    return dir;
  }

  /**
   * [CONNECT TO THE DB]
   * 
   * @param { string } path E.g: "root/users/local/"
   * @param { DirectoryModel } newDirectory
   */
  addDirectory( path, newDirectory ) {
    // Get directory.
    const dir = [];
    dir.push( newDirectory );
  }

  ____getDiretoryV2( path ) {
    let dir = this.____fsv2;
    let currDir = dir;

    for ( let i = 0; i < path.length; ++i ) {
      try {
        const thisDirContent = dir.content;

        for ( let j = 0; j < thisDirContent.length; ++j ) {
          if ( thisDirContent[j].name === path[i].trim() || thisDirContent[j].name === path[i].trim() + '/' )
            dir = thisDirContent[j];
          else
            return false;
        }

      } catch ( e ) {
        return false;
      }
    }

    return dir;
  }

  /**
   * IN DEVELOPMENT. ONLY A CONCEPT.
   */
  get ____fsv2() {
    return new SystemDirectoryModel( 'root/',
      [

        new SystemDirectoryModel( 'portfolioOS/', [
          new SystemDirectoryModel( 'documents/', [] ),
          new SystemDirectoryModel( 'images/', [] ),
          new SystemDirectoryModel( 'videos/', [] ),
          new SystemDirectoryModel( 'music/', [] )
        ] ),
        new SystemDirectoryModel( 'applications/', [
          new SystemDirectoryModel( 'system/', [
            new SystemApp( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, console.log ),
            new SystemApp( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, console.log )
          ] ),
          new DirectoryModel( PermissionType.UserWrite, 'appStore/', null, null, [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ] )
        ] ),
        new SystemDirectoryModel( 'users/', [
          new SystemDirectoryModel( 'local/', [
            new DirectoryModel( PermissionType.UserWrite, 'desktop/', null, null, [] ),
            new DirectoryModel( PermissionType.UserWrite, 'documents/', null, null, [
              new FileModel( FileSystemItemType.File, PermissionType.UserDelete, 'My Document', 'Hello World.' )
            ] ),
            new DirectoryModel( PermissionType.UserWrite, 'images/', null, null, [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Image', 'www' )
            ] ),
            new DirectoryModel( PermissionType.UserWrite, 'videos/', null, null, [] ),
            new DirectoryModel( PermissionType.UserWrite, 'music/', null, null, [] ),
            new DirectoryModel( PermissionType.UserRead, 'shared/', null, null, [] )
          ] ),
          new DirectoryModel( PermissionType.Admin, 'public/', null, FileSystemItemType.ExecutableDirectory, [] )
        ] )

      ]
    );
  }

  get structure() {

    return {
      "root/": {
        // For shivayl (João Neves).
        "portfolioOS/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, PermissionType.UserRead, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, PermissionType.UserRead, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, PermissionType.UserRead, 'My Video', 'www' )
          ],
          "music/": []
        },
        "applications/": {
          "system/": [
            new SystemApp( 'Terminal', '', '', console.log ),
            new SystemApp( 'Explorer', '', '', console.log )
          ],
          "appStore/": [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ]
        },
        "users/": {
          "local/": {
            "documents/": [
              new FileModel( FileSystemItemType.File, PermissionType.UserDelete, 'My Document', 'Hello World.' )
            ],
            "images/": [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Image', 'www' )
            ],
            "videos/": [
              new FileModel( FileSystemItemType.FileUrl, PermissionType.UserDelete, 'My Video', 'www' )
            ],
            "music/": [],
            "shared/": [],
            "trash/": []
          },
          // "public" is the PortfolioOS's users profiles.
          "public/": []
        }
      }
    };

  }
}

const fileSystem = new FileSystem();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class TaskbarIcon {
  /**
   * 
   * @param {string} windowId
   * The window that this icon is linked to.
   * 
   * @param {string} iconUrl
   * The image url of this icon.
   */
  constructor(windowId, iconUrl) {
    this.id = TaskbarIcon.idPrefix + windowId;
    this.windowId = windowId;
    this.iconContainerElem = document.getElementById('icon-container');
    this.iconUrl = IMG_PATH + 'default-taskbar-icon-white.svg';
    this.isMinimized = Boolean;

    if (iconUrl) this.iconUrl = iconUrl;

    this.init();
  }

  static get idPrefix() {
    return 'icn_';
  }

  get template() {
    return `
      <li id="${this.id}">
        <img src="${this.iconUrl}" alt="Menu Icon" class="icon" />
      </li>`;
  }

  // METHODS:
  init () {
    this.iconContainerElem.innerHTML += this.template;
    this.isMinimized = false;
  }

  kill() {
    document.getElementById( this.id ).remove();
  }

  minimized() {
    document.getElementById( this.id ).classList.add( 'minimized' );
    this.isMinimized = true;
  }

  maximized() {
    document.getElementById( this.id ).classList.remove( 'minimized' );
    this.isMinimized = false;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let taskbarManager = null;

class TaskbarManager {
  constructor() {
    if ( taskbarManager )
      throw new Error( 'There can only be one instance of TaskbarManager.' );

    this.iconContainerElem = document.getElementById( 'icon-container' );
    this.icons = new Dictionary();

    taskbarManager = this;
    Object.seal( taskbarManager );
  }

  // #region TASKBAR ICONS
  /**
    * It adds an icon to the taskbar.
    * Returns the new TaskbarIcon instance.
    * 
    * @param {string} windowId 
    * The window that this icon is linked to.
    */
  addIcon(windowId, taskbarIconUrl) {
    const newIcon = new TaskbarIcon(windowId, taskbarIconUrl);
    this.icons.add(TaskbarIcon.idPrefix + windowId, newIcon);
    return newIcon;
  }

  killIcon( windowId ) {
    const thisWindow = this.findIconInstance( windowId );
    // For the AddNewApp windows.
    if ( !thisWindow )
      return;

    thisWindow.kill();
    this.icons.remove( TaskbarIcon.idPrefix + windowId );
  }

  minimizedIcon(windowId) {
    this.findIconInstance(windowId).minimized();
  }

  maximizedIcon(windowId) {
    this.findIconInstance(windowId).maximized();
  }
  // #endregion

  // #region UTILITIES:
  findIconInstance(windowId) {
    return this.icons.getByKey(TaskbarIcon.idPrefix + windowId);
  }
  // #endregion
}

new TaskbarManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Add the z-index of each each window.

class Window {
  /**
   * 
   * @param { string } processId
   * @param { string } title
   * @param { string } content
   */
  constructor( processId, title = '', content ) {
    this.id = `${Window.idPrefix}${processId}`;
    this.title = title;
    this.content = content;
    this.icon = TaskbarIcon;

    this.isMinimized = false;
    this.init();
  }

  get element() { return document.getElementById( this.id ); }
  static get idPrefix() { return 'win-'; }

  get windowTemplate() {
    return `
      <article class="window-manager grid-y resizable selected-win" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell small-6 medium-8 large-8">
              <p class="window-title free-draggable">${this.title}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}maximize-white.svg" alt="Maximize Window Icon" class="max-size-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
        <section class="content">
          ${this.content}
        </section>
        <div class="resizer"></div>
      </article>
    `;
  }

  /**
   * Note: Currently in only supports having one modal.
   * @param {any} content
   */
  static modalTemplate( content ) {
    return `
      <div class="reveal" id="modal" data-reveal>
        ${content}
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
  }

  static appStoreAppWindowTemplate( appTitle, codePenUserName, penCode ) {
    return `
      <iframe
        scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" allowpaymentrequest="false" referrerpolicy="origin-when-cross-origin"
        sandbox="allow-scripts allow-same-origin"
        height="406" style="width: 100%;"
        class="user-app-window"
        title="${appTitle}"
        src="${Utils.spoofRefererRedirectUrl( `https://codepen.io/${codePenUserName}/embed/${penCode}/?height=406&theme-id=0&default-tab=result`)}">
        See the Pen <a href='${HIDE_REFERER}https://codepen.io/${codePenUserName}/pen/${penCode}/'  rel="noreferrer">${appTitle}</a> by João Neves
        (<a href='${HIDE_REFERER}https://codepen.io/${codePenUserName}'  rel="noreferrer">@${codePenUserName}</a>) on <a href='${HIDE_REFERER}https://codepen.io'  rel="noreferrer">CodePen</a>.
      </iframe>
    `;
  }

  init() {
    document.getElementById( 'window-manager-container' ).innerHTML += this.windowTemplate;
  }

  kill() {
    if ( this.element ) this.element.remove();
  }

  minimize() {
    this.element.style.display = 'none';
    this.isMinimized = true;
  }

  unminimize() {
    this.element.style.display = 'block';
    this.isMinimized = false;
  }

  maxSize() {
    this.element.style.width = '100%';
    this.element.style.height = '92%';
    this.element.style.top = '0%';
    this.element.style.left = '0%';
  }

  select() {
    if ( this.element ) this.element.classList.add( 'selected-win' );
  }

  unselect() {
    this.element.classList.remove( 'selected-win' );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let windowManager = null;

class WindowManager {
  constructor() {
    if ( windowManager )
      throw new Error( 'There can only be one instance of WindowManager.' );

    this.windows = new Dictionary();

    windowManager = this;
    Object.seal( windowManager );
  }

  /**
   * Open a new window from a running process.
   * @param { string } processId
   * @param { string } content
   */
  openNewWindow( processId, content = '' ) {
    const thisAppInstance = processManager.getAppInstance( processId );
    this.openNewWindowCustom(
      processId,
      thisAppInstance.name,
      content,
      true,
      thisAppInstance.taskbarIconUrl
    );
  }

  async openNewAppStoreAppWindow( processId, appStoreApp ) {
    // "&#x2F;" = "/" (HTML character)
    const codePenMeta = appStoreApp.htmlindexurl.split( '&#x2F;' );
    this.openNewWindowCustom(
      processId,
      'USER APPLICATION',
      Window.appStoreAppWindowTemplate( appStoreApp.name, codePenMeta[0], codePenMeta[1] ),
      true,
      ''
    );
  }

  /**
   * To use as a modal. It does not add a taskabar icon by default. Use .openNewWindow() for application windows.
   */
  openNewWindowCustom( processId, title, content = '', addTaskbarIcon = false, taskbarIconUrl = null, width = null, heigth = null ) {
    const thisWindow = new Window( processId, title, content );

    if ( addTaskbarIcon ) {
      const newTaskbarIcon = taskbarManager.addIcon( thisWindow.id, taskbarIconUrl );
      thisWindow.icon = newTaskbarIcon;
    }

    /** @type { HTMLElement } */
    const thisWindowElem = thisWindow.element;
    thisWindowElem.style.zIndex = this.windows.length > 0 ? ( DomUtils.getStyleProp( this.windows.lastValue.element, 'z-index' ) + 1 ).toString() : ( 1 ).toString();
    thisWindowElem.style.width = !width ? '70%' : width;
    thisWindowElem.style.height = !heigth ? '80%' : heigth;
    thisWindowElem.classList.add( 'anim' );
    thisWindowElem.classList.add( 'zoom-in' );
    setTimeout( () => {
      thisWindowElem.classList.remove( 'anim' );
      thisWindowElem.classList.remove( 'zoom-in' );
    }, 1000 );

    this.unselectAllWindows();
    this.windows.add( thisWindow.id, thisWindow );
    thisWindow.select();
    this.updateListeners();
    dragAndDrop.cancelNonDraggableElements();
    dragAndDrop.updateFreeDraggListeners();
    windowResizer.updateListeners();
  }

  openNewModal( content ) {
    const target = document.getElementById( 'window-manager-container' );
    $( '#modal' ).remove();
    target.innerHTML += Window.modalTemplate( content );
    $( '#modal' ).foundation();
    $( '#modal' ).foundation( 'open' );
    document.querySelector( '[data-reveal]' ).addEventListener( 'closed.zf.reveal', () => {
      $( '#modal' ).remove();
      this.updateListeners();
      this.updateFreeDraggListeners();
    } );
  }

  // #region WINDOW ACTION METHODS

  closeWindow( windowId ) {
    const thisWindow = this.findWindowInstance( windowId );
    // For AddNewApp windows.
    if ( !thisWindow )
      return;

    thisWindow.kill();
    taskbarManager.killIcon( windowId );
    this.windows.remove( windowId );
    this.updateListeners();
  }

  minimizeWindow( windowId ) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon( windowId );
  }

  unminimizeWindow( windowId ) {
    this.findWindowInstance( windowId ).unminimize();
    taskbarManager.maximizedIcon( windowId );
  }

  maxSizeWindow( windowId ) {
    this.findWindowInstance( windowId ).maxSize();
  }

  unselectAllWindows() {
    this.windows.forEachValue( ( window ) => {
      window.unselect();
    } );
  }

  moveWindowToFront( window ) {
    const windowIdx = this.windows.findIndexOfKey( window.id );
    if ( windowIdx === false )
      return;

    this.windows.remove( window.id );

    // Update the index of all the other windows.
    for ( let i = windowIdx; i < this.windows.length; ++i ) {
      const thisWindow = this.windows.getByIndex( i );
      if ( !thisWindow )
        continue;

      thisWindow.element.style.zIndex = i + 1;
      thisWindow.unselect();
    }

    const lastWindow = this.windows.lastValue;
    if ( !lastWindow )
      window.element.style.zIndex = ( 1 ).toString();
    else
      window.element.style.zIndex = ( parseInt( lastWindow.element.style.zIndex ) + 1 ).toString();

    this.windows.add( window.id, window );
  }

  // #endregion

  // #region LISTENERS:

  updateListeners() {
    // WINDOW CLICK.
    this.windows.forEachValue( ( window ) => {
      window.element.addEventListener( 'click', ( e ) => {
        this.moveWindowToFront( window );
        window.select();
        } );
    } );

    // CLOSE WINDOW CLICK.
    const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');
    for (let i = 0; i < allCloseWindowsBtns.length; i++) {
      allCloseWindowsBtns[i].removeEventListener('click', this.__closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.__closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    }

    // MINIMIZE WINDOW CLICK.
    const allMinimizeWindowsBtns = document.querySelectorAll( '[id^="win-"] .minimize-window' );
    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener( 'click', this.__minimizeWindowHandler );
      allMinimizeWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.__minimizeWindowHandler( e, allMinimizeWindowsBtns[i] );
      } );
    }

    // MAX-SIZE WINDOW CLICK.
    const allMaxWindowsBtns = document.querySelectorAll( '[id^="win-"] .max-size-window' );
    for ( let i = 0; i < allMinimizeWindowsBtns.length; i++ ) {
      allMaxWindowsBtns[i].removeEventListener( 'click', this.maxSizeWindow );
      allMaxWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.__maxSizeWindowHandler( e, allMaxWindowsBtns[i] );
      } );
    }

    // TASKBAR ICONS CLICK.
    const allTaskbarIcons = document.querySelectorAll( '[id^="icn_"] .icon' );
    for (let i = 0; i < allTaskbarIcons.length; i++) {
      allTaskbarIcons[i].removeEventListener( 'click', this.__taskbarIconsHandler );
      allTaskbarIcons[i].addEventListener( 'click', ( e ) => {
        this.__taskbarIconsHandler( e, allTaskbarIcons[i] );
      } );
    }
  }

  // #endregion

  // #region EVENT HANDLERS:

  __closeWindowHandler(e, closeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( closeWindowBtn, 'win-' );
    this.closeWindow( thisWindow.id );
  }

  __minimizeWindowHandler(e, minimizeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( minimizeWindowBtn, 'win-' );
    this.minimizeWindow( thisWindow.id );
  }

  __maxSizeWindowHandler( e, maxSizeWindowBtn ) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( maxSizeWindowBtn, 'win-' );
    this.maxSizeWindow( thisWindow.id );
  }

  __taskbarIconsHandler(e, taskbarIcon) {
    e.stopPropagation();
    const thisIconId = DomUtils.getParentByIdInclude( taskbarIcon, 'icn_win-' ).id;
    const thisWindowId = Utils.parseIDs(thisIconId)[1];
    const thisWindow = this.findWindowInstance( thisWindowId );

    if ( thisWindow.isMinimized )
      this.unminimizeWindow( thisWindowId );
    else
      this.minimizeWindow( thisWindowId );
  }

  // #endregion


  // #region UTILITIES

  findWindowInstance( windowId, Callback ) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }

  // #endregion
}

new WindowManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { UserAppsManager } */
let userAppsManager = null;

class UserAppsManager {
  constructor() {
    if ( userAppsManager !== null )
      return null;

    this.installedApps = new Dictionary();

    userAppsManager = this;
    Object.seal( userAppsManager );
  }

  /**
   * Executes and returns the executed app, or returns false if not found.
   * @param { string } appName
   * @param { string } processId
   */
  executeApplication( appName, processId ) {
    /** @type { AppStoreApplication } */
    const thisApp = this.installedApps.getByKey( appName );

    if ( !thisApp ) {
      Notifications.errorToast( `App "${appName}" not found.` );
      return false;

    } else {
      windowManager.openNewAppStoreAppWindow( processId, thisApp );
      return thisApp;
    }
  }

  /**
   * 
   * @param { AppStoreApplication } appStoreApplication
   */
  bindApplication( appStoreApplication ) {
    this.installedApps.add( appName, appStoreApplication );
  }

  async __fetchInstalledApps() {
    let installedApps = await HttpClient.get( API_ROOT_PATH + 'user/installed-apps' );
    if ( !installedApps.ok ) {
      Notifications.errorToast( 'There was an error while fetching the installed apps. Please try again later.' );
      return false;
    }

    installedApps = await installedApps.json();
    this.installedApps.clear();

    for ( let i = 0; i < installedApps.length; ++i ) {
      this.installedApps.add( installedApps[i].name, installedApps[i] );
    }

    return true;
  }
}

new UserAppsManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class SystemAppsManager {
  constructor() {
    this.systemApps = new Dictionary();
  }

  /**
   * 
   * @param {string} appName
   * @param {string} startMenuIconUrl
   * @param {string} taskbarIconUrl
   * @param {function} executeFunction
   */
  bindApplication( appName, startMenuIconUrl, taskbarIconUrl, executeFunction ) {
    this.systemApps.add( appName, new SystemApp( appName, startMenuIconUrl, taskbarIconUrl, executeFunction ) );
  }

  /**
   * It executes the system application specified with the its bind name returning true, or returns false if not found.
   * 
   * @param {string} appName
   * @param {string} processId
   * 
   * @returns { void | false }
   */
  executeApplication( appName, processId ) {
    /** @type { SystemApp } */
    const thisApp = this.systemApps.getByKey( appName );
    if ( !thisApp )
      return false;

    thisApp.executeFunction( processId );
    return true;
  }

  getAppInstance(appName) {
    return this.systemApps.getByKey(appName);
  }

  getAllApps() {
    return this.systemApps.getAllValues();
  }
}

const systemAppsManager = new SystemAppsManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Trash {
  constructor( processId ) {
    this.id = `trash-${processId}`;
    this.processId = processId;

    this.items = [];

    this.init();
  }

  init() {
    windowManager.openNewWindow( this.processId, terminalTemplates.window( this.id ) );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */


/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class TerminalTemplates {
  constructor() {
    this.lineContent = '';
  }

  get welcomeMessage() { return 'Welcome to the Portfolio - OS Terminal!'; };

  window(id) {
    return `
      <section class="grid-y terminal" id="${id}">
      
      </section>
    `;
  }

  /**
   * 
   * @param {function} content 
   * withInfo() | withInput()
   */
   addLine() {
      return `
        <article class="grid-x input-group line">
          ${this.lineContent}
        </article>
      `;

     this.lineContent = '';
   }

  /**
   * 
   * @param {string} content
   */
  withInfo( content = '', additionalClasses = '') {
    this.lineContent = `
      <p class="info ${additionalClasses}">${content}<p>
    `;

    return this;
  }

  withLastInput(lastInput = '') {
    this.lineContent = `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <p class="cell medium-11 no-border input" type="text" autofocus>${lastInput}<p>
    `;

    return this;
  }

  withInput() {
    this.lineContent = `
      <label class="cell medium-1 middle input-icon">&gt;</label>
      <input id="active-input" class="cell medium-11 no-border input" type="text" autofocus>
    `;

    return this;
  }
}

const terminalTemplates = new TerminalTemplates();

/*
 *
 * Copyright (c) 2018 Jo�o Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const initAnimMessage = terminalTemplates.welcomeMessage;
const INIT_ANIM_DELAY = 50;

class Terminal {
  constructor(processId) {
    this.id = `terminal-${ processId }`;
    this.processId = processId;

    this.initAnimTarget = HTMLElement;
    this.initAnimI = 0;

    this.currentInput = '';
    this.currentDir = fileSystem.structure["root/"];
    this.currentDirName = 'root/';
    this.currentPath = ['root/'];

    this.commandHistory = new List( 'string' );
    this.currentCmdHistIndex = 0;
    this.insertedLastCmd = false;
    this.maxCommandHistoryLength = 10;

    this.init();
  }

  get element() { return document.getElementById( this.id ); }
  get activeInput() { return document.getElementById( 'active-input' ); }

  init() {
    windowManager.openNewWindow( this.processId, terminalTemplates.window( this.id ) );

    this.element.innerHTML += terminalTemplates.withInfo().addLine();
    this.element.addEventListener( 'click', () => { this.__focusActiveInput() } );
    this.initAnimTarget = document.querySelector(`#${ this.id } > .line > .info`);
    this.__typeWriterAnimation();
  }

  __typeWriterAnimation() {
    if (this.initAnimI < initAnimMessage.length) {
      this.initAnimTarget.innerHTML += initAnimMessage[this.initAnimI];
      ++this.initAnimI;
      setTimeout( this.__typeWriterAnimation.bind( this ), INIT_ANIM_DELAY );

    } else {
      this.initAnimI = 0;
      setTimeout( () => { this.addNewInput(); }, 500 );
    }
  }

  /**
   *
   * @param {string} lastInput
   * (optional) Default -> ""
   * 
   * @param {string} aditionalInfo
   * (optional) Default -> ""
   */
  __deativateLastInput( lastInput = null, aditionalInfo = '' ) {
    const currentActiveInput = this.activeInput;

    if (currentActiveInput) {
      if ( !lastInput )
        lastInput = this.currentInput;

      DomUtils.getParentByClassInclude( currentActiveInput, 'grid-x input-group line' ).remove();
      this.element.innerHTML += terminalTemplates.withLastInput( lastInput ).addLine();

      if (aditionalInfo !== '')
        this.element.innerHTML += terminalTemplates.withInfo( aditionalInfo ).addLine();
    }
  }

  log( info ) {
    this.element.innerHTML += terminalTemplates.withInfo( info ).addLine();
  }

  __addCurrentDirLine() {
    this.element.innerHTML += terminalTemplates.withInfo( this.currentPath.join( '' ), 'current-path' ).addLine();
  }

  addNewInput() {
    this.__addCurrentDirLine();
    this.element.innerHTML += terminalTemplates.withInput().addLine();
    const activeInput = this.activeInput;
    this.__focusActiveInput();
    this.element.removeEventListener('focus', this.__focusActiveInput, true);
    this.element.addEventListener('focus', this.__focusActiveInput, true);
    this.element.removeEventListener('click', this.__focusActiveInput, true);
    this.element.addEventListener('click', this.__focusActiveInput, true);
    activeInput.addEventListener( 'blur', this.__focusActiveInput, true );

    activeInput.addEventListener( 'keydown', ( e ) => {
      if ( e.keyCode === 13 ) {
        this.currentInput = activeInput.value;
        this.executeCommand( e );
      } else if ( e.keyCode === 38 ) {
        this.givePreviousCommand( e, 'previous' );
      } else if ( e.keyCode === 40 ) {
        this.givePreviousCommand( e, 'next' );
      }
    } );
  }

  __focusActiveInput() {
    if ( this.activeInput )
      this.activeInput.focus();
  }

  executeCommand( e ) {
    e.preventDefault();
    const parsedInput = this.parseInput( this.currentInput );
    const cmd = parsedInput.cmd;
    const val = parsedInput.value;
    this.__deativateLastInput();

    switch ( cmd.toUpperCase() ) {
      case 'CLEAR':
      case 'CLS':
        this.clear();
        break;
      case 'DIR':
      case 'LS':
        this.listCurrentDirectory();
        break;
      case 'CD':
        if ( !val[0] )
          this.log( this.currentDirName );
        else {
          if ( val[0] === '..' || val[0] === '--' )
            this.previousDirectory();
          else if ( val[0] === '/' || val[0] === '\\' )
            this.goToRoot();
          else
            this.changeDirectory( [val[0]] );
        }
        break;
      case 'CD..':
      case 'CD-':
        this.previousDirectory();
        break;
      case 'CD/':
      case 'CD\\':
        this.goToRoot();
        break;
      case 'HELP':
      case 'H':
        this.printHelp();
        break;
      case 'RUN':
        break;
      default:
        this.log( `"${cmd}" is not recognized as an internal or external command, operable program or executable file.` );
    }

    this.__commandHistoryController( this.currentInput );
    this.currentCmdHistIndex = this.commandHistory.length - 1;
    this.insertedLastCmd = false;
    this.addNewInput();
  }

  /**
   * 
   * @param { Event } e
   * @param { string } direction 'previous' | 'next'
   */
  givePreviousCommand( e, direction ) {
    e.preventDefault();
    if ( this.insertedLastCmd ) {
      if ( this.currentCmdHistIndex > 0 && direction === 'previous' )
        --this.currentCmdHistIndex;
      else if ( this.currentCmdHistIndex < this.commandHistory.length - 1 && direction === 'next' )
        ++this.currentCmdHistIndex;
    }

    const cmd = this.commandHistory.get( this.currentCmdHistIndex );

    if ( cmd !== undefined )
      this.activeInput.value = cmd;

    this.insertedLastCmd = true;
  }

  // #region COMMAND HANDLERS

  printHelp() {
    this.log(
      `Commands: </br>
       CD => Goes to a provided directory, or displays the current directory name</br>
       CD.. (or) CD- => Goes to the previous directory</br>
       CD/ (or) CD\\ => Goes to root</br>
       CLEAR (or) CLS => Clear all previous console entries
       DIR (or) LS => Lists all the files and subdirectories in the current directory</br>`
    );
  }

  listCurrentDirectory() {
    let dirInfo = '';

    for ( let key in this.currentDir ) {
      if ( typeof this.currentDir[key] !== 'object' )
        continue;
      else if ( this.currentDir[key] instanceof FileModel )
        dirInfo += this.currentDir[key].name + '<br>';
      else if ( this.currentDir[key] instanceof DirectoryModel )
        dirInfo += this.currentDir[key].name + '/<br>';
      else
        dirInfo += key + '<br>';
    }

    this.log( dirInfo );
  }

  goToRoot() {
    this.currentPath = ['root/'];
    this.currentDirName = 'root/';
    this.currentDir = fileSystem.structure['root/'];
  }

  /**
   * 
   * @param { string[] } dirName
   */
  changeDirectory( dirName ) {
    dirName = dirName[0].split( '/' );

    let path;
    if ( dirName[0] === 'root/' || dirName[0] === 'root' )
      path = dirName;
    else
      path = this.currentPath.slice().concat( dirName );

    const newDir = fileSystem.getDiretory( path );

    if ( !newDir )
      return this.log( `'${dirName.join( '/' )}' is not a valid directory name.` );

    for ( let i = 0; i < path.length; ++i ) {
      if ( !path[i].endsWith( '/' ) )
        path[i] += '/';
    }

    this.currentDirName = path[path.length - 1];
    this.currentPath = path;
    this.currentDir = newDir;
  }

  previousDirectory() {
    if ( this.currentDirName === 'root/' )
      return;

    this.currentPath.pop();
    this.currentDirName = this.currentPath.last();
    this.currentDir = fileSystem.getDiretory( this.currentPath );
  }

  clear() {
    this.element.innerHTML = '';
  }

  createFile() { }

  // #endregion

  __commandHistoryController( cmd ) {
    if ( this.commandHistory.length >= this.maxCommandHistoryLength )
      this.commandHistory.remove( 0 );

    this.commandHistory.add( cmd );
  }

  /**
   * Terminal input parser.
   * Returns:(object) { cmd: 'String', value: 'String[]' }
   * @param {string} input
   *
   */
  parseInput( input ) {
    const splitInput = input.split( /\s/ );

    return {
      cmd: splitInput[0],
      value: splitInput.slice( 1, splitInput.length )
    };
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class AddNewAppTemplate.' );
  }

  static content( penCodeUsername = '' ) {
    penCodeUsername = !penCodeUsername || penCodeUsername === '' ? '' : `value="${penCodeUsername}/"`;

    return `
      <form class="grid-container add-new-app">
        <section class="grid-x wrapper" >

          <div class="cell">
            <h5>Application Name</h5>
            <input type="text" name="name" class="name" required>
          </div>

          <div class="cell">
            <h5>Descrition</h5>
            <textarea type="text" name="description" class="description"></textarea>
          </div>

          <div class="cell">
            <h5>CodePen Meta</h5>
            <input type="text" name="index-page" class="index-page" placeholder="codePenUserame/penCode" ${penCodeUsername} required>
          </div>

          <div class="cell">
            <h5>Icon URL</h5>
            <input type="text" name="icon-url" class="icon-url" placeholder="Leave blank for the default icon">
          </div>

          <div class="cell">
            <button class="button help" data-open="modal">Help</button>
            ${MyProfileTemplates.button( 'Submit App', 'addNewApp') }
          </div>

        </section>
      </form>
    `;
  }

  static get helpModalContent() {
    return `
      <h1>Help</h1>
      
      <p>
        For security reasons, Portfolio-OS only accepts apps stored publicly on https://codepen.io/.
      </p>

      <p>
        To add a new app add your CodePen's username and pen code of your application.
      </p>

      <p>
        Example: "shivayl/qVVbdO"
      </p>

      <p>
        You can add your CodePen's username to your social accounts in order to ease the process.
      </p>

      <p>
        All apllications that link to files that are not hosted on a public GitHub repository will be deleted.
      </p>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppModel {
  constructor() {
    this.isOpen = false;
    this.processId = '';
  }

  async getThisUserCodepenUsername() {
    try {
      let res = await HttpClient.get( `${API_ROOT_PATH}user/profile/links/codepen` );
      if ( !res.ok )
        return false;
      else if ( res.status === 404 ) {
        Notifications.infoToast( 'If you add your CodePen username to your profile, it will be automaticaly added to the AddNewApp formulary.' );
        return false;
      }

      res = await res.json();
      if ( res.length <= 0 )
        return false;

      return res[0].urlpath;

    } catch ( e ) {
      return false;
    }
  }

  /**
   * 
   * @param { object } formData
   * 
   * @returns { Response | Error }
   */
  async addNewApp( formData ) {
    // VALIDATION
    if ( formData.appName.length <= 2 )
      return Notifications.errorToast( 'The application name must have more than 2 characters.' );
    else if ( formData.indexPage.split( '/' ).length !== 2 )
      return Notifications.errorToast( 'The application CodePen\'s index page is not valid.' );
    
    const appModel = new AppStoreApplication(
      FileSystemItemType.Executable,
      '',
      formData.appName,
      'user-name',
      formData.indexPage,
      formData.appDescription,
      formData.startMenuIconUrl
    );

    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}app-store`, appModel );
      if ( !res.ok ) {
        res = await res.json();
        Notifications.errorToast( res.msg );
        return res;
      }

      Notifications.successToast( 'Application successfully added.' );

    } catch ( e ) {
      throw new Error( e );
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppView {
  constructor() {
  }

  helpBtnElem( processId ) { return DomUtils.get( `#${Window.idPrefix}${processId} .help` ); }
  closeWindowBtnElem( processId ) { return DomUtils.get( `#${Window.idPrefix}${processId} .close-window` ); }
  addNewAppBtnElem( processId ) { return DomUtils.get( `#${Window.idPrefix}${processId} .addNewApp` ); }

  getFormData( processId ) {
    const windowQuery = `#${Window.idPrefix}${processId}`;

    const appName = DomUtils.get( `${windowQuery} .name` ).value;
    const appDescription = DomUtils.get( `${windowQuery} .description` ).value;
    const appIndexPage = DomUtils.get( `${windowQuery} .index-page` ).value;
    const iconUrl = DomUtils.get( `${windowQuery} .icon-url` ).value;

    return {
      appName: appName,
      appDescription: appDescription,
      indexPage: appIndexPage,
      startMenuIconUrl: iconUrl,
      taskbarIconUrl: iconUrl
    };
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppController {
  constructor() {
    this.model = new AddNewAppModel();
    this.view = new AddNewAppView();
  }

  async openWindow() {
    if (this.model.isOpen)
      return;

    const thisUserCodePenUsername = await this.model.getThisUserCodepenUsername();
    this.model.processId = Utils.randomString( 4 );
    windowManager.openNewWindowCustom(
      this.model.processId,
      'Add New App',
      AddNewAppTemplates.content( thisUserCodePenUsername ),
      false, null,
      '30%', '65%'
    );
    this.model.isOpen = true;

    this.view.addNewAppBtnElem( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      try {
        const res = await this.model.addNewApp( this.view.getFormData( this.model.processId ) );
        // TODO: (FRONTEND) Prompt the user if not successful.
        this.view.closeWindowBtnElem( this.model.processId ).click();
        console.debug( res );

      } catch ( e ) {
        console.debug( e );
        return;
      }

    } );

    this.view.helpBtnElem( this.model.processId ).addEventListener( 'click', () => {
      windowManager.openNewModal( AddNewAppTemplates.helpModalContent );
    } );

    this.view.closeWindowBtnElem( this.model.processId ).addEventListener( 'click', () => {
      this.model.isOpen = false;
    });
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreTemplates {
  // TODO: Add the search panel as a dropdown under the top-bar, with filters (number of downloads; vote ratio).
  static window( id ) {
    return `
      <section class="grid-x app-store" id="${id}">

        <div class="top-bar">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li>
                <a href="#">Explore</a>
                <ul class="menu vertical">
                  <li><a href="#">Top Rated</a></li>
                  <li><a href="#">Newest Apps</a></li>
                </ul>
              </li>
              <li><a href="#" class="add-new">Add New App</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div class="grid-container fluid content">
          <div class="grid-x content-grid">
            <!-- {
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
            //  this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' )
            //} -->
          </div>
        </div>

      </section>
    `;
  }

  static appCard( appId, name, creator, appLink, downloadNum, voteRatio, description ) {
    return `
      <div class="cell">
        <div class="card app-card" id="app_${appId}">
          <div class="card-divider">
            <h4>${name}</h4>
          </div>
          <img src="">
          <div class="card-section">
            <p>${description}</p>
            <p class="meta">Creator: ${creator}</p>
            <p class="meta">Downloads: ${downloadNum}</p>
            <p class="meta">Vote Ratio: ${voteRatio}</p>
            <div class="grid-x">
              <div class="cell small-6 medium-6 large-6">
                <a href="https://cdn.jsdelivr.net/gh/${appLink}" target="_blank" class="primary button">View Code</a>
              </div>
              <div class="cell small-6 medium-6 large-6">
                <button type="button" class="install primary button">Install</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static appDescriptionModal() {
    return `
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreModel {
  constructor() {
    this.processId = '';
    this.id = '';
  }

  async getAppStorePageFrom( id ) {
    try {
      /** @type { Response } */
      const res = await HttpClient.get( `${API_ROOT_PATH}app-store?lastId=${id}&limit=6` );
      return !res.ok ? Notifications.errorToast( 'There was an error getting the AppStore page.' ) : await res.json();

    } catch ( e ) {
      Notifications.errorToast( 'There was an error getting the AppStore page.' );
      console.debug( e );
      return e;
    }
  }

  async installApp( appId ) {
    try {
      return await HttpClient.post( `${API_ROOT_PATH}user/installed-apps/${appId}` );

    } catch ( e ) {
      console.error( e );
      return e;
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreView {
  constructor() {
    // This window id.
    this.targetId = '';
  }

  get appContainer() { return DomUtils.get( `#${this.targetId} .content-grid` ); }
  get firstAppId() { return this.appContainer.firstChild().id.substring( 4 ); }
  get lastAppId() { return this.appContainer.lastChild().id.substring( 4 ); }

  /**
   * 
   * @param { AppStoreApplication } appStoreApplication
   */
  injectApp( appStoreApplication ) {
    this.appContainer.innerHTML += AppStoreTemplates.appCard(
      appStoreApplication.id,
      appStoreApplication.name,
      appStoreApplication.creator,
      appStoreApplication.htmlindexurl,
      Infinity,
      Infinity,
      appStoreApplication.description
    );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreController {
  constructor( processId ) {
    this.model = new AppStoreModel();
    this.view = new AppStoreView();
    this.addNewAppController = new AddNewAppController();

    this.model.processId = processId;
    this.model.id = `app-store-${processId}`;
    this.view.targetId = this.model.id;

    this.init();
    Object.freeze( this );
  }

  async init() {
    windowManager.openNewWindow( this.model.processId, AppStoreTemplates.window( this.model.id ) );
    $( `#${this.model.id} .dropdown` ).foundation();

    const firstPageApps = await this.model.getAppStorePageFrom( 0 );
    this.__injectApps( firstPageApps );
  }

  async __nextPageHandler() {
    const apps = await this.model.getAppStorePageFrom( this.view.lastAppId );
    this.__injectApps( apps );
  }

  async __previousPageHandler() {
    const apps = await this.model.getAppStorePageFrom( this.view.firstAppId );
    this.__injectApps( apps );
  }

  /**
   *
   * @param { AppStoreApplication[] } apps
   */
  __injectApps( apps ) {
    for ( let i = 0; i < apps.length; ++i ) {
      this.view.injectApp( apps[i] );
    }

    this.__updateListeners();
  }

  __updateListeners() {
    DomUtils.get( `#${this.model.id} .add-new` ).addEventListener( 'click', ( e ) => {
      e.preventDefault();
      this.addNewAppController.openWindow();
      document.getElementById( 'win-' + this.model.processId ).getElementsByClassName( 'close-window' )[0].click();
    } );

    // INSTALL BUTTON
    const allAppCardsInstallBtns = DomUtils.getAll( `#${this.model.id} .install` );
    for ( let i = 0; i < allAppCardsInstallBtns.length; ++i ) {
      allAppCardsInstallBtns[i].addEventListener( 'click', async ( e ) => {
        try {
          const thisAppId = DomUtils.getParentByIdInclude( e.target, 'app_' ).id.substring( 4 );
          const res = await this.model.installApp( thisAppId );
          if ( !res.ok )
            return Notifications.errorToast( ERROR_MSG_INSTALL_APP );

          Notifications.successToast( 'App successfully installed.' );
          // TODO (FRONTEND) Optimise.
          await startMenuManager.injectAllApps();
          return 0;

        } catch ( e ) {
          return Notifications.errorToast( ERROR_MSG_INSTALL_APP );
        }
      } );
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStore {
  constructor( processId ) {
    this.processId = processId;

    this.controller = new AppStoreController( processId );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class MyProfileTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class MyProfileTemplates' );
  }

  static get linkSocialAccounts() {
    return `
      <div class="grid-x">
        <div class="cell large-4 large-offset-2">
          <a href="/portfolio-os/auth/google" class="link-account">
            <span class="hint--top hint--bounce" aria-label="Link Google Account.">
              <span class="hint--bottom hint--warning hint--bounce" aria-label="WARNING: This overrides any current linked Google account.">
                <img src="img/google-plus.svg" alt="Google-Plus Icon" class="icon" id="google-btn" />
              </span>
            </span>
          </a>
        </div>
        <div class="cell large-4">
          <a href="/portfolio-os/auth/github" class="link-account">
            <span class="hint--top hint--bounce" aria-label="Link GitHub Account.">
              <span class="hint--bottom hint--warning hint--bounce" aria-label="WARNING: This overrides any current linked GitHub account.">
                <img src="img/github.svg" alt="Github Icon" class="icon" draggable="false" />
              </span>
            </span>
          </a>
        </div>
      </div>
    `;
  }

  static get addLink() {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label>Website
            <select>
              <option value="${HostId.CodePen}">CodePen</option>
              <option value="${HostId.GitHub}">GitHub</option>
              <option value="${HostId.Behance}">Behance</option>
              <option value="${HostId.Twitter}">Twitter</option>
              <option value="${HostId.Instagram}">Instagram</option>
            </select>
          </label>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label>Path
            <input class="slug new-link" type="text" placeholder="john-doe">
          </label>
        </div>
      </div>
    `;
  }

  static get newSkillInput() {
    return `
      <input class="new-skill" type="text" placeholder="Saying foo and bar">
    `;
  }

  static button( label, additionalClasses = '', addicionalAttributes = '' ) {
    return `
      <button type="button" class="success button ${additionalClasses}" ${addicionalAttributes}>${label}</button>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class MyProfileModel {
  constructor() {
    this.userId;
  }

  async updateSummary( summary ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/summary`, { summary: CommonUtils.sanitizeHTML( summary ) } );
  }

  async postNewSkill( skill ) {
    return await HttpClient.post( `${API_ROOT_PATH}user/profile/skills`, { skill: CommonUtils.sanitizeHTML( skill ) } );
  }

  async updateSkill( skillId, skill ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/skills/${CommonUtils.sanitizeHTML(skillId)}`, { skill: CommonUtils.sanitizeHTML( skill ) } );
  }

  async deleteSkill( skillId ) {
    return await HttpClient.delete( `${API_ROOT_PATH}user/profile/skills/${CommonUtils.sanitizeHTML(skillId)}` );
  }

  async postNewLink( hostId, urlPath ) {
    return await HttpClient.post( `${API_ROOT_PATH}user/profile/links`, { hostId: CommonUtils.sanitizeHTML( hostId ), urlPath: CommonUtils.sanitizeHTML( urlPath ) } );
  }

  async updateLink( linkId, newPath ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/links/${CommonUtils.sanitizeHTML(linkId)}`, { newPath: CommonUtils.sanitizeHTML( newPath ) } );
  }

  async deleteLink( linkId ) {
    return await HttpClient.delete( `${API_ROOT_PATH}user/profile/links/${CommonUtils.sanitizeHTML(linkId)}` );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class MyProfileView {
  constructor() {
    /** @type { HTMLElement } */
    this.target = HTMLElement;
  }

  get summaryElem() { return this.target.getElementsByTagName( 'textarea' )[0]; }

  activateProfileEdition() {
    const inputs = this.target.getElementsByTagName( 'input' );
    for ( let i = 0; i < inputs.length; ++i ) {
      inputs[i].classList.remove( 'disabled-input' );
      inputs[i].disabled = false;
    }

    const summary = this.summaryElem;
    summary.classList.remove( 'disabled-input' );
    summary.disabled = false;

    const linksContainer = this.target.getElementsByClassName( 'links-container' )[0];
    linksContainer.insertAdjacentHTML( 'beforeend', MyProfileTemplates.button( 'Add Link', 'add-link-btn' ) );
        
    const skillsContainer = this.target.getElementsByClassName( 'skills-container' )[0];
    skillsContainer.insertAdjacentHTML( 'beforeend', MyProfileTemplates.button( 'Add Skill', 'add-skill-btn' ) );

    const delBtns = this.target.getElementsByClassName( 'close-button' );
    for ( let i = 0; i < delBtns.length; ++i ) {
      delBtns[i].classList.remove( 'disabled' );
    }

    document.getElementById( 'link-social-accounts-wrapper' ).innerHTML = MyProfileTemplates.linkSocialAccounts;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: (FRONTEND) Refectoring. Pass view logic to the view and redo all of this crap.

class MyProfileController {
  constructor() {
    this.model = new MyProfileModel();
    this.view = new MyProfileView();
  }

  initPage( target ) {
    this.view.target = target;
    this.view.activateProfileEdition();
    this.____addEventListeners();
  }

  ____addEventListeners() {
    Array.from( this.view.target.getElementsByClassName( 'link-account' ) ).forEach( elem => {
      elem.addEventListener( 'click', ( e ) => {
        const that = e.target.parentElement.parentElement.parentElement;

        let loginType;
        if ( that.href.includes( '/portfolio-os/auth/github' ) )
          loginType = LoginType.GitHub;
        else
          loginType = LoginType.Google;

        authentication.JWTLocalStorageToCookie( { accountType: loginType } );
      } );
    } );

    this.view.target.getElementsByClassName( 'add-link-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', ProfilesTemplates.removableElem( MyProfileTemplates.addLink ) );

      Array.from( this.view.target.getElementsByClassName( 'new-link' ) ).forEach( elem => {
        elem.removeEventListener( 'blur', this.___updatePortfolioValue );

        elem.addEventListener( 'blur', ( e ) => {
          e.preventDefault();
          this.___updatePortfolioValue( e );
        } );
      } );
    } );

    this.view.target.getElementsByClassName( 'add-skill-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', ProfilesTemplates.removableElem( MyProfileTemplates.newSkillInput ) );

      Array.from( this.view.target.getElementsByClassName( 'new-skill' ) ).forEach( elem => {
        elem.removeEventListener( 'blur', this.___updatePortfolioValue );

        elem.addEventListener( 'blur', ( e ) => {
          e.preventDefault();
          this.___updatePortfolioValue( e );
        } );
      } );
    } );

    // Update Portfolio (DB) values.
    Array.from( this.view.target.getElementsByClassName( 'close-button' ) ).forEach( elem => {
      elem.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
    } );

    this.view.summaryElem.addEventListener( 'blur', ( e ) => {
      e.preventDefault();
      this.___updatePortfolioValue( e );
    } );

    document.querySelectorAll( '[id^="link_"].slug' ).forEach( value => {
      value.addEventListener( 'blur', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
    } );

    document.querySelectorAll( '[id^="skill_"].skill' ).forEach( value => {
      value.addEventListener( 'blur', async ( e ) => {
        e.preventDefault();
        await this.___updatePortfolioValue( e );
      } );
    } );
  }

  // TODO: Prevent user from updating if the value is the same.
  async ___updatePortfolioValue( e ) {
    /** @type { HTMLElement } */
    const that = e.target;
    const valueElemId = that.id;

    // UPDATE LINK.
    if ( valueElemId.startsWith( 'link_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateLink( valueElemId.substring( 5 ), that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error updating the link.' );

      Notifications.successToast( 'Link successfully updated.' );

      // UPDATE SKILL.
    } else if ( valueElemId.startsWith( 'skill_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateSkill( valueElemId.substring( 6 ), that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error updating the skill.' );

      Notifications.successToast( 'Skill successfully updated.' );

      // POST NEW SKILL.
    } else if ( that.className.includes( 'new-skill' ) ) {
      let res = await this.model.postNewSkill( that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while adding the new link.' );

      Notifications.successToast( 'New skill successfully added.' );
      res = await res.json();
      that.id = 'skill_' + res.id;

      // POST NEW LINK.
    } else if ( that.className.includes( 'new-link' ) ) {
      let res = await this.model.postNewLink( that.parentElement.parentElement.previousElementSibling.children[0].children[0].value, that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while adding the new link.' );

      Notifications.successToast( 'Link successfully added.' );
      res = await res.json();
      that.id = 'link_' + res.id;

      // DELETE.
    } else if ( that.parentElement.className.includes( 'close-button' ) || that.className.includes( 'close-button' ) ) {
      if ( that.className.includes( 'disabled' ) )
        return;

      let res;

      // DELETE SKILL
      if ( that.parentElement.previousElementSibling.className.includes( 'skill' ) ) {
        res = await this.model.deleteSkill( that.parentElement.previousElementSibling.id.substring( 6 ) );
        if ( !res.ok )
          return Notifications.errorToast( 'There was an error while deleting the skill.' );

        that.parentElement.parentElement.remove();
        Notifications.successToast( 'Skill successfully deleted.' );

        // DELETE LINK
      } else {
        res = await this.model.deleteLink( that.parentElement.previousElementSibling.children[1].children[0].children[0].id.substring( 5 ) );
        if ( !res.ok )
          return Notifications.errorToast( 'There was an error while deleting the link.' );

        DomUtils.getParentByClassInclude( that, 'callout' ).remove();
        Notifications.successToast( 'Link successfully deleted.' );
      }

      if ( res <= 0 )
        return Notifications.errorToast( 'Error while removing from the page.' );
      else
        if ( that.parentElement ) that.parentElement.remove();

    } else if ( that.className.includes( 'summary' ) ) {
      let res = await this.model.updateSummary( that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while updating the summary.' );

      Notifications.successToast( 'Summary successfully updated.' );
    }
  }

  __notifyUserOfResponse( res ) {
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesTemplates {
  constructor() {
    return false;
  }

  static userCard( id, name, description ) {
    return `
      <article id="user_${id}" class="cell card user-card">
        <div class="card-section">
          <h4>${name}</h4>
          <p>${description}</p>
        </div>
      </article>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesModel {
  constructor() {
    this.targetWindow;
  }

  async getUsersPage( lastId = 0 ) {
    const res = await HttpClient.get( `${API_ROOT_PATH}users/last-logged-in?lastId=${lastId}&limit=10` );
    if ( !res.ok ) {
      Notifications.errorToast( 'There was an error while getting the users page. Please try again later.' );
      return false;
    }

    return await res.json();
  }

  async getUserProfile( userId ) {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}users/${userId}/profile` );

    } catch ( e ) {
      console.error( e );
      return false;
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesView {
  constructor() {
  }

  allUserCards( targetWindow ) { return DomUtils.getAll( `#${targetWindow} .user-card` ); }

  injectCards( target, users ) {
    const container = document.getElementById( 'cntnt_' + target );
    container.innerHTML = '';

    for ( let i = 0; i < users.length; ++i ) {
      container.innerHTML += ExploreProfilesTemplates.userCard( users[i].id, users[i].name, users[i].summary );
    }
  }

  injectProfile( target, content ) {
    document.getElementById( 'cntnt_' + target ).innerHTML = content;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesController {
  constructor() {
    this.model = new ExploreProfilesModel();
    this.view = new ExploreProfilesView();

    this.userProfilesController = new UserProfilesController();
  }

  inject( targetWindow ) {
    this.model.targetWindow = targetWindow;
    this.__changeUsersPage( 0 );
  }

  async __changeUsersPage( lastId ) {
    const users = await this.model.getUsersPage( lastId );
    this.view.injectCards( this.model.targetWindow, users );
    await this.____updateListeners();
  }

  ____updateListeners() {
    const allUserCards = this.view.allUserCards( this.model.targetWindow );
    for ( let i = 0; i < allUserCards.length; ++i ) {
      allUserCards[i].addEventListener( 'click', async ( e ) => {
        e.stopPropagation();
        const thisUserId = DomUtils.getParentByIdInclude( e.target, 'user_' ).id.substring( 5 );
        await this.____injectProfile( thisUserId );
      } );
    }
  }

  async ____injectProfile( userId ) {
    let res = await this.model.getUserProfile( userId );
    if ( !res.ok )
      return Notifications.errorToast( 'There was an error getting the user profile.' );

    res = await res.json();

    this.view.injectProfile(
      this.model.targetWindow,
      UserProfilesTemplates.userProfile(
        res.name,
        res.summary,
        res.socialLinks,
        res.skillSet
      )
    );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class UserProfilesTemplates {
  constructor() {
    return;
  }

  /**
   * 
   * @param {any} name
   * @param {any} summary
   * @param { string[] } websites string[string[]]: ( [['hostName', 'host', 'path']] )
   * @param { string[] } skillSet
   */
  static userProfile( name, summary, websites, skillSet ) {
    let skillSetHtml = '';
    for ( let i = 0; i < skillSet.length; ++i ) {
      skillSetHtml += ProfilesTemplates.removableElem(
        ProfilesTemplates.disabledInput( skillSet[i].name, 'skill_' + skillSet[i].id, 'skill' ),
        true
      );
    }

    let websitesHtml = '';
    for ( let i = 0; i < websites.length; ++i ) {
      websitesHtml += ProfilesTemplates.removableElem(
        ProfilesTemplates.link( websites[i].id, websites[i].hostlabel, websites[i].hosturl, websites[i].urlpath ),
        true
      );
    }

    return `
      <form class="grid-container my-profile">
        <div class="grid-y inner-my-profile">

          <div class="cell block-item">
            <div id="name-wrapper">
              <h5>Name</h5><br/>
              <p>${name}</p>
            </div>
            <div id="link-social-accounts-wrapper">
            </div>
          </div>

          <div class="cell block-item">
            <h5>Summary</h5>
            <textarea class="summary disabled-input" disabled="true">${summary}</textarea>
          </div>

          <div class="cell block-item links-container">
            <h5>Around The Web</h5>
            ${websitesHtml}
          </div>

          <div class="cell block-item skills-container">
            <h5>Skill Set</h5>
            ${skillSetHtml}
          </div>

          <div class="cell block-item skills-container">
            <h5>Images</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Videos</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Documents</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Music</h5>
          </div>

        </div>
      </form>
    `;
  }

  static userCard( id, name, description ) {
    return `
      <article id="user_${id}" class="card user-card">
        <div class="card-section">
          <h4>${name}</h4>
          <p>${description}</p>
        </div>
      </article>
    `;
  }
}


/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */


/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */


/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class UserProfilesController {
  constructor() {

  }

  initPage() {
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProfilesTemplates {
  static window( id ) {
    return `
      <section class="grid-y profiles" id="${id}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <!-- <li class="menu-text">Site Title</li> -->
              <li><a href="#" class="my-profile-btn">My Profile</a></li>
              <li><a href="#" class="explore-btn">Explore</a></li>
            </ul>
          </div>
          <!-- <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search for someone"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div> -->
        </div>

        <div class="cell content" id="cntnt_${id}">
        </div>

      </section>
    `;
  }

  static removableElem( content, disabled = false ) {
    disabled = !disabled ? '' : 'disabled';

    return `
      <div class="callout">
        ${content}
        <button class="close-button ${disabled}" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }

  static disabledInput( value = '', id = '', additionalClasses = '' ) {
    return `
      <input id="${id}" class="disabled-input ${additionalClasses}" type="text" value="${value}" disabled="true">
    `;
  }

  static link( linkId, hostLabel, hostUrl, urlPath ) {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label class="lbl">Website</label>
          <a class="pointer" href="${HIDE_REFERER}https://${hostUrl}/${urlPath}" rel="noreferrer" target="_blank">
            <p>${hostLabel}</p>
          </a>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label class="lbl">Slug
            <input id="link_${linkId}" class="slug disabled-input" type="text" value="${urlPath}" disabled="true">
          </label>
        </div>
      </div>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProfilesModel {
  constructor() {
    this.currentPage = ProfilePageType.MyProfile;
  }

  async getThisUserProfile() {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}user/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }

  async getUserProfile( userId ) {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}users/${userId}/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProfilesView {
  constructor() {

  }

  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  contentTarget( windowId ) { return document.getElementById( windowId ).querySelector( `[id^="cntnt_"] ` ); }

  injectContent( windowId, content ) {
    this.contentTarget( windowId ).innerHTML = content;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Profiles {
  constructor( processId ) {
    /** The window id */
    this.id = `profiles-${processId}`;
    this.processId = processId;
    this.model = new ProfilesModel();
    this.view = new ProfilesView();

    this.myProfileController = new MyProfileController();
    this.exploreProfilesController = new ExploreProfilesController();

    this.init();
    Object.freeze( this );
  }

  async init() {
    windowManager.openNewWindow( this.processId, ProfilesTemplates.window( this.id ) );
    await this.injectMyProfile();

    // Add Listeners.
    DomUtils.get( `#${this.id} .my-profile-btn` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectMyProfile();
    } );

    DomUtils.get( `#${this.id} .explore-btn` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectExploreProfiles( e );
    } );
  }

  async injectMyProfile() {
    /** @type {Response} */
    const res = await this.model.getThisUserProfile();
    if ( res.status !== 200 || !res )
      return Notifications.errorToast( 'There was an error while getting the user profile.' );

    const thisUserProfile = await res.json();
    this.view.injectContent( this.id, UserProfilesTemplates.userProfile( thisUserProfile.name, thisUserProfile.summary, thisUserProfile.socialLinks, thisUserProfile.skillSet ) );
    this.myProfileController.initPage( this.view.contentTarget( this.id ) );
    this.model.currentPage = ProfilePageType.MyProfile;
  }

  injectExploreProfiles() {
    this.model.currentPage = ProfilePageType.Explore;
    this.exploreProfilesController.inject( this.id );
  }

  async injectUserProfile( userId ) {
    const userProfile = await this.model.getUserProfile( userId );
    this.view.injectContent( this.id, UserProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['1', 'Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
    this.model.currentPage = ProfilePageType.UserProfiles;
  }
}

class TheCodeChanTemplates {
  constructor() {
    throw new Error( 'Can not instatiate the static class "TheCodeChanTemplates"' );
  }

  static get tCCPagePrefix() { return 'tcc-'; }

  static page( processId, boards ) {
    let boardsListItems = '';
    for ( let i = 0; i < boards.length; ++i ) {
      boardsListItems += `<li><a href="#" id="${processId}_board-${boards[i].id}" class="board_btn">${boards[i].name}</a></li>`;
    }

    return `
      <section class="grid-y" id="${this.tCCPagePrefix}${processId}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="menu">
              ${boardsListItems}
            </ul>
          </div>
          <form class="grid-container post-thread">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Message</h5>
                <!-- <input type="text" name="message" class="message" required> -->
                <textarea name="message" class="input-message" required></textarea> 
              </div>

              <div class="cell">
                <button class="success button post-thread-btn">Post Thread</button>
              </div>

            </section>
          </form>
        </div>

        <div class="cell content" id="${processId}_cntnt">
        </div>

      </section>
    `;
  }

  static boardPage( boardName, threads = [] ) {
    let threadCards = '';
    for ( let i = 0; i < threads.length; ++i ) {
      threadCards += TheCodeChanTemplates.threadCard( threads[i].id, threads[i].username, threads[i].timestamp, threads[i].message );
    }

    return `
      <section class="grid-y board">
        <div>
          <h3 class="title"> /${boardName}/ </h3>
        </div>
        <div class="grid-y">
          ${threadCards}
        </div>
      </section>
    `;
  }

  static threadPage( threadId, userName, timestamp, message, replies = [] ) {
    let replyCards = '';
    for ( let i = 0; i < replies.length; ++i ) {
      replyCards += TheCodeChanTemplates.replyCard( replies[i].id, replies[i].username, replies[i].timestamp, replies[i].message );
    }

    return `
      <section class="grid-y thread">

        <div class="t-header">
          <p>User: ${CommonUtils.desanitizeHTML( userName )} \ At: ${CommonUtils.desanitizeHTML( timestamp )} \ ThreadId: ${CommonUtils.desanitizeHTML(threadId)}</p>
          <textarea class="message" readonly>${CommonUtils.desanitizeHTML(message)}</textarea>
          <form class="grid-container post-reply">
            <section class="grid-x wrapper" >

              <div class="cell">
                <h5>Post Reply</h5>
                <textarea type="text" name="message" class="reply-message" required></textarea>
              </div>

              <div class="cell">
                <a class="success button post-reply-btn">Post Reply</a>
              </div>

            </section>
          </form>
        </div>

        <div class="grid-y t-replies">
          ${replyCards}
        </div>

      </section>
    `;
  }

  static threadCard( threadId, userName, timestamp, message ) {
    return `
      <article class="cell card thread-card">
        <div class="card-section">
          <textarea class="message" readonly>${CommonUtils.desanitizeHTML(message)}</textarea>
          <p>
            User: <span class="user-name-val">${CommonUtils.desanitizeHTML(userName)}</span> |
            At: <span class="timestamp-val">${CommonUtils.desanitizeHTML(timestamp)}</span> |
            ThreadId: <span class="thead-id-val">${CommonUtils.desanitizeHTML(threadId)}</span>
          </p>
        </div>
      </article>
    `;
  }

  static replyCard( replyId, userName, timestamp, message ) {
    return `
      <article class="cell card reply-card">
        <div class="card-section">
          <p>User: ${CommonUtils.desanitizeHTML(userName)} | At: ${CommonUtils.desanitizeHTML(timestamp)} | ReplyId: ${CommonUtils.desanitizeHTML(replyId)}</p>
          <textarea class="message" readonly>${CommonUtils.desanitizeHTML( message )}</textarea>
        </div>
      </article>
    `;
  }
}
class TheCodeChanModel {
  constructor( processId ) {
    this.processId = processId;
    this.allBoards = [];
    this.currentBoardId = -1;
    this.currentThreadId = -1;
  }

  async getAllBoardsAsync() {
    try {
      let allBoards = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/boards` );
      if ( !allBoards.ok )
        throw new Error();

      return await allBoards.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the boards.' );
      return [];
    }
  }

  async getThreadsPaginatedAsync( boardId, lastPageId = 0 ) {
    try {
      let boardThreads = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/${boardId}/threads?lastId=${lastPageId}&limit=10` );

      if ( boardThreads.status !== 500 && boardThreads.status !== 404 ) {
        boardThreads = await boardThreads.json();
      } else {
        return [];
      }

      return boardThreads;

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the threads. Please, try again later.' );
      return [];
    }
  }

  async getRepliesPaginatedAsync( threadId, lastPageId = 0 ) {
    try {
      let threadReplies = await HttpClient.get( `${API_ROOT_PATH}the-code-chan/${threadId}/replies?lastId=${lastPageId}&limit=50` );

      if ( threadReplies.status !== 500 && threadReplies.status !== 404 ) {
        threadReplies = await threadReplies.json();
      } else {
        return [];
      }

      return threadReplies;

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while getting the threads. Please, try again later.' );
      return [];
    }
  }

  async postNewThread( boardId, message ) {
    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}the-code-chan/${boardId}/threads`, { message: CommonUtils.sanitizeHTML( message ) } );

      if ( !res.ok )
        throw new Error();

      return await res.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while posting the thread. Please, try again later.' );
      return -1;
    }
  }

  async postReply( threadId, message ) {
    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}the-code-chan/${threadId}/replies`, { message: CommonUtils.sanitizeHTML( message ) } );

      if ( !res.ok )
        throw new Error();

      return await res.json();

    } catch ( e ) {
      console.error( e );
      Notifications.errorToast( 'There was an error while posting the reply. Please, try again later.' );
      return -1;
    }
  }
}

class TheCodeChanView {
  constructor() {
  }

  /** @returns { HTMLElement[] } */
  getAllThreadCardElems( processId ) { return DomUtils.getAll( `#${processId}_cntnt article.thread-card` ); }
  getAllBoardBtnsElems( processId ) { return DomUtils.getAll( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .board_btn` ); }
  getPostThreadBtn( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .post-thread-btn` ); }
  getThreadFormInput( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} textarea.input-message` ).value; }
  getThreadReplyBtn( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} .post-reply-btn` ); }
  getThreadReplyInput( processId ) { return DomUtils.get( `#${TheCodeChanTemplates.tCCPagePrefix + processId} textarea.reply-message` ).value; }

  /**
   * Returns: { userName: <string>, timestamp: <string>, threadId: <string> }
   * @param { HTMLElement } cardElem
   */
  getThreadCardValues( eventTarget ) {
    eventTarget = DomUtils.getParentByClassInclude( eventTarget, 'thread-card' );

    return {
      userName: eventTarget.getElementsByClassName( 'user-name-val' )[0].innerText,
      timestamp: eventTarget.getElementsByClassName( 'timestamp-val' )[0].innerText,
      threadId: eventTarget.getElementsByClassName( 'thead-id-val' )[0].innerText,
      message: eventTarget.getElementsByClassName( 'message' )[0].value
    };
  }

  injectContent( processId, content ) {
    document.getElementById( `${processId}_cntnt` ).innerHTML = content;
  }
}

class TheCodeChan {
  constructor( processId ) {
    this.model = new TheCodeChanModel( processId );
    this.view = new TheCodeChanView();

    this.init();
  }

  async init() {
    try {
      const allBoards = await this.model.getAllBoardsAsync();
      this.model.currentBoardId = allBoards[0].id;
      const firstBoardThreads = await this.model.getThreadsPaginatedAsync( allBoards[0].id );

      this.model.allBoards = allBoards;
      const thisProcessId = this.model.processId;
      windowManager.openNewWindow( thisProcessId, TheCodeChanTemplates.page( thisProcessId, allBoards ) );

      this.view.injectContent( thisProcessId, TheCodeChanTemplates.boardPage( allBoards[0].name, firstBoardThreads ) );
      this.__updateBoardListeners();
      this.__updateBoardsBtnsListeners();

    } catch ( e ) {
      console.error( e );
      return Notifications.errorToast( 'There was an error while opening the theCodeChan. Please, try again later.' );
    }
  }

  __updateBoardsBtnsListeners() {
    // BOARD BUTTON CLICKS.

    const allBoardBtns = this.view.getAllBoardBtnsElems( this.model.processId );
    for ( let i = 0; i < allBoardBtns.length; ++i ) {
      allBoardBtns[i].addEventListener( 'click', async ( e ) => {
        e.preventDefault();
        const thisBoardId = e.target.id.substring( PROCESS_ID_LENGTH + 7 );
        const firstPageThreads = await this.model.getThreadsPaginatedAsync( thisBoardId );

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.boardPage( e.target.text, firstPageThreads )
        );

        this.model.currentBoardId = thisBoardId;
        this.__updateBoardListeners();
      } );
    }

    // POST THREAD BUTTON.
    this.view.getPostThreadBtn( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      const postContent = this.view.getThreadFormInput( this.model.processId );

      const rowCount = await this.model.postNewThread( this.model.currentBoardId, postContent );
      if ( rowCount <= 0 )
        return Notifications.errorToast( `There was an error while posting the new thread. Please, try again later.` );

      // TODO: Add the card to the view.
      Notifications.successToast( 'New thread successfully added!' );
    } );
  }

  __updateBoardListeners() {
    // THREAD CARD CLICKS.

    /** @type { HTMLElement[] } */
    const allThreadCards = this.view.getAllThreadCardElems( this.model.processId );
    for ( let i = 0; i < allThreadCards.length; ++i ) {
      allThreadCards[i].addEventListener( 'click', async ( e ) => {
        const threadValues = this.view.getThreadCardValues( e.target );
        const firstPageReplies = await this.model.getRepliesPaginatedAsync( threadValues.threadId );
        this.model.currentThreadId = threadValues.threadId;

        this.view.injectContent(
          this.model.processId,
          TheCodeChanTemplates.threadPage( threadValues.threadId, threadValues.userName, threadValues.timestamp, threadValues.message, firstPageReplies )
        );

        this.__updateThreadListeners();
      } );
    }
  }

  __updateThreadListeners() {
    // REPLY BUTTON.
    this.view.getThreadReplyBtn( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      const rowCount = await this.model.postReply( this.model.currentThreadId, this.view.getThreadReplyInput( this.model.processId ) );

      if ( rowCount <= 0 )
        return Notifications.errorToast( `There was an error while posting the reply. Please, try again later.` );

      // TODO: Add the card to the view.
      Notifications.successToast( 'Your reply was successfully added!' );
    } );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExplorerTemplates {
  constructor() {
    throw new Error( 'Con not intantiate static class "ExplorerTemplates"' );
  }

  static get inputIconPrefix() { return 'input-icn_'; }
  static get contentPrefix() { return 'cntnt_'; }
  static get treeNavElem() { return document.getElementById( 'exporer-tree-nav' ); }

  static window( id ) {
    return `
      <section class="grid-y explorer" id="${id}">
        <header class="cell">
          <div class="input-group">
            <span class="input-group-label"><img class="input-icn" id="${ExplorerTemplates.inputIconPrefix}${id}" src="${IMG_PATH}folder.svg" alt="${id} Input Icon"></span>
            <input class="input-group-field" type="text">
          </div>
        </header>
        <div class="cell exp-content">
          <div class="grid-x">
            <nav id="exporer-tree-nav">
            </nav>
            <section id="${ExplorerTemplates.contentPrefix}${id}">
            </section>
          </div>
        <div>
      </section>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExplorerModel {
  constructor() {
    this.processId = '';
    this.id = '';

    this.treeNav = {};

    Object.seal( this );
  }

  initTreeNav() {
    this.treeNav = new VanillaTree( ExplorerTemplates.treeNavElem, {
      contextmenu: [{
        label: '',
        action: ( id ) => {
        }
      }]
    } );

    // Hardcoded for now.
    // TODO: Loop the file system to include user created directories e.g. Tree Traversal.
    this.treeNav.add( {
      label: 'root/',
      id: 'root/',
      opened: true
    } );

    this.treeNav.add( {
      label: 'portfolioOS/',
      parent: 'root/',
      id: 'portfolioOS/',
      opened: true
    } );

      this.treeNav.add( {
        label: 'users/',
        parent: 'portfolioOS/',
        id: 'users/',
        opened: true
      } );

        this.treeNav.add( {
          label: 'local/',
          parent: 'users/',
          id: 'local/',
          opened: true
        } );

        this.treeNav.add( {
          label: 'public/',
          parent: 'users/',
          id: 'public/',
          opened: true
        } );

    this.treeNav.add( {
      label: 'applications/',
      parent: 'root/',
      id: 'applications/',
      opened: true
    } );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExplorerView {
  constructor() {
    Object.freeze( this );
  }

  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  element( id ) { return document.getElementById( id ); }
  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  contentTarget( id ) { return element( id ).querySelector( `[id^='${ExplorerTemplates.contentPrefix}']` ); }

  /**
   * 
   * @param { string } content
   */
  injectContent( id, content ) {
    this.contentTarget( id ).innerHTML = content;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExplorerController {
  constructor( processId ) {
    this.model = new ExplorerModel();
    this.view = new ExplorerView();
    this.templates = ExplorerTemplates;

    this.model.id = `explorer-${processId}`;
    this.model.processId = processId;
    this.init();
    Object.freeze( this );
  }

  init() {
    windowManager.openNewWindow( this.model.processId, this.templates.window( this.model.id ) );
    this.model.initTreeNav();
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Explorer {
  constructor( processId ) {
    this.processId = processId;

    this.controller = new ExplorerController( processId );
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ShivaylCV {
  constructor( processId ) {
    windowManager.openNewWindow( processId, this.window( 'shivayl-cv_' + processId ) );
  }

  window( id ) {
    return `
      <section class="grid-x shivayl-cv" id="${id}">
        <img src="${IMG_PATH}shivayl-cv.png" alt="Shivayl CV Icon" title="Shivayl CV" />
      </section>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Process {
  constructor( processName ) {
    this.id = Utils.randomString( PROCESS_ID_LENGTH );
    this.name = processName;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let processManager = null;

class ProcessManager {
  constructor() {
    if ( processManager )
      throw new Error( 'There can only be one instance of ProcessManager.' );

    this.activeProcesses = new Dictionary();

    processManager = this;
    Object.seal( processManager );
  }

  /**
   * @param {string} processName The name of the application.
   */
  async launchNewProcess( processName ) {
    const newProcess = new Process( processName );
    let thisAppInstance = systemAppsManager.getAppInstance( processName );

    if ( !thisAppInstance ) {
      thisAppInstance = await userAppsManager.executeApplication( processName, newProcess.id );

      if ( !thisAppInstance )
        return Notifications.errorToast( `App "${thisAppInstance.name}" not found.` );

      this.activeProcesses.add( newProcess.id, thisAppInstance );

    } else {
      this.activeProcesses.add( newProcess.id, thisAppInstance );
      systemAppsManager.executeApplication( processName, newProcess.id );
    }
  }

  getActiveProcessesCount() {
    return this.activeProcesses.length;
  }

  /**
   *
   * @param { string } processId
   * @returns { SystemApp }
   */
  getAppInstance( processId ) {
    return this.activeProcesses.getByKey( processId );
  } 
}

new ProcessManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class StartMenuApp {
  constructor(iconUrl, appName) {
    this.iconUrl = iconUrl;
    this.appName = appName;
  }

  get template() {
    if ( !this.iconUrl )
      this.iconUrl = DEFAULT_APP_ICON;

    return `
      <li class="start-menu-icon">
        <img src="${this.iconUrl}" alt="${this.appName} Icon" class="icon" /><label>${this.appName}</label>
      </li>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { StartMenuManager } */
let startMenuManager = null;

class StartMenuManager {
  constructor() {
    if ( startMenuManager )
      throw new Error( 'There can only be one instance of StartMenuManager.' );

    this.init();

    this.active = false;
    startMenuManager = this;
    Object.seal( startMenuManager );
  }

  get element() { return document.getElementsByClassName( 'start-menu' )[0]; }
  get startMenuIcon() { return document.getElementsByClassName( 'menu-icon-wrap' )[0]; }
  get appContainerElem() { return document.getElementById('start-menu-apps'); }

  async init() {
    await this.injectAllApps();
  }

  async injectAllApps() {
    let allApps = systemAppsManager.getAllApps();
    await userAppsManager.__fetchInstalledApps();
    allApps = allApps.concat( userAppsManager.installedApps.getAllValues() );

    this.appContainerElem.innerHTML = '';
    for ( let i = 0; i < allApps.length; ++i ) {
      this.appContainerElem.innerHTML += new StartMenuApp( allApps[i].startMenuIconUrl, allApps[i].name ).template;
    }

    this.updateListeners();
  }

  updateListeners() {
    this.startMenuIcon.addEventListener( 'click', () => {
      // Hide/Show the start menu.
      const bottom = DomUtils.getStyleProp( this.element, 'bottom' );
      const bottomValue = parseInt( bottom.substring( 0, bottom.length - 2 ) );

      if ( bottomValue < 48 )
        this.show();
      else
        this.hide();
    } );

    // LOGOUT BUTTON.
    document.getElementById( 'logout-btn' ).addEventListener( 'click', ( e ) => {
      e.preventDefault();
      document.getElementById( 'logout-audio' ).play();
      setTimeout( () => {
        authentication.logout();
      }, 3200 );
    } );

    // APP BUTTONS.
    const allApps = document.getElementsByClassName( 'start-menu-icon' );
    for (let i = 0; i < allApps.length; ++i) {
      allApps[i].addEventListener( 'click', ( e ) => {
        const clickedAppName = DomUtils.getDirectChildrenByTag( e.target, 'label' ).innerText;
        this.hide();
        processManager.launchNewProcess( clickedAppName );
        // systemAppsManager.executeApplication(clickedAppName);
      } );
    }
  }

  show() {
    const that = this.element;
    that.classList.remove( 'anim' );
    that.classList.remove( 'start-menu-slide-down' );
    that.classList.add( 'anim' );
    that.classList.add( 'start-menu-slide-up' );
    this.active = true;
  }

  hide() {
    const that = this.element;
    that.classList.remove( 'anim' );
    that.classList.remove( 'start-menu-slide-up' );
    that.classList.add( 'anim' );
    that.classList.add( 'start-menu-slide-down' );
    this.active = false;
  }

  outsideClickGlobalEvent( e ) {
    const that = e.target;
    if ( that.closest( '.start-menu' ) || that.closest( '.menu-icon-wrap' ) || !this.active )
      return;

    this.hide();
  }
}

new StartMenuManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class DesktopTemplates {
  constructor() {
    this.iconTemplate = ( id, iconUrl, label ) => {
      if ( !label ) label = 'Desktop Icon';

      return `
        <figure class="desktop-icon draggable" id="${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">${label}</label>
        </figure>
      `;
    };
  }
}

const desktopTemplates = new DesktopTemplates();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class DesktopIcon {
  constructor(emptyCell, iconUrl, label) {
    this.id = 'd-icon-' + Utils.randomString( 4 );
    this.iconUrl = iconUrl;
    this.label = label;
    this.emptyCell = emptyCell;
    this.isSelected = Boolean;

    this.init();

    this.getCellElem = () => {
      return document.getElementById( this.id ).offsetParent;
    };
  }

  get template() { return desktopTemplates.iconTemplate( this.id, this.iconUrl, this.label ); }

  init() {
    this.emptyCell.innerHTML += this.template;
    this.isSelected = false;
  }

  selected() {
    const thisIcon = document.getElementById( this.id );

    if ( this.isSelected )
      thisIcon.classList.remove( 'selected' );
    else
      thisIcon.classList.add( 'selected' );

    this.isSelected = !this.isSelected;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let desktopManager = null;

class DesktopManager {
  constructor() {
    if ( desktopManager )
      throw new Error( 'There can only be one instance of DesktopManager.' );

    this.rowCount = 0;
    this.cellCount = 0;
    this.icons = new Dictionary();
    this.rowIdsPrefix = 'dsktp-row_';
    this.cellIdsPrefix = 'dsktp-cell_';

    // 0 because it's added bellow.
    this.gridSystemConfig = {
      gridType: GridType.GridY,
      cellWidthPercent: 10,
      cellHeightPercent: 15,
      gridXCount: 0,
      gridYCount: 0,
      target: document.getElementById( 'desktop' ),
      rowIdsPrefix: this.rowIdsPrefix,
      cellIdsPrefix: this.cellIdsPrefix,
      additionalCellClasses: 'desktop-cell',
      droppableCell: true
    };

    desktopManager = this;
    Object.seal( desktopManager );
  }

  init() {
    const grid = Utils.calculateGrid( 10, 15 );
    this.rowCount = grid.y;
    this.gridSystemConfig.gridYCount = grid.y;
    this.cellCount = grid.x;
    this.gridSystemConfig.gridXCount = grid.x;

    gridSystem.insertGrid( this.gridSystemConfig );
  }

  insertNewIcon( iconUrl, label ) {
    const emptyCell = gridSystem.findEmptyCell( this.cellIdsPrefix, desktopManager.cellCount );
    const newIcon = new DesktopIcon( emptyCell, iconUrl, label );
    this.icons.add( newIcon.id, newIcon );
    this.updateListeners();
    dragAndDrop.updateDraggables();
  }

  updateListeners() {
    const allIcons = document.getElementsByClassName( 'desktop-icon' );
    if ( !allIcons ) return false;

    for ( let i = 0; i < allIcons.length; i++ ) {
      if ( !allIcons[i].classList.contains( 'clk' ) ) {
        allIcons[i].addEventListener( 'click', ( e ) => {
          const that = e.target;
          const icon = DomUtils.getParentByTag( that, 'figure' );
          this.__findIconInstance( icon.id, ( thisIcon ) => {
            thisIcon.selected();
          } );
        } );

        allIcons[i].classList.add( 'clk' );
      }

      if ( !allIcons[i].classList.contains( 'dblclk' ) ) {
        allIcons[i].removeEventListener( 'dblclick', processManager.launchNewProcess );
        allIcons[i].addEventListener( 'dblclick', ( e ) => {
          const that = e.target;
          const icon = DomUtils.getDirectChildrenByTag( that, 'img' );
          // windowManager.openNewWindow(icon.alt);
          processManager.launchNewProcess( icon.alt );
        } );

        allIcons[i].classList.add( 'dblclk' );
      }

    }
  }

  __findIconInstance( iconId, Callback ) {
    const thisIcon = this.icons.getByKey( iconId );

    if( Callback ) Callback( thisIcon );
    else return thisIcon;
  }
}

new DesktopManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ContextMenuTemplates {
  menuWindow(content = '') {
    return `
      <nav class="grid-y context-menu">
        <ul>${content}</ul>
      </nav>
    `;
  }

  /**
   * 
   * @param {string} label
   */
  menuItem(label) {
    return `
      <li class="item">${ label }</li>
    `;
  }
}

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// http://ignitersworld.com/lab/contextMenu.html
const contextMenuTemplates = new ContextMenuTemplates();

class ContextMenu {
  constructor() {
    this.menuBindings = new Dictionary();

    this.menuContent = '';

    this.init();
  }

  get element() { return document.getElementsByClassName('context-menu')[0]; };
  get menuTargetContainer() { return document.getElementById('window-manager-container'); };

  init() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.contextMenu = '';
      let that = e.target;

      for (let i = 0; i < this.menuBindings.length; ++i) {
        const clickedBindedElem = DomUtils.getParentByClassInclude( that, this.menuBindings.getKeyByIndex( i ) );

        if (clickedBindedElem) {
          const currentBinding = this.menuBindings.getByIndex(i);
          for (let j = 0; j < currentBinding.length; ++j) {
            this.menuContent += currentBinding[j];
          }
          break;
        }
      }

      if (this.menuContent === '')
        return;

      if (!this.element)
        this.inject(e);
      else {
        this.kill(e);
        this.inject(e);
      }
    });
  }

  inject(e) {
    this.menuTargetContainer.innerHTML += contextMenuTemplates.menuWindow( this.menuContent );
    this.element.style.left = e.clientX + 'px';
    this.element.style.top = e.clientY + 'px';
  }

  kill(e) {
    if (!this.element)
      return;

    this.menuContent = '';
    this.element.remove();
  }

  outsideClickGlobalEvent(e) {
    const that = e.target;
    if (that.closest('.context-menu'))
      return;

    this.kill(e);
  }

  /**
   * 
   * @param {string} classElementKey
   * @param {string[]} items Use: contextMenuTemplates.menuItem("Label")
   */
  bindItems(classElementKey, items) {
    this.menuBindings.add(classElementKey, items);
  }
}

const contextMenu = new ContextMenu();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let globalEvents = null;

/**
 * Document events.
 * */
class GlobalEvents {
  constructor() {
    if ( globalEvents )
      throw new Error( 'There can only be one instance of GlobalEvents.' );

    this.clickEventFunctions = [];

    globalEvents = this;
    Object.seal( globalEvents );
  }

  init() {
    document.addEventListener( 'click', ( e ) => {
      for ( let i = 0; i < this.clickEventFunctions.length; ++i ) {
        this.clickEventFunctions[i]( e );
      }
    } );
  }

  bindEvent(eventType, executeFunction) {
    switch (eventType.toUpperCase()) {
      case 'CLICK':
        this.clickEventFunctions.push( executeFunction );
        break;
      default:
        return;
    }
  }
}

new GlobalEvents();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// Initializations.

whenDomReady( async () => {

  authentication.init();
  await userAppsManager.__fetchInstalledApps();
  $( document ).foundation();
  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );
  desktopManager.insertNewIcon( IMG_PATH + 'profiles.svg', 'Profiles' );
  desktopManager.insertNewIcon( DEFAULT_APP_ICON, 'ShivaylCV' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, ( processId ) => { new Explorer( processId ); } );
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Profiles', `${IMG_PATH}profiles.svg`, `${IMG_PATH}profiles.svg`, ( processId ) => { new Profiles( processId ); } );
  systemAppsManager.bindApplication( 'AppStore', `${IMG_PATH}app-store.svg`, `${IMG_PATH}app-store.svg`, ( processId ) => { new AppStore( processId ); } );
  systemAppsManager.bindApplication( 'theCodeChan', `${DEFAULT_APP_ICON}`, `${DEFAULT_APP_ICON}`, ( processId ) => { new TheCodeChan( processId ); } );
  // The trash is temporary.
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  systemAppsManager.bindApplication( 'ShivaylCV', DEFAULT_APP_ICON, DEFAULT_APP_ICON, ( processId ) => { new ShivaylCV( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( 'Delete' ), contextMenuTemplates.menuItem( 'Open' )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => {
    const click = document.getElementById( 'click-audio' );
    click.pause();
    click.currentTime = 0;
    click.play();
  } );
  globalEvents.init();

  //console.debug( 'FS V2:', fileSystem.____fsv2 );
  //console.debug( 'Windows:', windowManager.windows );
  //console.debug( 'Taskbar Icons:', taskbarManager.icons );
  windowManager.openNewModal(
    `<p><strong>Portfolio-OS</strong> is a work in progress and so, some features do not work as of yet.</p>
     <p>Keep also in mind that this is the Portfolio-OS's Dekstop version and not the mobile, so it is <strong>not</strong> mobile responsive.</p>`
  );

  dragAndDrop.updateDraggables();
  Notifications.infoToast( 'Portfolio OS can give recursion syndrome to some users. Click [ <b>F11</b> ] to go fullscreen.' );
} );

