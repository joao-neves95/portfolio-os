!function(n){var e;if("function"==typeof define&&define.amd&&(define(n),e=!0),"object"==typeof exports&&(module.exports=n(),e=!0),!e){var t=window.Cookies,r=window.Cookies=n();r.noConflict=function(){return window.Cookies=t,r}}}(function(){function n(){for(var n=0,e={};n<arguments.length;n++){var t=arguments[n];for(var r in t)e[r]=t[r]}return e}function e(n){return n.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function t(r){function i(){}function o(e,t,o){if("undefined"!=typeof document){"number"==typeof(o=n({path:"/"},i.defaults,o)).expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var u=JSON.stringify(t);/^[\{\[]/.test(u)&&(t=u)}catch(n){}t=r.write?r.write(t,e):encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var c in o)o[c]&&(f+="; "+c,!0!==o[c]&&(f+="="+o[c].split(";")[0]));return document.cookie=e+"="+t+f}}function u(n,t){if("undefined"!=typeof document){for(var i={},o=document.cookie?document.cookie.split("; "):[],u=0;u<o.length;u++){var f=o[u].split("="),c=f.slice(1).join("=");t||'"'!==c.charAt(0)||(c=c.slice(1,-1));try{var a=e(f[0]);if(c=(r.read||r)(c,a)||e(c),t)try{c=JSON.parse(c)}catch(n){}if(i[a]=c,n===a)break}catch(n){}}return n?i[n]:i}}return i.set=o,i.get=function(n){return u(n,!1)},i.getJSON=function(n){return u(n,!0)},i.remove=function(e,t){o(e,"",n(t,{expires:-1}))},i.defaults={},i.withConverter=t,i}(function(){})}),function(n){"use strict";function e(n){if(!(this instanceof e))return new e(n);if(null==n)n=e.engines.nativeMath;else if("function"!=typeof n)throw new TypeError("Expected engine to be a function, got "+typeof n);this.engine=n}function t(n){return function(){return n}}function r(n,e){return 0===e?n:function(t){return n(t)+e}}function i(n){var e=+n;return 0>e?Math.ceil(e):Math.floor(e)}function o(n,e){return 0>n?Math.max(n+e,0):Math.min(n,e)}function u(){}var f="Random",c="function"!=typeof Math.imul||-5!==Math.imul(4294967295,5)?function(n,e){var t=65535&n,r=65535&e;return t*r+((n>>>16&65535)*r+t*(e>>>16&65535)<<16>>>0)|0}:Math.imul,a="function"==typeof String.prototype.repeat&&"xxx"==="x".repeat(3)?function(n,e){return n.repeat(e)}:function(n,e){for(var t="";e>0;)1&e&&(t+=n),e>>=1,n+=n;return t},s=e.prototype;e.engines={nativeMath:function(){return 4294967296*Math.random()|0},mt19937:function(n){function t(n){for(var e=0,t=0;227>(0|e);e=e+1|0)t=2147483648&n[e]|2147483647&n[e+1|0],n[e]=n[e+397|0]^t>>>1^(1&t?2567483615:0);for(;623>(0|e);e=e+1|0)t=2147483648&n[e]|2147483647&n[e+1|0],n[e]=n[e-227|0]^t>>>1^(1&t?2567483615:0);t=2147483648&n[623]|2147483647&n[0],n[623]=n[396]^t>>>1^(1&t?2567483615:0)}return function(){function r(){(0|o)>=624&&(t(i),o=0);var n=i[o];return o=o+1|0,0|function(n){return n^=n>>>11,n^=n<<7&2636928640,(n^=n<<15&4022730752)^n>>>18}(n)}var i=new n(624),o=0;return r.discard=function(n){for((0|o)>=624&&(t(i),o=0);n-o>624;)n-=624-o,t(i),o=0;return o=o+n|0,r},r.seed=function(n){var e=0;i[0]=e=0|n;for(var t=1;624>t;t=t+1|0)i[t]=e=c(e^e>>>30,1812433253)+t|0;return o=624,r},r.seedWithArray=function(n){return r.seed(19650218),function(n,e){for(var t=1,r=0,i=e.length,o=0|Math.max(i,624),u=0|n[0];(0|o)>0;--o)n[t]=u=(n[t]^c(u^u>>>30,1664525))+(0|e[r])+(0|r)|0,++r,(0|(t=t+1|0))>623&&(n[0]=n[623],t=1),r>=i&&(r=0);for(o=623;(0|o)>0;--o)n[t]=u=(n[t]^c(u^u>>>30,1566083941))-t|0,(0|(t=t+1|0))>623&&(n[0]=n[623],t=1);n[0]=2147483648}(i,n),r},r.autoSeed=function(){return r.seedWithArray(e.generateEntropyArray())},r}}("function"==typeof Int32Array?Int32Array:Array),browserCrypto:"undefined"!=typeof crypto&&"function"==typeof crypto.getRandomValues&&"function"==typeof Int32Array?function(){var n=null,e=128;return function(){return e>=128&&(null===n&&(n=new Int32Array(128)),crypto.getRandomValues(n),e=0),0|n[e++]}}():null},e.generateEntropyArray=function(){for(var n=[],t=e.engines.nativeMath,r=0;16>r;++r)n[r]=0|t();return n.push(0|(new Date).getTime()),n},e.int32=function(n){return 0|n()},s.int32=function(){return e.int32(this.engine)},e.uint32=function(n){return n()>>>0},s.uint32=function(){return e.uint32(this.engine)},e.uint53=function(n){return 4294967296*(2097151&n())+(n()>>>0)},s.uint53=function(){return e.uint53(this.engine)},e.uint53Full=function(n){for(;;){var e=0|n();if(!(2097152&e))return 4294967296*(2097151&e)+(n()>>>0);if(2097152==(4194303&e)&&0==(0|n()))return 9007199254740992}},s.uint53Full=function(){return e.uint53Full(this.engine)},e.int53=function(n){var e=0|n();return 4294967296*(2097151&e)+(n()>>>0)+(2097152&e?-9007199254740992:0)},s.int53=function(){return e.int53(this.engine)},e.int53Full=function(n){for(;;){var e=0|n();if(!(4194304&e))return 4294967296*(2097151&e)+(n()>>>0)+(2097152&e?-9007199254740992:0);if(4194304==(8388607&e)&&0==(0|n()))return 9007199254740992}},s.int53Full=function(){return e.int53Full(this.engine)},e.integer=function(){function n(n){return 0==(n+1&n)}function i(e){return n(e)?function(n){return function(e){return e()&n}}(e):function(n){var e=n+1,t=e*Math.floor(4294967296/e);return function(n){var r=0;do{r=n()>>>0}while(r>=t);return r%e}}(e)}function o(e){var t=e+1;if(function(n){return 0==(0|n)}(t)){var r=(t/4294967296|0)-1;if(n(r))return function(n){return function(e){return 4294967296*(e()&n)+(e()>>>0)}}(r)}return function(n){var e=n*Math.floor(9007199254740992/n);return function(t){var r=0;do{r=4294967296*(2097151&t())+(t()>>>0)}while(r>=e);return r%n}}(t)}function u(n,e){return function(t){var r=0;do{var i=0|t();r=4294967296*(2097151&i)+(t()>>>0)+(2097152&i?-9007199254740992:0)}while(n>r||r>e);return r}}return function(n,f){if(n=Math.floor(n),f=Math.floor(f),-9007199254740992>n||!isFinite(n))throw new RangeError("Expected min to be at least -9007199254740992");if(f>9007199254740992||!isFinite(f))throw new RangeError("Expected max to be at most 9007199254740992");var c=f-n;return 0>=c||!isFinite(c)?t(n):4294967295===c?0===n?e.uint32:r(e.int32,n+2147483648):4294967295>c?r(i(c),n):9007199254740991===c?r(e.uint53,n):9007199254740991>c?r(o(c),n):f-1-n==9007199254740991?r(e.uint53Full,n):-9007199254740992===n&&9007199254740992===f?e.int53Full:-9007199254740992===n&&9007199254740991===f?e.int53:-9007199254740991===n&&9007199254740992===f?r(e.int53,1):9007199254740992===f?r(u(n-1,f-1),1):u(n,f)}}(),s.integer=function(n,t){return e.integer(n,t)(this.engine)},e.realZeroToOneInclusive=function(n){return e.uint53Full(n)/9007199254740992},s.realZeroToOneInclusive=function(){return e.realZeroToOneInclusive(this.engine)},e.realZeroToOneExclusive=function(n){return e.uint53(n)/9007199254740992},s.realZeroToOneExclusive=function(){return e.realZeroToOneExclusive(this.engine)},e.real=function(){return function(n,t,i){if(!isFinite(n))throw new RangeError("Expected left to be a finite number");if(!isFinite(t))throw new RangeError("Expected right to be a finite number");return r(function(n,e){return 1===e?n:0===e?function(){return 0}:function(t){return n(t)*e}}(i?e.realZeroToOneInclusive:e.realZeroToOneExclusive,t-n),n)}}(),s.real=function(n,t,r){return e.real(n,t,r)(this.engine)},e.bool=function(){function n(n){return 1==(1&n())}function r(n,e){return function(t){return n(t)<e}}return function(i,o){return null==o?null==i?n:function(n){if(0>=n)return t(!1);if(n>=1)return t(!0);var i=4294967296*n;return i%1==0?r(e.int32,i-2147483648|0):r(e.uint53,Math.round(9007199254740992*n))}(i):0>=i?t(!1):i>=o?t(!0):r(e.integer(0,o-1),i)}}(),s.bool=function(n,t){return e.bool(n,t)(this.engine)},e.pick=function(n,t,r,u){var f=t.length,c=null==r?0:o(i(r),f),a=void 0===u?f:o(i(u),f);if(!(c>=a))return t[e.integer(c,a-1)(n)]},s.pick=function(n,t,r){return e.pick(this.engine,n,t,r)};var l=Array.prototype.slice;e.picker=function(n,t,r){var i=l.call(n,t,r);if(!i.length)return u;var o=e.integer(0,i.length-1);return function(n){return i[o(n)]}},e.shuffle=function(n,t,r){var i=t.length;if(i){null==r&&(r=0);for(var o=i-1>>>0;o>r;--o){var u=e.integer(0,o)(n);if(o!==u){var f=t[o];t[o]=t[u],t[u]=f}}}return t},s.shuffle=function(n){return e.shuffle(this.engine,n)},e.sample=function(n,t,r){if(0>r||r>t.length||!isFinite(r))throw new RangeError("Expected sampleSize to be within 0 and the length of the population");if(0===r)return[];var i=l.call(t),o=i.length;if(o===r)return e.shuffle(n,i,0);var u=o-r;return e.shuffle(n,i,u-1).slice(u)},s.sample=function(n,t){return e.sample(this.engine,n,t)},e.die=function(n){return e.integer(1,n)},s.die=function(n){return e.die(n)(this.engine)},e.dice=function(n,t){var r=e.die(n);return function(n){var e=[];e.length=t;for(var i=0;t>i;++i)e[i]=r(n);return e}},s.dice=function(n,t){return e.dice(n,t)(this.engine)},e.uuid4=function(){function n(n,e){return a("0",e-n.length)+n}return function(e){var t=e()>>>0,r=0|e(),i=0|e(),o=e()>>>0;return n(t.toString(16),8)+"-"+n((65535&r).toString(16),4)+"-"+n((r>>4&4095|16384).toString(16),4)+"-"+n((16383&i|32768).toString(16),4)+"-"+n((i>>4&65535).toString(16),4)+n(o.toString(16),8)}}(),s.uuid4=function(){return e.uuid4(this.engine)},e.string=function(n){null==n&&(n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-");var t=n.length;if(!t)throw new Error("Expected pool not to be an empty string");var r=e.integer(0,t-1);return function(e,t){for(var i="",o=0;t>o;++o){var u=r(e);i+=n.charAt(u)}return i}},s.string=function(n,t){return e.string(t)(this.engine,n)},e.hex=function(){var n="0123456789abcdef",t=e.string(n),r=e.string(n.toUpperCase());return function(n){return n?r:t}}(),s.hex=function(n,t){return e.hex(t)(this.engine,n)},e.date=function(n,t){if(!(n instanceof Date))throw new TypeError("Expected start to be a Date, got "+typeof n);if(!(t instanceof Date))throw new TypeError("Expected end to be a Date, got "+typeof t);var r=e.integer(n.getTime(),t.getTime());return function(n){return new Date(r(n))}},s.date=function(n,t){return e.date(n,t)(this.engine)},"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&"function"==typeof require?module.exports=e:(function(){var t=n[f];e.noConflict=function(){return n[f]=t,this}}(),n[f]=e)}(this);"use strict";const findDirectChildrenByTag=(n,e)=>{if(n.localName===e)return n;const t=n.children;let r=!1,i=[];for(let n=0;n<t.length;n++)t[n].localName===e&&(i.push(t[n]),r=!0);return!!r&&(i.length<=1?i[0]:i)},getParentNodeClassIncludes=(n,e)=>{let t=n;for(;t&&!t.className.includes(e);)t=t.parentNode;return t},randomString=n=>Random.string("qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890«»<>!$%&/()?{[]}~^*-0+.@")(Random.engines.browserCrypto,n);$(document).ready(()=>{const n=Cookies.get("reset");null!=n&&!1!==n&&(console.debug(n),localStorage.removeItem("JWT"),Cookies.remove("JWT"),Cookies.remove("reset"));const e=localStorage.getItem("JWT");null!==e&&(Cookies.remove("JWT"),Cookies.set("JWT",e),localStorage.removeItem("JWT"),document.location.href="/portfolio-os/desktop"),$(document).foundation();const t=document.getElementsByTagName("img");for(let n=0;n<t.length;n++)t[n].addEventListener("dragstart",n=>(n.preventDefault(),!1));const r=document.getElementsByClassName("pass-visibility-span");for(let n=0;n<r.length;n++)r[n].addEventListener("click",n=>{n.stopPropagation();const e=n.target,t=getParentNodeClassIncludes(e,"pass-visibility-span").previousElementSibling,r=findDirectChildrenByTag(e,"img");r.src.includes("show.svg")?(r.src="img/hide.svg",t.type="text"):(r.src="img/show.svg",t.type="password")});document.getElementById("login-as-guest").addEventListener("click",n=>{n.preventDefault(),Cookies.set("IS_GUEST",JSON.stringify(!0)),Cookies.set("GUEST_SESSION",JSON.stringify({id:randomString(21)}))})});