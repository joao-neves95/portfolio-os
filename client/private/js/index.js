// Imports for MergerJS.
//
// @import './externalLibs'
// @import './utils'
// @import './domUtils'
// @import './modules/networking'
// @import './modules/taskbarManager/taskbarIcon'
// @import './modules/taskbarManager/taskbarManager'
// @import './modules/windowManager/window'
// @import './modules/windowManager/windowManager.js'
// @import './modules/desktopManager/desktopTemplates'
// @import './modules/desktopManager/desktopManager'
// @import './modules/dragAndDrop.js'
// @import './components/calculator/calculator.html.js'
// @import './components/calculator/calculator.handlers.js'
// @import './components/calculator/calculator.listeners.js'
// @import './main'
//
'use strict'

const SERVER_ROOT_PATH = 'http://localhost:3000/';
const IMG_PATH = `${SERVER_ROOT_PATH}img/`
﻿// when-dom-ready
// https://github.com/lukechilds/when-dom-ready
!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.whenDomReady = n() }(this, function () { "use strict"; var e = ["interactive", "complete"], n = function (n, t) { return new Promise(function (o) { n && "function" != typeof n && (t = n, n = null), t = t || window.document; var i = function () { return o(void (n && setTimeout(n))) }; -1 !== e.indexOf(t.readyState) ? i() : t.addEventListener("DOMContentLoaded", i) }) }; return n.resume = function (e) { return function (t) { return n(e).then(function () { return t }) } }, n });

