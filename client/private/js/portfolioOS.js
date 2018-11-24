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
// @import './externalLibs'
// $import 'vanillatree/vanillatree.min.js'
// @import<<DIR '../../../../common/enums'
// @import<<DIR './enums/'
// @import '../../../../common/commonUtils'
// @import './utils'
// @import './domUtils'
// @import '../../../../common/models/fsItemModelBase'
// @import '../../../../common/models/fileModel'
// @import '../../../../common/models/directoryModel'
// @import '../../../../common/models/systemDirectoryModel'
// @import<<DIR './models/'
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
// @import './systemApps/profiles/userProfiles/userProfiles.model'
// @import './systemApps/profiles/userProfiles/userProfiles.view'
// @import './systemApps/profiles/userProfiles/userProfiles.controller'
// @import './systemApps/profiles/profiles.templates'
// @import './systemApps/profiles/profiles.model'
// @import './systemApps/profiles/profiles.view'
// @import './systemApps/profiles/profiles'
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

// const SERVER_ROOT_PATH = 'http://localhost:3000/';
const AUTH_TOKEN_ID = 'JWT';
const SERVER_ROOT_PATH = 'http://localhost:2000/';
const API_ROOT_PATH = `${SERVER_ROOT_PATH}portfolio-os/api/`;
const IMG_PATH = `${SERVER_ROOT_PATH}img/`;

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

} catch {
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

} catch {
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

const HostId = Object.freeze( {
  GitHub: 1,
  Behance: 2,
  Twitter: 3,
  Instagram: 4
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

class CommonUtils {
  /**
   * Escaping following OWASP's rules.
   * https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet#RULE_.231_-_HTML_Escape_Before_Inserting_Untrusted_Data_into_HTML_Element_Content
   * @param { any } input
   * @returns { string }
   */
  static sanitizeHTML( input ) {
    return input.toString().trim().replace( /</g, '&lt;' ).replace( />/g, '&gt;' ).replace( /'/g, '&#x27;' ).replace( /"/g, '&#34;' ).replace( /&/g, '&amp;' ).replace( /\//g, '&#x2F;' );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = CommonUtils;

} catch {
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

Array.prototype.last = () => {
  return this[this.length - 1];
};

class Utils {
  static log(message) {
    console.log(message);
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
   * Get all elements from the Collection.
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
  };

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

  getAllValues() {
    let allValues = [];

    for ( let i = 0; i < this.elements.length; ++i ) {
      allValues.push( Object.values( this.elements[i] )[0] );
    }

    return allValues;
  }

  add( key, value ) {
    if ( this.uniqueKeys && this.findIndexOfKey( key ) !== false )
      throw new Error( Errors.existingKey );

    this.push( { [key]: value } );
  }

  remove( key ) {
    const index = this.findIndexOfKey( key );
    if ( index === false )
      return false;

    this.splice( index );
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
  };

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
  static getStyle( element, propertyName ) {
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

} catch {
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

} catch {
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

} catch {
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

} catch {
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

} catch {
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

} catch {
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

class AppStoreApplication {
  /**
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } name
   * @param { string } creator
   * @param { string } htmlIndexUrl
   */
  constructor( type, name, creator, htmlIndexUrl ) {
    this.type = type;
    this.name = name;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl; // 'https://rawgit.com/'

    this.rating = [];
    /** An array with the users id's
     * @type { string[] } */
    this.downloads = [];
    this.creationDate = '';
    this.lastUpdateDate = '';
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
   * @param { boolean } jwtAuth
   * 
   * @return { Promise<JSON | Error> }
   */
  static get( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Get, url, null, jwtAuth )
        .then( res => resolve( res.json() ) )
        .catch( e => reject( e ) );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   *
   * @param {any} url
   * @param {any} body
   * @param {any} jwtAuth
   * @param {any} Callback
   * 
   * @return { Response }
   */
  static post( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Post, url, body, jwtAuth )
        .then( res => { resolve( res.json() ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param {any} url
   * @param {any} body
   * @param {any} jwtAuth
   * 
   * @return { Promise<JSON | Error> }
   */
  static put( url, body, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Put, url, body, jwtAuth )
        .then( res => { resolve( res.json() ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  static delete( url, jwtAuth = true ) {
    return new Promise( async ( resolve, reject ) => {
      HttpClient.request( RequestType.Delete, url, null, jwtAuth )
        .then( res => { resolve( res.json() ); } )
        .catch( err => { reject( err ); } );
    } );
  }

  /**
   * Returns a Fetch Response object or an error.
   * 
   * @param { RequestType } requestType
   * @param { string } url
   * @param { any } body
   * @param { boolean } jwtAuth Whether or not to use JWT authentication (from localStorage).
   * @param {any} Callback
   * 
   * @return { Response }
   */
  static request( requestType, url, body = null, jwtAuth = true, Callback ) {
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
        //.then( res => { return res.json(); } )
        //.then( jsonData => { return Callback( null, jsonData ); } )
        .then( res => { return resolve( res ); } )
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

    } catch  {
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
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%;min-width: ${widthPercent.toString()}% !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%;min-height: ${heightPercent.toString()}% !important;`;
    const gridTypeClass = gridType === GridType.GridY ? 'grid-system-row-y' : 'grid-system-row-x';

    return `
      <div id="${id}" class="${gridType} ${gridTypeClass}" style="${widthPercent}${heightPercent}"></div>
    `;
  };

  /**
    * If grid-y use height, if grid-x use width.
    * 
   * @param { string } id
   * @param { number | null } widthPercent <number | null>
   * @param { number | null } heightPercent <number | null>
   * @param { boolean } droppable
   */
  static cellTemplate( id, widthPercent, heightPercent, droppable = false, additionalClasses ) {
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%;min-width: ${widthPercent.toString()}% !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%;min-height: ${heightPercent.toString()}% !important;`;
    droppable = droppable ? 'droppable' : '';

    return `
        <article id="${id}" class="cell grid-system-cell ${droppable} ${additionalClasses}" style="${widthPercent}${heightPercent}">&nbsp;</article>
      `;
  };
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
    Array.from(document.getElementsByTagName( 'img' )).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );

    Array.from(document.getElementsByTagName( 'a' )).forEach( value => {
      value.setAttribute( 'draggable', 'false' );
    } );
  }

  updateDraggableElements() {
    Array.from( document.getElementsByClassName( 'draggable' ) ).forEach( value => {
      value.setAttribute( 'draggable', 'true' );
    } );

    Array.from(document.getElementsByClassName( 'free-draggable' )).forEach( value => {
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
          } catch {
            return false;
          }
        }

        dir = currDir;
      } catch {
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

      } catch {
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

const START_MENU_ANIM_DELAY = 1;

class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = new Dictionary();
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

  killIcon(windowId) {
    this.findIconInstance(windowId).kill();
    this.icons.remove(TaskbarIcon.idPrefix + windowId);
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

const taskbarManager = new TaskbarManager();

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
  constructor(processId, title, content) {

    this.id = `${Window.idPrefix}${processId}`;
    this.title = title;
    this.content = content;
    this.icon = TaskbarIcon;

    this.isMinimized = false;
    this.init();
  }

  get element() { return document.getElementById( this.id ); }
  static get idPrefix() { return 'win-'; }

  get template() {
    return `
      <article class="window-manager grid-y resizable" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell small-8 medium-8 large-8">
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
      </article>`;
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

  init() {
    document.getElementById( 'window-manager-container' ).innerHTML += this.template;
  }

  kill() {
    this.element.remove();
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
}

/*
 *
 * Copyright (c) 2018 Jo�o Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class WindowManager {
  constructor() {
    this.windows = new Dictionary();
  }

  /**
   * Open a new window from a running process.
   * @param { string } processId
   * @param { string } content
   */
  openNewWindow( processId, content = '' ) {
    const thisAppInstance = processManager.getAppInstance( processId );
    this.openNewWindowCustom( processId, thisAppInstance.name, content, true, thisAppInstance.taskbarIconUrl );
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

    this.windows.add( thisWindow.id, thisWindow );
    this.updateListeners();
    dragAndDrop.cancelNonDraggableElements();
    dragAndDrop.updateFreeDraggListeners();
    windowResizer.updateListeners();
    const thisWindowElem = document.getElementById(thisWindow.id);
    thisWindowElem.style.width = !width ? '70%' : width;
    thisWindowElem.style.height = !heigth ? '80%' : heigth;
    thisWindowElem.classList.add( 'anim' );
    thisWindowElem.classList.add( 'zoom-in' );
    setTimeout( () => {
      thisWindowElem.classList.remove( 'anim' );
      thisWindowElem.classList.remove( 'zoom-in' );
    }, 1000 );
  }

  closeWindow( windowId ) {
    this.findWindowInstance(windowId).kill();
    taskbarManager.killIcon(windowId);
    this.windows.remove(windowId);
    this.updateListeners();
  }

  minimizeWindow( windowId ) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon(windowId);
  }

  unminimizeWindow( windowId ) {
    this.findWindowInstance( windowId ).unminimize();
    taskbarManager.maximizedIcon( windowId );
  }

  maxSizeWindow( windowId ) {
    this.findWindowInstance( windowId ).maxSize();
  }

  // #region LISTENERS:

  // TODO: Fix "removeEventListener"'s.
  updateListeners() {
    const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

    for (let i = 0; i < allCloseWindowsBtns.length; i++) {
      allCloseWindowsBtns[i].removeEventListener('click', this.closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    }

    const allMinimizeWindowsBtns = document.querySelectorAll( '[id^="win-"] .minimize-window' );

    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener( 'click', this.minimizeWindowHandler );
      allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
        this.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
      });
    }

    const allMaxWindowsBtns = document.querySelectorAll( '[id^="win-"] .max-size-window' );
    for ( let i = 0; i < allMinimizeWindowsBtns.length; i++ ) {
      allMaxWindowsBtns[i].removeEventListener( 'click', this.maxSizeWindow );
      allMaxWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.maxSizeWindowHandler( e, allMaxWindowsBtns[i] );
      } );
    }

    const allTaskbarIcons = document.querySelectorAll( '[id^="icn_"] .icon' );

    for (let i = 0; i < allTaskbarIcons.length; i++) {
      allTaskbarIcons[i].removeEventListener( 'click', this.taskbarIconsHandler );
      allTaskbarIcons[i].addEventListener('click', (e) => {
        this.taskbarIconsHandler(e, allTaskbarIcons[i]);
      });
    }
  }

  // #endregion

  // #region EVENT HANDLERS:

  closeWindowHandler (e, closeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( closeWindowBtn, 'win-' );
    this.closeWindow(thisWindow.id);
  }

  minimizeWindowHandler(e, minimizeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( minimizeWindowBtn, 'win-' );
    this.minimizeWindow(thisWindow.id);
  }

  maxSizeWindowHandler( e, maxSizeWindowBtn ) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( maxSizeWindowBtn, 'win-' );
    this.maxSizeWindow( thisWindow.id );
  }

  taskbarIconsHandler(e, taskbarIcon) {
    e.stopPropagation();
    const thisIconId = DomUtils.getParentByIdInclude( taskbarIcon, 'icn_win-' ).id;
    const thisWindowId = Utils.parseIDs(thisIconId)[1];
    const thisWindow = this.findWindowInstance( thisWindowId );

    if (thisWindow.isMinimized)
      this.unminimizeWindow(thisWindowId);
    else
      this.minimizeWindow(thisWindowId);
  }

  // #endregion

  openNewModal( content ) {
    const target = document.getElementById( 'window-manager-container' );
    target.innerHTML += Window.modalTemplate( content );
    $( '#modal' ).foundation();
    $( '#modal' ).foundation( 'open' );
    document.querySelector( '[data-reveal]' ).addEventListener( 'closed.zf.reveal', () => {
      console.debug('jgx')
      this.updateListeners();
      this.updateFreeDraggListeners();
    } );
  }

  // UTILITIES:
  findWindowInstance(windowId, Callback) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }
}

const windowManager = new WindowManager();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class UserAppsManager {
  constructor() {
    /** @type {AppStoreApplication[]} */
    this.installedApps = [];
  }

  fetchAllInstalledApps() {
    return;
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
  bindApplication(appName, startMenuIconUrl, taskbarIconUrl, executeFunction) {
    const newApp = new SystemApp( appName, startMenuIconUrl, taskbarIconUrl, executeFunction );
    this.systemApps.add( appName, newApp );
  }

  /**
   * It executes the system application specified with the its bind name.
   * 
   * @param {string} appName
   * @param {string} processId
   */
  executeApplication( appName, processId ) {
    /** @type { SystemApp } */
    const thisApp = this.systemApps.getByKey( appName );
    !thisApp ? console.error( `Application not found ` ) : thisApp.executeFunction( processId );
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

  static get content() {
    return `
      <form class="grid-container add-new-app">
        <section class="grid-x wrapper" >

          <div class="cell">
            <h5>Application Name</h5>
            <input type="text" name="name" required>
          </div>

          <div class="cell">
            <h5>Descrition</h5>
            <textarea type="text" name="description"></textarea>
          </div>

          <div class="cell">
            <h5>Index HTML Page</h5>
            <input type="text" name="index-page" required>
          </div>

          <div class="cell">
            <button class="button help" data-open="modal">Help</button>
            ${MyProfileTemplates.button( 'Submit App' ) }
          </div>

        </section>
      </form>
    `;
  }

  static get helpModalContent() {
    return `
      <h1>Help</h1>
      <ul>
        <li>
          For security reasons, Portfolio-OS only accepts apps stored on GitHub.
          To add a new app just go to the GitHub file and click on RAW.
          Then just copy and paste the link to Index HTML Page input.
        </li>
      </ul>`;
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

class AddNewAppController {
  constructor() {
    this.model = new AddNewAppModel();
  }

  openWindow() {
    if (this.model.isOpen)
      return;

    const processId = Utils.randomString(4);
    windowManager.openNewWindowCustom(
      processId,
      'Add New App',
      AddNewAppTemplates.content,
      false, null,
      '30%', '65%'
    );
    this.model.isOpen = true;

    DomUtils.get( `#${Window.idPrefix}${processId} .help` ).addEventListener( 'click', () => {
      windowManager.openNewModal( AddNewAppTemplates.helpModalContent );
    } );

    DomUtils.get(`#${Window.idPrefix}${processId} .close-window`).addEventListener('click', () => {
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
            ${
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' )
            }
          </div>
        </div>

      </section>
    `;
  }

  static appCard( appId, title, creator, appLink, downloadNum, voteRatio, description ) {
    return `
      <div class="cell">
        <div class="card app-card" id="${appId}">
          <div class="card-divider">
            <h4>${title}</h4>
          </div>
          <img src="">
          <div class="card-section">
            <p>${description}</p>
            <p class="meta">Creator: ${creator}</p>
            <p class="meta">Downloads: ${downloadNum}</p>
            <p class="meta">Vote Ratio: ${voteRatio}</p>
            <a href="${appLink}" target="_blank" class="primary button">View on GitHub</a>
            <button type="button" class="install primary button">Install</button>
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

    this.init();
    Object.freeze( this );
  }

  init() {
    windowManager.openNewWindow( this.model.processId, AppStoreTemplates.window( this.model.id ) );
    $( `#${this.model.id} .dropdown` ).foundation();

    DomUtils.get( `#${this.model.id} .add-new` ).addEventListener( 'click', ( e ) => {
      e.preventDefault();

      this.addNewAppController.openWindow();
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

  static button( label, additionalClasses = '' ) {
    return `
      <button type="button" class="success button ${additionalClasses}">${label}</button>
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

// TODO: Refectoring. Pass view logic to the view.

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

    if ( valueElemId.startsWith( 'link_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateLink( valueElemId.substring( 5 ), that.value );

    } else if ( valueElemId.startsWith( 'skill_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateSkill( valueElemId.substring( 6 ), that.value );
      if ( res <= 0 )
        // TODO: (FRONTEND) Show notification.
        console.info( 'Error updating skill' );

    } else if ( that.className.includes( 'new-skill' ) ) {
      const res = await this.model.postNewSkill( that.value );
      that.id = 'skill_' + res.id;

    } else if ( that.className.includes( 'new-link' ) ) {
      const res = await this.model.postNewLink( that.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.value, that.value );
      that.id = 'link_' + res.id;

    } else if ( that.parentElement.className.includes( 'close-button' ) ) {
       if ( that.className.includes( 'disabled' ) )
        return;


      const target = that.parentElement.parentElement;
      let res;

      // DELETE SKILL
      if ( target.firstElementChild.classList.contains( 'skill' ) || target.firstElementChild.classList.contains( 'new-skill' ) ) {
        res = await this.model.deleteSkill( target.firstElementChild.id.substring( 6 ) );

      // DELETE LINK
      } else {
        res = await this.model.deleteLink( target.firstElementChild.lastElementChild.firstElementChild.firstElementChild.id.substring( 5 ) );
      }

      if ( res <= 0 )
        // TODO: (FRONTEND) Show notification.
        console.info( 'Error Deleting.' );
      else
        target.remove();

    } else if ( that.className.includes( 'summary' ) )
      await this.model.updateSummary( that.value );
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
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search for someone"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div class="cell content" id="cntnt_${id}">
        </div>

      </section>
    `;
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
          <a class="pointer" href="https://${hostUrl}/${urlPath}" target="_blank">
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

  static profileCard() {
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

class ProfilesModel {
  constructor() {
    this.currentPage = ProfilePageType.MyProfile;
  }

  async getThisUserProfile() {
    try {
      return await HttpClient.get( `${SERVER_ROOT_PATH}portfolio-os/api/user/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }

  async getUserProfile( userId ) {
    return await HttpClient.get( `${SERVER_ROOT_PATH}portfolio-os/api/users/${userId}/profile` );
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
    this.userProfilesController = new UserProfilesController();

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
    const thisUserProfile = await this.model.getThisUserProfile();
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( thisUserProfile.name, thisUserProfile.summary, thisUserProfile.socialLinks, thisUserProfile.skillSet ) );
    this.myProfileController.initPage( this.view.contentTarget( this.id ) );
    this.model.currentPage = ProfilePageType.MyProfile;
  }

  async injectUserProfile( e ) {
    // TODO: Get the user id from the user card.
    const userProfile = await this.model.getUserProfile( 1 );
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['1', 'Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
    this.model.currentPage = ProfilePageType.UserProfiles;
  }

  // TODO: (FRONTEND) Add the user cards (explore profiles)
  injectExploreProfiles() {
    this.model.currentPage = ProfilePageType.Explore;
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
  constructor(processName) {
    this.id = Utils.randomString(5);
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

class ProcessManager {
  constructor() {
    this.activeProcesses = new Dictionary();
  }

  /**
   * @param {string} processName
   * The name of the application.
   */
  launchNewProcess( processName ) {
    const newProcess = new Process( processName );
    // TODO: In the future find the app on systemAppsManager or userAppsManager.
    const thisAppInstance = systemAppsManager.getAppInstance( processName );
    this.activeProcesses.add( newProcess.id, thisAppInstance );
    systemAppsManager.executeApplication( processName, newProcess.id );
  }

  getActiveProcessesCount() {
    return this.activeProcesses.length;
  }

  /**
   * 
   * @param { string } processId
   * @returns { SystemApp }
   */
  getAppInstance(processId) {
    return this.activeProcesses.getByKey( processId );
  }
}

const processManager = new ProcessManager();

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
  };

  get template() {
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

class StartMenuManager {
  constructor() {
    this.init();

    this.active = false;
  }

  get element() { return document.getElementsByClassName( 'start-menu' )[0]; }
  get startMenuIcon() { return document.getElementsByClassName( 'menu-icon-wrap' )[0]; }
  get appContainerElem() { return document.getElementById('start-menu-apps'); };

  init() {
    this.injectAllApps();
  }

  injectAllApps() {
    const allApps = systemAppsManager.getAllApps();

    this.appContainerElem.innerHTML = '';
    for (let i = 0; i < allApps.length; ++i) {
      const newApp = new StartMenuApp(allApps[i].startMenuIconUrl, allApps[i].name);
      this.appContainerElem.innerHTML += newApp.template;
    }

    this.updateListeners();
  }

  updateListeners() {
    this.startMenuIcon.addEventListener( 'click', () => {
      const bottom = DomUtils.getStyle( this.element, 'bottom' );
      const bottomValue = parseInt( bottom.substring( 0, bottom.length - 2 ) );

      if ( bottomValue < 48 )
        this.show();
      else
        this.hide();
    } );

    const allApps = document.getElementsByClassName( 'start-menu-icon' );

    for (let i = 0; i < allApps.length; ++i) {
      allApps[i].addEventListener('click', (e) => {
        const clickedAppName = DomUtils.getDirectChildrenByTag(e.target, 'label').innerText;
        processManager.launchNewProcess(clickedAppName);
        // systemAppsManager.executeApplication(clickedAppName);
      });
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

const startMenuManager = new StartMenuManager();

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

class DesktopManager {
  constructor() {
    this.rowCount = 0;
    this.cellCount = 0;
    this.icons = new Dictionary();
    this.rowIdsPrefix = 'dsktp-row_';
    this.cellIdsPrefix = 'dsktp-cell_';

    // 0 because it's added bellow.
    this.gridSystemConfig = {
      gridType: GridType.GridY,
      cellWidthPercent: 5,
      cellHeightPercent: 10,
      gridXCount: 0,
      gridYCount: 0,
      target: document.getElementById( 'desktop' ),
      rowIdsPrefix: this.rowIdsPrefix,
      cellIdsPrefix: this.cellIdsPrefix,
      additionalCellClasses: 'desktop-cell',
      droppableCell: true
    };
  }

  init() {
    const grid = Utils.calculateGrid( 5, 15 );
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

const desktopManager = new DesktopManager();

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

/**
 * Document events.
 * */
class GlobalEvents {
  constructor() {
    this.clickEventFunctions = [];
  }

  init() {
    document.addEventListener('click', (e) => {
      for (let i = 0; i < this.clickEventFunctions.length; ++i) {
        this.clickEventFunctions[i](e);
      }
    });
  };

  bindEvent(eventType, executeFunction) {
    switch (eventType.toUpperCase()) {
      case 'CLICK':
        this.clickEventFunctions.push( executeFunction );
        break;
      default:
        return;
    }
  };
}

const globalEvents = new GlobalEvents();

/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// Initializations.

whenDomReady( () => {

  authentication.init();
  $( document ).foundation();
  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );
  desktopManager.insertNewIcon( IMG_PATH + 'profiles.svg', 'Profiles' );
  desktopManager.insertNewIcon( `${IMG_PATH}default-taskbar-icon-white.svg`, 'ShivaylCV' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, ( processId ) => { new Explorer( processId ); } );
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Profiles', `${IMG_PATH}profiles.svg`, `${IMG_PATH}profiles.svg`, ( processId ) => { new Profiles( processId ); } );
  systemAppsManager.bindApplication( 'AppStore', `${IMG_PATH}default-taskbar-icon-white.svg`, `${IMG_PATH}default-taskbar-icon-white.svg`, ( processId ) => { new AppStore( processId ); } );
  // The trash is temporary.
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  systemAppsManager.bindApplication( 'ShivaylCV', `${IMG_PATH}default-taskbar-icon-white.svg`, `${IMG_PATH}default-taskbar-icon-white.svg`, ( processId ) => { new ShivaylCV( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( 'Delete' ), contextMenuTemplates.menuItem( 'Open' )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.init();

  //console.debug( 'FS V2:', fileSystem.____fsv2 );
  //console.debug( 'Windows:', windowManager.windows );
  //console.debug( 'Taskbar Icons:', taskbarManager.icons );
  windowManager.openNewModal(
    `<p><strong>Portfolio-OS</strong> is a work in progress and so, some features do not work as of yet.</p>
     <p>(Features like the AppStore, the Explorer, or searrching for users in the Profiles app)</p>
     <p>Keep also in mind that this is the Portfolio-OS's Dekstop version and not the mobile, so it is <strong>not</strong> mobile responsive.</p>`
  );

  dragAndDrop.updateDraggables();
} );