// random-js
// https://github.com/ckknight/random-js
!function (n) { "use strict"; function t(n) { if (!(this instanceof t)) return new t(n); if (null == n) n = t.engines.nativeMath; else if ("function" != typeof n) throw new TypeError("Expected engine to be a function, got " + typeof n); this.engine = n } function r(n) { return function () { return n } } function e(n, t) { return 0 === t ? n : function (r) { return n(r) + t } } function i(n) { var t = +n; return 0 > t ? Math.ceil(t) : Math.floor(t) } function u(n, t) { return 0 > n ? Math.max(n + t, 0) : Math.min(n, t) } function o() { return void 0 } var f = "Random", c = "function" != typeof Math.imul || -5 !== Math.imul(4294967295, 5) ? function (n, t) { var r = n >>> 16 & 65535, e = 65535 & n, i = t >>> 16 & 65535, u = 65535 & t; return e * u + (r * u + e * i << 16 >>> 0) | 0 } : Math.imul, a = "function" == typeof String.prototype.repeat && "xxx" === "x".repeat(3) ? function (n, t) { return n.repeat(t) } : function (n, t) { for (var r = ""; t > 0;)1 & t && (r += n), t >>= 1, n += n; return r }, l = t.prototype; t.engines = { nativeMath: function () { return 4294967296 * Math.random() | 0 }, mt19937: function (n) { function r(n) { for (var t = 0, r = 0; 227 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t + 397 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); for (; 623 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t - 227 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); r = 2147483648 & n[623] | 2147483647 & n[0], n[623] = n[396] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0) } function e(n) { return n ^= n >>> 11, n ^= n << 7 & 2636928640, n ^= n << 15 & 4022730752, n ^ n >>> 18 } function i(n, t) { for (var r = 1, e = 0, i = t.length, u = 0 | Math.max(i, 624), o = 0 | n[0]; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1664525)) + (0 | t[e]) + (0 | e) | 0, r = r + 1 | 0, ++e, (0 | r) > 623 && (n[0] = n[623], r = 1), e >= i && (e = 0); for (u = 623; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1566083941)) - r | 0, r = r + 1 | 0, (0 | r) > 623 && (n[0] = n[623], r = 1); n[0] = 2147483648 } function u() { function u() { (0 | f) >= 624 && (r(o), f = 0); var n = o[f]; return f = f + 1 | 0, 0 | e(n) } var o = new n(624), f = 0; return u.discard = function (n) { for ((0 | f) >= 624 && (r(o), f = 0); n - f > 624;)n -= 624 - f, r(o), f = 0; return f = f + n | 0, u }, u.seed = function (n) { var t = 0; o[0] = t = 0 | n; for (var r = 1; 624 > r; r = r + 1 | 0)o[r] = t = c(t ^ t >>> 30, 1812433253) + r | 0; return f = 624, u }, u.seedWithArray = function (n) { return u.seed(19650218), i(o, n), u }, u.autoSeed = function () { return u.seedWithArray(t.generateEntropyArray()) }, u } return u }("function" == typeof Int32Array ? Int32Array : Array), browserCrypto: "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof Int32Array ? function () { var n = null, t = 128; return function () { return t >= 128 && (null === n && (n = new Int32Array(128)), crypto.getRandomValues(n), t = 0), 0 | n[t++] } }() : null }, t.generateEntropyArray = function () { for (var n = [], r = t.engines.nativeMath, e = 0; 16 > e; ++e)n[e] = 0 | r(); return n.push(0 | (new Date).getTime()), n }, t.int32 = function (n) { return 0 | n() }, l.int32 = function () { return t.int32(this.engine) }, t.uint32 = function (n) { return n() >>> 0 }, l.uint32 = function () { return t.uint32(this.engine) }, t.uint53 = function (n) { var t = 2097151 & n(), r = n() >>> 0; return 4294967296 * t + r }, l.uint53 = function () { return t.uint53(this.engine) }, t.uint53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(2097152 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r } if (2097152 === (4194303 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.uint53Full = function () { return t.uint53Full(this.engine) }, t.int53 = function (n) { var t = 0 | n(), r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) }, l.int53 = function () { return t.int53(this.engine) }, t.int53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(4194304 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) } if (4194304 === (8388607 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.int53Full = function () { return t.int53Full(this.engine) }, t.integer = function () { function n(n) { return 0 === (n + 1 & n) } function i(n) { return function (t) { return t() & n } } function u(n) { var t = n + 1, r = t * Math.floor(4294967296 / t); return function (n) { var e = 0; do e = n() >>> 0; while (e >= r); return e % t } } function o(t) { return n(t) ? i(t) : u(t) } function f(n) { return 0 === (0 | n) } function c(n) { return function (t) { var r = t() & n, e = t() >>> 0; return 4294967296 * r + e } } function a(n) { var t = n * Math.floor(9007199254740992 / n); return function (r) { var e = 0; do { var i = 2097151 & r(), u = r() >>> 0; e = 4294967296 * i + u } while (e >= t); return e % n } } function l(t) { var r = t + 1; if (f(r)) { var e = (r / 4294967296 | 0) - 1; if (n(e)) return c(e) } return a(r) } function h(n, t) { return function (r) { var e = 0; do { var i = 0 | r(), u = r() >>> 0; e = 4294967296 * (2097151 & i) + u + (2097152 & i ? -9007199254740992 : 0) } while (n > e || e > t); return e } } return function (n, i) { if (n = Math.floor(n), i = Math.floor(i), -9007199254740992 > n || !isFinite(n)) throw new RangeError("Expected min to be at least -9007199254740992"); if (i > 9007199254740992 || !isFinite(i)) throw new RangeError("Expected max to be at most 9007199254740992"); var u = i - n; return 0 >= u || !isFinite(u) ? r(n) : 4294967295 === u ? 0 === n ? t.uint32 : e(t.int32, n + 2147483648) : 4294967295 > u ? e(o(u), n) : 9007199254740991 === u ? e(t.uint53, n) : 9007199254740991 > u ? e(l(u), n) : i - 1 - n === 9007199254740991 ? e(t.uint53Full, n) : -9007199254740992 === n && 9007199254740992 === i ? t.int53Full : -9007199254740992 === n && 9007199254740991 === i ? t.int53 : -9007199254740991 === n && 9007199254740992 === i ? e(t.int53, 1) : 9007199254740992 === i ? e(h(n - 1, i - 1), 1) : h(n, i) } }(), l.integer = function (n, r) { return t.integer(n, r)(this.engine) }, t.realZeroToOneInclusive = function (n) { return t.uint53Full(n) / 9007199254740992 }, l.realZeroToOneInclusive = function () { return t.realZeroToOneInclusive(this.engine) }, t.realZeroToOneExclusive = function (n) { return t.uint53(n) / 9007199254740992 }, l.realZeroToOneExclusive = function () { return t.realZeroToOneExclusive(this.engine) }, t.real = function () { function n(n, t) { return 1 === t ? n : 0 === t ? function () { return 0 } : function (r) { return n(r) * t } } return function (r, i, u) { if (!isFinite(r)) throw new RangeError("Expected left to be a finite number"); if (!isFinite(i)) throw new RangeError("Expected right to be a finite number"); return e(n(u ? t.realZeroToOneInclusive : t.realZeroToOneExclusive, i - r), r) } }(), l.real = function (n, r, e) { return t.real(n, r, e)(this.engine) }, t.bool = function () { function n(n) { return 1 === (1 & n()) } function e(n, t) { return function (r) { return n(r) < t } } function i(n) { if (0 >= n) return r(!1); if (n >= 1) return r(!0); var i = 4294967296 * n; return i % 1 === 0 ? e(t.int32, i - 2147483648 | 0) : e(t.uint53, Math.round(9007199254740992 * n)) } return function (u, o) { return null == o ? null == u ? n : i(u) : 0 >= u ? r(!1) : u >= o ? r(!0) : e(t.integer(0, o - 1), u) } }(), l.bool = function (n, r) { return t.bool(n, r)(this.engine) }, t.pick = function (n, r, e, o) { var f = r.length, c = null == e ? 0 : u(i(e), f), a = void 0 === o ? f : u(i(o), f); if (c >= a) return void 0; var l = t.integer(c, a - 1); return r[l(n)] }, l.pick = function (n, r, e) { return t.pick(this.engine, n, r, e) }; var h = Array.prototype.slice; t.picker = function (n, r, e) { var i = h.call(n, r, e); if (!i.length) return o; var u = t.integer(0, i.length - 1); return function (n) { return i[u(n)] } }, t.shuffle = function (n, r, e) { var i = r.length; if (i) { null == e && (e = 0); for (var u = i - 1 >>> 0; u > e; --u) { var o = t.integer(0, u), f = o(n); if (u !== f) { var c = r[u]; r[u] = r[f], r[f] = c } } } return r }, l.shuffle = function (n) { return t.shuffle(this.engine, n) }, t.sample = function (n, r, e) { if (0 > e || e > r.length || !isFinite(e)) throw new RangeError("Expected sampleSize to be within 0 and the length of the population"); if (0 === e) return []; var i = h.call(r), u = i.length; if (u === e) return t.shuffle(n, i, 0); var o = u - e; return t.shuffle(n, i, o - 1).slice(o) }, l.sample = function (n, r) { return t.sample(this.engine, n, r) }, t.die = function (n) { return t.integer(1, n) }, l.die = function (n) { return t.die(n)(this.engine) }, t.dice = function (n, r) { var e = t.die(n); return function (n) { var t = []; t.length = r; for (var i = 0; r > i; ++i)t[i] = e(n); return t } }, l.dice = function (n, r) { return t.dice(n, r)(this.engine) }, t.uuid4 = function () { function n(n, t) { return a("0", t - n.length) + n } return function (t) { var r = t() >>> 0, e = 0 | t(), i = 0 | t(), u = t() >>> 0; return n(r.toString(16), 8) + "-" + n((65535 & e).toString(16), 4) + "-" + n((e >> 4 & 4095 | 16384).toString(16), 4) + "-" + n((16383 & i | 32768).toString(16), 4) + "-" + n((i >> 4 & 65535).toString(16), 4) + n(u.toString(16), 8) } }(), l.uuid4 = function () { return t.uuid4(this.engine) }, t.string = function () { var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"; return function (r) { null == r && (r = n); var e = r.length; if (!e) throw new Error("Expected pool not to be an empty string"); var i = t.integer(0, e - 1); return function (n, t) { for (var e = "", u = 0; t > u; ++u) { var o = i(n); e += r.charAt(o) } return e } } }(), l.string = function (n, r) { return t.string(r)(this.engine, n) }, t.hex = function () { var n = "0123456789abcdef", r = t.string(n), e = t.string(n.toUpperCase()); return function (n) { return n ? e : r } }(), l.hex = function (n, r) { return t.hex(r)(this.engine, n) }, t.date = function (n, r) { if (!(n instanceof Date)) throw new TypeError("Expected start to be a Date, got " + typeof n); if (!(r instanceof Date)) throw new TypeError("Expected end to be a Date, got " + typeof r); var e = t.integer(n.getTime(), r.getTime()); return function (n) { return new Date(e(n)) } }, l.date = function (n, r) { return t.date(n, r)(this.engine) }, "function" == typeof define && define.amd ? define(function () { return t }) : "undefined" != typeof module && "function" == typeof require ? module.exports = t : (!function () { var r = n[f]; t.noConflict = function () { return n[f] = r, this } }(), n[f] = t) }(this);
﻿// Utilities.
'use strict'

class Utils {
  static randomString(length) {
    return Random.string('qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890?!#$%&/()')(Random.engines.browserCrypto, length);
  }

  static randomNumString(length) {
    return Random.string('1234567890')(Random.engines.browserCrypto, length);
  }

  static parseIDs(id) {
    const split = id.split(/_/g);
    return split;
  }
}
﻿class DomUtils {
   /**
    * 
    * @param {HTMLElement} elem
    * The element where the search starts.
    * 
    * @param {string} query
    * The id search query.
    */
  static getParentByIdInclude(elem, query) {
    let that = elem
    while (that && !that.id.includes(query)) {
      that = that.parentNode
    }
    return that
  };

  static getParentByTag(elem, tag) {
    let that = elem
    while (that && that.localName !== tag) {
      that = that.parentNode
    }
    return that
  };

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
  };

  static getAttributeFromElem(elem, attribute) {
    const attr = elem.attributes;
    for (let i = 0; i < attr.length; i++) {
      if (attr[i].localName === attribute)
        return attr[i].nodeValue;
    }
  };
}
﻿﻿class TaskbarIcon {
  /**
   * 
   * @param {string} windowId
   * The window that this icon is linked to.
   * 
   * @param {string} iconUrl
   * The image url of this icon.
   */
  constructor(windowId, iconUrl) {
    this.id = 'icn_' + windowId;
    this.windowId = windowId;
    this.iconContainerElem = document.getElementById('icon-container');
    this.iconUrl = SERVER_ROOT_PATH + 'img/default-taskbar-icon-white.svg';
    this.isMinimized = Boolean;

    if (iconUrl) this.iconUrl = iconUrl;

    this.template = `
      <li id="${this.id}">
        <img src="${this.iconUrl}" alt="Menu Icon" class="icon" />
      </li>`;

    // METHODS:
    this.init = () => {
      this.iconContainerElem.innerHTML += this.template;
      this.isMinimized = false;
    }

    this.kill = () => {
      document.getElementById(this.id).remove();
    }

    this.minimized = () => {
      document.getElementById(this.id).children[0].classList.add('minimized');
      this.isMinimized = true;
    }

    this.maximized = () => {
      document.getElementById(this.id).children[0].classList.remove('minimized');
      this.isMinimized = false;
    }

    // EVENT:
    this.clicked = () => {
      if (this.clicked) return;
    }
  }
}
﻿class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = [];

    /**
     * 
     * @param {string} windowId 
     * The window that this icon is linked to.
     */
    this.addIcon = (windowId) => {
      const newIcon = new TaskbarIcon(windowId);
      this.icons.push(newIcon);
      newIcon.init();
      return newIcon;
    }

    this.killIcon = (windowId) => {
      findIconInstance(windowId).kill();
    }

    this.minimizedIcon = (windowId) => {
      findIconInstance(windowId).minimized();
    }

    this.maximizedIcon = (windowId) => {
      findIconInstance(windowId).maximized();
    }
  }
}

const taskbarManager = new TaskbarManager();

// UTILITIES:
const findIconInstance = (windowId, Callback) => {
  const icons = taskbarManager.icons;
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].windowId === windowId) {
      if (Callback) Callback();
      else return icons[i];
    }
  }
}
﻿class Window {
  constructor (windowTitle) {
    this.id = 'win-' + Utils.randomString(5);
    this.windowTitle = windowTitle;
    this.element = HTMLElement;
    this.icon = TaskbarIcon;
    this.isMinimized = Boolean;

    if (!windowTitle) this.windowTitle = '';

    this.template = `
      <article class="window-manager free-draggable" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell large-10">
              <p class="window-title">${this.windowTitle}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell large-1 icon-wrap">
              <img src="${SERVER_ROOT_PATH}img/minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="${SERVER_ROOT_PATH}img/maximize-white.svg" alt="Maximize Window Icon" class="icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="${SERVER_ROOT_PATH}img/close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
      </article>`

    this.init = () => {
      document.getElementById('window-manager-container').innerHTML += this.template;
      this.element = document.getElementById(this.id);
      this.isMinimized = false;
    }

    this.kill = () => {
      document.getElementById(this.id).remove();
    }

    this.minimize = () => {
      document.getElementById(this.id).style.display = 'none';
      this.isMinimized = true;
    }

    this.maximize = () => {
      document.getElementById(this.id).style.display = 'block';
      this.isMinimized = false;
    }
  }
}
﻿class WindowManager {
  constructor () {
    this.windows = [];

    this.openNewWindow = (windowTitle, content) => {
      if (!content) content = '';

      const thisWindow = new Window(windowTitle);
      this.windows.push(thisWindow);
      thisWindow.init();
      const newIcon = taskbarManager.addIcon(thisWindow.id);
      thisWindow.icon = newIcon;
      this.updateListeners();
    };

    this.closeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).kill();
      taskbarManager.killIcon(windowId);
      this.updateListeners();
    };

    this.minimizeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).minimize();
      taskbarManager.minimizedIcon(windowId);
    };

    this.maximizeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).maximize();
      taskbarManager.maximizedIcon(windowId);
    };

    this.updateListeners = () => {
      const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

      for (let i = 0; i < allCloseWindowsBtns.length; i++) {
        allCloseWindowsBtns[i].removeEventListener('click', this.eventHandlers.closeWindowHandler);
        allCloseWindowsBtns[i].addEventListener('click', (e) => {
          this.eventHandlers.closeWindowHandler(e, allCloseWindowsBtns[i]);
        });
      };

      const allMinimizeWindowsBtns = document.querySelectorAll('[id^="win-"] .minimize-window');

      for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
        allMinimizeWindowsBtns[i].removeEventListener('click', this.eventHandlers.minimizeWindowHandler);
        allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
          this.eventHandlers.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
        });
      }

      const allTaskbarIcons = document.querySelectorAll('[id^="icn_"] .icon');

      for (let i = 0; i < allTaskbarIcons.length; i++) {
        allTaskbarIcons[i].removeEventListener('click', this.eventHandlers.taskbarIconsHandler);
        allTaskbarIcons[i].addEventListener('click', (e) => {
          this.eventHandlers.taskbarIconsHandler(e, allTaskbarIcons[i]);
        });
      }
    };

    this.eventHandlers = {

      closeWindowHandler: (e, closeWindowBtn) => {
        console.debug('close')
        e.stopPropagation();
        const thisWindow = DomUtils.getParentByIdInclude(closeWindowBtn, 'win-');
        windowManager.closeWindow(thisWindow.id);
      },

      minimizeWindowHandler: (e, minimizeWindowBtn) => {
        e.stopPropagation();
        const thisWindow = DomUtils.getParentByIdInclude(minimizeWindowBtn, 'win-');
        windowManager.minimizeWindow(thisWindow.id);
      },

      taskbarIconsHandler: (e, taskbarIcon) => {
        e.stopPropagation();
        const thisIconId = DomUtils.getParentByIdInclude(taskbarIcon, 'win-').id;
        const thisWindowId = Utils.parseIDs(thisIconId)[1];
        const thisWindow = this.utils.findWindowInstance(thisWindowId);
        if (thisWindow.isMinimized)
          windowManager.maximizeWindow(thisWindowId);
        else
          windowManager.minimizeWindow(thisWindowId);
      }
    };

    this.utils = {
      findWindowInstance: (windowId, Callback) => {
        for (let i = 0; i < this.windows.length; i++) {
          if (this.windows[i].id === windowId) {
            if (Callback) Callback();
            else return this.windows[i];
          }
        }
      }
    }
  }
}

const windowManager = new WindowManager();
﻿class DesktopTemplates {
  constructor() {
    this.rowTemplate = (idx) => {
      return `
        <div id="row-${idx}" class="grid-y desktop-row"></div>
      `;
    }

    this.cellTemplate = (idx, content) => {
      if (!content) content = '';

      return `
        <article id="cell-${idx}" class="cell desktop-cell droppable"></article>
      `;
    } 

    this.iconTemplate = (id, iconUrl, label) => {
      if (!label) label = 'Desktop Icon';

      return `
        <figure class="desktop-icon draggable" id="d-icon-${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">Trash</label>
        </figure>
      `;
    }
  }
}
﻿const desktopTemplates = new DesktopTemplates();

class DesktopManager {
  constructor() {
    this.rowCount = 0
    this.cellCount = 0;
    this.icons = [];

    this.init = () => {
      const theDesktop = document.getElementById('desktop');

      for (let rowIdx = 0; rowIdx <= 19; rowIdx++) {
        theDesktop.innerHTML += desktopTemplates.rowTemplate(rowIdx + 1);
        this.rowCount++;

        for (let cellIdx = 0; cellIdx <= 5; cellIdx++) {
          const lastInsertedRow = document.getElementById(`row-${this.rowCount}`);
          lastInsertedRow.innerHTML += desktopTemplates.cellTemplate(this.cellCount + 1);
          this.cellCount++;
        }
      }
    }

    // TODO: Create a DesktopIcon class and add it to the DesktopManager on instantiation.
    this.insertIcon = (iconUrl, label) => {
      const emptyCell = findEmptyCell();
      const newIconId = Utils.randomString(4);
      emptyCell.innerHTML = desktopTemplates.iconTemplate(newIconId, iconUrl, label);
      this.updateListeners();
    }

    this.updateListeners = () => {
      const allIcons = document.getElementsByClassName('desktop-icon');
      if (!allIcons) return false;

      for (let i = 0; i < allIcons.length; i++) {
        allIcons[i].removeEventListener('click', this.selectedIcon);
        allIcons[i].addEventListener('click', (e) => {
          console.debug('click')
          const that = e.target;
          const figure = DomUtils.getParentByTag(that, 'figure');
          this.selectedIcon(figure);
        });

        allIcons[i].removeEventListener('dblclick', windowManager.openNewWindow);
        allIcons[i].addEventListener('dblclick', (e) => {
          const that = e.target;
          const icon = DomUtils.getDirectChildrenByTag(that, 'img');
          windowManager.openNewWindow(icon.alt);
        });
      }
    }

    // TEMPORARY.
    // TODO: Pass this to the DesktopIcon class.
    this.selectedIcon = (icon) => {
      if (icon.className.includes('selected'))
        icon.classList.remove('selected');
      else
        icon.classList.add('selected');
    }
  }
}

const desktopManager = new DesktopManager();

const findEmptyCell = () => {
  const cellCount = desktopManager.cellCount;

  for (let i = 0; i < cellCount; i++) {
    let currentCell = document.getElementById(`cell-${i + 1}`);
    if (currentCell.childElementCount <= 0)
      return currentCell;
  }
  return false;
}
﻿class DragAndDrop {
  constructor() {
    this.draggableElements = [];

    this.init = () => {
      this.updateDraggables();
      this.updateFreeDraggListeners();
    };

    this.updateDraggables = () => {
      this.cancelNonDraggableElements();
      this.updateDraggableElements();
      this.updateDraggListeners();
      this.updateDroppableListeners();
    };

    this.cancelNonDraggableElements = () => {
      let nonDraggableElements = [];
      nonDraggableElements.push(document.getElementsByTagName('img'));
      nonDraggableElements.push(document.getElementsByTagName('a'));

      for (let i = 0; i < nonDraggableElements[0].length; i++) {
        nonDraggableElements[0][i].setAttribute('draggable', 'false');
      }
    };

    this.updateDraggableElements = () => {
      this.draggableElements = [];
      this.draggableElements.push(document.getElementsByClassName('draggable'));
      this.draggableElements.push(document.getElementsByClassName('free-draggable'));

      for (let i = 0; i < this.draggableElements.length; i++) {
        this.draggableElements[i][0].setAttribute('draggable', 'true');
      }
    };

    this.updateFreeDraggListeners = () => {
      const freeDraggableElems = document.getElementsByClassName('free-draggable');
      for (let i = 0; i < freeDraggableElems.length; i++) {
        freeDraggableElems[i].removeEventListener('dragstart', this.eventHandlers.freeDragstartHandler);
        freeDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.freeDragstartHandler(e);
        });
      }
    };

    this.updateDraggListeners = () => {
      const constrainedDraggableElems = document.getElementsByClassName('draggable');
      for (let i = 0; i < constrainedDraggableElems.length; i++) {
        constrainedDraggableElems[i].removeEventListener('dragstart', this.eventHandlers.dragstartHandler);
        constrainedDraggableElems[i].addEventListener('dragstart', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragstartHandler(e);
        });
      }
    };

    this.updateDroppableListeners = () => {
      const droppableElems = document.getElementsByClassName('droppable');
      for (let i = 0; i < droppableElems.length; i++) {
        droppableElems[i].removeEventListener('dragover', this.eventHandlers.dragoverHandler);
        droppableElems[i].addEventListener('dragover', (e) => {
          e.stopPropagation();
          this.eventHandlers.dragoverHandler(e);
        }, false);


        droppableElems[i].removeEventListener('drop', this.eventHandlers.dropHandler);
        droppableElems[i].addEventListener('drop', (e) => {
          e.stopPropagation();
          this.eventHandlers.dropHandler(e)
        }, false);
      }
    };

    this.eventHandlers = {

      dragstartHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        this.utils.populateDataTransfer(e);
        return false;
      },

      dragoverHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        if (that.children.length > 0)
          return;

        this.utils.acceptDrop(e);
        return false;
      },

      dropHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        const newElement = new DOMParser().parseFromString(e.dataTransfer.getData('text/html'), 'text/html').body.firstChild;
        document.getElementById(newElement.id).remove();
        // data.classList.add('animated', 'bounceIn');
        that.insertAdjacentElement('afterbegin', newElement);
        this.updateDraggables();
        desktopManager.updateListeners();
      },

      // TODO: Finish the free draggable handler (for windows).
      freeDragstartHandler: (e) => {
        e.stopPropagation();
        const that = e.target;
        this.utils.populateDataTransfer(e);
        return false;
      }
    };

    this.utils = {

      populateDataTransfer: (e) => {
        const that = e.target;
        const id = that.id;
        const tag = that.localName;
        const classes = that.className;
        const data = `<${tag} id="${id}" class="${classes}"> ${that.innerHTML} </${tag}>`;
        e.dataTransfer.setData('text/html', data)
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.dropEffect = 'move'
      },

      acceptDrop: (e) => {
        e.preventDefault()
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.dropEffect = 'move'
      }
    };
  }
}
﻿﻿﻿﻿// Initializations.
const dragAndDrop = new DragAndDrop();

whenDomReady(() => {

  desktopManager.init();
  desktopManager.insertIcon(IMG_PATH + 'trash.svg', 'Trash');
 
  windowManager.openNewWindow('A Window Title');

  dragAndDrop.init();

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
});
