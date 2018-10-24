// Imports for MergerJS.
//
// @import './externalLibs'
// @import './utils'
// @import './domUtils'
// @import<<DIR './enums/'
// @import<<DIR './models/'
// @import './systemLibs/networking'
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

// const SERVER_ROOT_PATH = 'http://localhost:3000/';
const SERVER_ROOT_PATH = 'http://localhost:2000/';
const IMG_PATH = `${SERVER_ROOT_PATH}img/`;
﻿// when-dom-ready
// https://github.com/lukechilds/when-dom-ready
!function (e, n) { "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : e.whenDomReady = n() }(this, function () { "use strict"; var e = ["interactive", "complete"], n = function (n, t) { return new Promise(function (o) { n && "function" != typeof n && (t = n, n = null), t = t || window.document; var i = function () { return o(void (n && setTimeout(n))) }; -1 !== e.indexOf(t.readyState) ? i() : t.addEventListener("DOMContentLoaded", i) }) }; return n.resume = function (e) { return function (t) { return n(e).then(function () { return t }) } }, n });

// random-js
// https://github.com/ckknight/random-js
!function (n) { "use strict"; function t(n) { if (!(this instanceof t)) return new t(n); if (null == n) n = t.engines.nativeMath; else if ("function" != typeof n) throw new TypeError("Expected engine to be a function, got " + typeof n); this.engine = n } function r(n) { return function () { return n } } function e(n, t) { return 0 === t ? n : function (r) { return n(r) + t } } function i(n) { var t = +n; return 0 > t ? Math.ceil(t) : Math.floor(t) } function u(n, t) { return 0 > n ? Math.max(n + t, 0) : Math.min(n, t) } function o() { return void 0 } var f = "Random", c = "function" != typeof Math.imul || -5 !== Math.imul(4294967295, 5) ? function (n, t) { var r = n >>> 16 & 65535, e = 65535 & n, i = t >>> 16 & 65535, u = 65535 & t; return e * u + (r * u + e * i << 16 >>> 0) | 0 } : Math.imul, a = "function" == typeof String.prototype.repeat && "xxx" === "x".repeat(3) ? function (n, t) { return n.repeat(t) } : function (n, t) { for (var r = ""; t > 0;)1 & t && (r += n), t >>= 1, n += n; return r }, l = t.prototype; t.engines = { nativeMath: function () { return 4294967296 * Math.random() | 0 }, mt19937: function (n) { function r(n) { for (var t = 0, r = 0; 227 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t + 397 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); for (; 623 > (0 | t); t = t + 1 | 0)r = 2147483648 & n[t] | 2147483647 & n[t + 1 | 0], n[t] = n[t - 227 | 0] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0); r = 2147483648 & n[623] | 2147483647 & n[0], n[623] = n[396] ^ r >>> 1 ^ (1 & r ? 2567483615 : 0) } function e(n) { return n ^= n >>> 11, n ^= n << 7 & 2636928640, n ^= n << 15 & 4022730752, n ^ n >>> 18 } function i(n, t) { for (var r = 1, e = 0, i = t.length, u = 0 | Math.max(i, 624), o = 0 | n[0]; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1664525)) + (0 | t[e]) + (0 | e) | 0, r = r + 1 | 0, ++e, (0 | r) > 623 && (n[0] = n[623], r = 1), e >= i && (e = 0); for (u = 623; (0 | u) > 0; --u)n[r] = o = (n[r] ^ c(o ^ o >>> 30, 1566083941)) - r | 0, r = r + 1 | 0, (0 | r) > 623 && (n[0] = n[623], r = 1); n[0] = 2147483648 } function u() { function u() { (0 | f) >= 624 && (r(o), f = 0); var n = o[f]; return f = f + 1 | 0, 0 | e(n) } var o = new n(624), f = 0; return u.discard = function (n) { for ((0 | f) >= 624 && (r(o), f = 0); n - f > 624;)n -= 624 - f, r(o), f = 0; return f = f + n | 0, u }, u.seed = function (n) { var t = 0; o[0] = t = 0 | n; for (var r = 1; 624 > r; r = r + 1 | 0)o[r] = t = c(t ^ t >>> 30, 1812433253) + r | 0; return f = 624, u }, u.seedWithArray = function (n) { return u.seed(19650218), i(o, n), u }, u.autoSeed = function () { return u.seedWithArray(t.generateEntropyArray()) }, u } return u }("function" == typeof Int32Array ? Int32Array : Array), browserCrypto: "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues && "function" == typeof Int32Array ? function () { var n = null, t = 128; return function () { return t >= 128 && (null === n && (n = new Int32Array(128)), crypto.getRandomValues(n), t = 0), 0 | n[t++] } }() : null }, t.generateEntropyArray = function () { for (var n = [], r = t.engines.nativeMath, e = 0; 16 > e; ++e)n[e] = 0 | r(); return n.push(0 | (new Date).getTime()), n }, t.int32 = function (n) { return 0 | n() }, l.int32 = function () { return t.int32(this.engine) }, t.uint32 = function (n) { return n() >>> 0 }, l.uint32 = function () { return t.uint32(this.engine) }, t.uint53 = function (n) { var t = 2097151 & n(), r = n() >>> 0; return 4294967296 * t + r }, l.uint53 = function () { return t.uint53(this.engine) }, t.uint53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(2097152 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r } if (2097152 === (4194303 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.uint53Full = function () { return t.uint53Full(this.engine) }, t.int53 = function (n) { var t = 0 | n(), r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) }, l.int53 = function () { return t.int53(this.engine) }, t.int53Full = function (n) { for (; ;) { var t = 0 | n(); if (!(4194304 & t)) { var r = n() >>> 0; return 4294967296 * (2097151 & t) + r + (2097152 & t ? -9007199254740992 : 0) } if (4194304 === (8388607 & t) && 0 === (0 | n())) return 9007199254740992 } }, l.int53Full = function () { return t.int53Full(this.engine) }, t.integer = function () { function n(n) { return 0 === (n + 1 & n) } function i(n) { return function (t) { return t() & n } } function u(n) { var t = n + 1, r = t * Math.floor(4294967296 / t); return function (n) { var e = 0; do e = n() >>> 0; while (e >= r); return e % t } } function o(t) { return n(t) ? i(t) : u(t) } function f(n) { return 0 === (0 | n) } function c(n) { return function (t) { var r = t() & n, e = t() >>> 0; return 4294967296 * r + e } } function a(n) { var t = n * Math.floor(9007199254740992 / n); return function (r) { var e = 0; do { var i = 2097151 & r(), u = r() >>> 0; e = 4294967296 * i + u } while (e >= t); return e % n } } function l(t) { var r = t + 1; if (f(r)) { var e = (r / 4294967296 | 0) - 1; if (n(e)) return c(e) } return a(r) } function h(n, t) { return function (r) { var e = 0; do { var i = 0 | r(), u = r() >>> 0; e = 4294967296 * (2097151 & i) + u + (2097152 & i ? -9007199254740992 : 0) } while (n > e || e > t); return e } } return function (n, i) { if (n = Math.floor(n), i = Math.floor(i), -9007199254740992 > n || !isFinite(n)) throw new RangeError("Expected min to be at least -9007199254740992"); if (i > 9007199254740992 || !isFinite(i)) throw new RangeError("Expected max to be at most 9007199254740992"); var u = i - n; return 0 >= u || !isFinite(u) ? r(n) : 4294967295 === u ? 0 === n ? t.uint32 : e(t.int32, n + 2147483648) : 4294967295 > u ? e(o(u), n) : 9007199254740991 === u ? e(t.uint53, n) : 9007199254740991 > u ? e(l(u), n) : i - 1 - n === 9007199254740991 ? e(t.uint53Full, n) : -9007199254740992 === n && 9007199254740992 === i ? t.int53Full : -9007199254740992 === n && 9007199254740991 === i ? t.int53 : -9007199254740991 === n && 9007199254740992 === i ? e(t.int53, 1) : 9007199254740992 === i ? e(h(n - 1, i - 1), 1) : h(n, i) } }(), l.integer = function (n, r) { return t.integer(n, r)(this.engine) }, t.realZeroToOneInclusive = function (n) { return t.uint53Full(n) / 9007199254740992 }, l.realZeroToOneInclusive = function () { return t.realZeroToOneInclusive(this.engine) }, t.realZeroToOneExclusive = function (n) { return t.uint53(n) / 9007199254740992 }, l.realZeroToOneExclusive = function () { return t.realZeroToOneExclusive(this.engine) }, t.real = function () { function n(n, t) { return 1 === t ? n : 0 === t ? function () { return 0 } : function (r) { return n(r) * t } } return function (r, i, u) { if (!isFinite(r)) throw new RangeError("Expected left to be a finite number"); if (!isFinite(i)) throw new RangeError("Expected right to be a finite number"); return e(n(u ? t.realZeroToOneInclusive : t.realZeroToOneExclusive, i - r), r) } }(), l.real = function (n, r, e) { return t.real(n, r, e)(this.engine) }, t.bool = function () { function n(n) { return 1 === (1 & n()) } function e(n, t) { return function (r) { return n(r) < t } } function i(n) { if (0 >= n) return r(!1); if (n >= 1) return r(!0); var i = 4294967296 * n; return i % 1 === 0 ? e(t.int32, i - 2147483648 | 0) : e(t.uint53, Math.round(9007199254740992 * n)) } return function (u, o) { return null == o ? null == u ? n : i(u) : 0 >= u ? r(!1) : u >= o ? r(!0) : e(t.integer(0, o - 1), u) } }(), l.bool = function (n, r) { return t.bool(n, r)(this.engine) }, t.pick = function (n, r, e, o) { var f = r.length, c = null == e ? 0 : u(i(e), f), a = void 0 === o ? f : u(i(o), f); if (c >= a) return void 0; var l = t.integer(c, a - 1); return r[l(n)] }, l.pick = function (n, r, e) { return t.pick(this.engine, n, r, e) }; var h = Array.prototype.slice; t.picker = function (n, r, e) { var i = h.call(n, r, e); if (!i.length) return o; var u = t.integer(0, i.length - 1); return function (n) { return i[u(n)] } }, t.shuffle = function (n, r, e) { var i = r.length; if (i) { null == e && (e = 0); for (var u = i - 1 >>> 0; u > e; --u) { var o = t.integer(0, u), f = o(n); if (u !== f) { var c = r[u]; r[u] = r[f], r[f] = c } } } return r }, l.shuffle = function (n) { return t.shuffle(this.engine, n) }, t.sample = function (n, r, e) { if (0 > e || e > r.length || !isFinite(e)) throw new RangeError("Expected sampleSize to be within 0 and the length of the population"); if (0 === e) return []; var i = h.call(r), u = i.length; if (u === e) return t.shuffle(n, i, 0); var o = u - e; return t.shuffle(n, i, o - 1).slice(o) }, l.sample = function (n, r) { return t.sample(this.engine, n, r) }, t.die = function (n) { return t.integer(1, n) }, l.die = function (n) { return t.die(n)(this.engine) }, t.dice = function (n, r) { var e = t.die(n); return function (n) { var t = []; t.length = r; for (var i = 0; r > i; ++i)t[i] = e(n); return t } }, l.dice = function (n, r) { return t.dice(n, r)(this.engine) }, t.uuid4 = function () { function n(n, t) { return a("0", t - n.length) + n } return function (t) { var r = t() >>> 0, e = 0 | t(), i = 0 | t(), u = t() >>> 0; return n(r.toString(16), 8) + "-" + n((65535 & e).toString(16), 4) + "-" + n((e >> 4 & 4095 | 16384).toString(16), 4) + "-" + n((16383 & i | 32768).toString(16), 4) + "-" + n((i >> 4 & 65535).toString(16), 4) + n(u.toString(16), 8) } }(), l.uuid4 = function () { return t.uuid4(this.engine) }, t.string = function () { var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-"; return function (r) { null == r && (r = n); var e = r.length; if (!e) throw new Error("Expected pool not to be an empty string"); var i = t.integer(0, e - 1); return function (n, t) { for (var e = "", u = 0; t > u; ++u) { var o = i(n); e += r.charAt(o) } return e } } }(), l.string = function (n, r) { return t.string(r)(this.engine, n) }, t.hex = function () { var n = "0123456789abcdef", r = t.string(n), e = t.string(n.toUpperCase()); return function (n) { return n ? e : r } }(), l.hex = function (n, r) { return t.hex(r)(this.engine, n) }, t.date = function (n, r) { if (!(n instanceof Date)) throw new TypeError("Expected start to be a Date, got " + typeof n); if (!(r instanceof Date)) throw new TypeError("Expected end to be a Date, got " + typeof r); var e = t.integer(n.getTime(), r.getTime()); return function (n) { return new Date(e(n)) } }, l.date = function (n, r) { return t.date(n, r)(this.engine) }, "function" == typeof define && define.amd ? define(function () { return t }) : "undefined" != typeof module && "function" == typeof require ? module.exports = t : (!function () { var r = n[f]; t.noConflict = function () { return n[f] = r, this } }(), n[f] = t) }(this);
﻿// Utilities.

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
    const y = Math.floor(100 / cellHeightPercent) - 1;
    return {
      x: x,
      y: y
    }
  }

  static insertGrid(gridX, gridY, target, rowTemplate, cellTemplate) {
    let rowCount = 0;
    let cellCount = 0;

    for (let rowIdx = 0; rowIdx <= gridX; rowIdx++) {
      target.innerHTML += rowTemplate(rowIdx + 1);
      rowCount++;

      for (let cellIdx = 0; cellIdx <= gridY; cellIdx++) {
        const lastInsertedRow = document.getElementById(`row-${rowCount}`);
        lastInsertedRow.innerHTML += cellTemplate(cellCount + 1);
        cellCount++;
      }
    }
  }
}

/*

https://github.com/joao-neves95/Exercises_Challenges_Courses/blob/master/JavaScript/Collections.js

Class Dictionary(): let dictionary = new Dictionary(uniqueKeys = false)

Type safe Class List(): let list = new List('string' | 'number' | 'int' | 'float' | 'boolean')

*/

class Errors {
  static get existingKey() { throw new Error( 'An item with the same key has already been added.' ); };

  static get noTypeProvided() { throw new Error( 'No type provided on Collection instantiation.' ) };

  static wrongType( type ) { throw new Error( `The value is not from the same type as the List<${type}>` ); };
}

class Collection {
  constructor( uniqueKeys, type ) {
    this.elements = [];
    this.uniqueKeys = ( uniqueKeys || false );

    if ( !type ) throw Errors.noTypeProvided;
    this.type = type;
  }


  get length() {
    return this.elements.length;
  };

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
  };

  remove( key ) {
    const index = this.findIndexOfKey( key );
    if ( index === false )
      return false;

    this.splice( index );
  };

  /**
   * Get a value with its index. Returns an array with the values.
   * @param {number} index
   * @return {any[]}
   */
  getByIndex( index ) {
    return Object.values( this.elements[index] )[0];
  };

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
        this.push( value );
        break;
      case 'int':
        if ( this.isInt( value ) ) {
          this.push( value );
          break;
        }
      case 'float':
        if ( this.isFloat( value ) ) {
          this.push( value );
          break;
        }
      default:
        if ( typeof value === this.type && value !== 'float' && value !== 'int' )
          this.push( value );
        else
          throw Errors.wrongType( this.type );
    }
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
﻿class DomUtils {

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
﻿const FileSystemItemType = Object.freeze( {
  File: 1,
  FileUrl: 2,
  Executable: 3
} );
﻿const voteType = Object.freeze( {
  DownVote: 0,
  UpVote: 1
} );
﻿class AppRating {
  constructor() {
    this.upVotes = 0;
    this.downVotes = 0;
    this.voteRatio = 0;
    this.userVotes = [];
  }
}
﻿class AppStoreApplication {
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

    this.rating = {};
    this.creation = '';
    this.lastUpdate = '';
  }
}
﻿class FileModel {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } name
   * @param { string } content
   */
  constructor( type, name, content ) {
    this.type = type;
    this.name = name;
    this.content = content;
  }
}
﻿class SystemApp {
  constructor(appName, startMenuIconUrl, taskbarIconUrl, executeFunction) {
    this.name = appName;
    this.executeFunction = (processId) => { executeFunction(processId); };
    this.startMenuIconUrl = startMenuIconUrl;
    this.taskbarIconUrl = taskbarIconUrl;
  }
}
﻿class UserVote {
  constructor( user, voteType ) {
    this.user = user;
    this.voteType = voteType;
    this.timestamp = '';
  }
}
﻿﻿let dragAndDrop = null;

class DragAndDrop {
  constructor() {
    if ( dragAndDrop )
      throw new Error( 'There can only be one instance of DragAndDrop' );

    this.draggableElements = [];

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
    let nonDraggableElements = [];
    nonDraggableElements.push(document.getElementsByTagName('img'));
    nonDraggableElements.push(document.getElementsByTagName('a'));

    for (let i = 0; i < nonDraggableElements[0].length; i++) {
      if (nonDraggableElements[0][i])
        nonDraggableElements[0][i].setAttribute('draggable', 'false');
    }

    for (let i = 0; i < nonDraggableElements[1].length; i++) {
      if (nonDraggableElements[1][i])
        nonDraggableElements[1][i].setAttribute('draggable', 'false');
    }
  }

  updateDraggableElements() {
    this.draggableElements = [];
    this.draggableElements.push(document.getElementsByClassName('draggable')[0]);
    this.draggableElements.push(document.getElementsByClassName('free-draggable')[0]);

    if (this.draggableElements.length <= 0)
      return;

    for (let i = 0; i < this.draggableElements.length; i++) {
      if (this.draggableElements[i])
        this.draggableElements[i].setAttribute('draggable', 'true');
    }
  }

  // #endregion

  // #region LISTENERS

  updateDraggListeners() {
    const constrainedDraggableElems = document.getElementsByClassName('draggable');

    if (constrainedDraggableElems.length <= 0)
      return;

    for (let i = 0; i < constrainedDraggableElems.length; i++) {
      constrainedDraggableElems[i].removeEventListener('dragstart', (e) => { this.dragstartHandler(e); });
      constrainedDraggableElems[i].addEventListener('dragstart', (e) => {
        e.stopPropagation();
        this.dragstartHandler(e);
      });
    }
  }

  updateDroppableListeners() {
    const droppableElems = document.getElementsByClassName('droppable');

    if (droppableElems.length <= 0)
      return;

    for (let i = 0; i < droppableElems.length; i++) {
      droppableElems[i].removeEventListener( 'dragover', ( e ) => { this.dragoverHandler( e ); });
      droppableElems[i].addEventListener('dragover', (e) => {
        e.stopPropagation();
        this.dragoverHandler(e);
      }, false);

      droppableElems[i].removeEventListener( 'drop', ( e ) => { this.dropHandler( e ); });
      droppableElems[i].addEventListener('drop', (e) => {
        e.stopPropagation();
        this.dropHandler(e)
      }, false);
    }
  }

  updateFreeDraggListeners() {
    const freeDraggableElems = document.getElementsByClassName('free-draggable');

    if (freeDraggableElems.length <= 0)
      return;

    for (let i = 0; i < freeDraggableElems.length; i++) {

      freeDraggableElems[i].removeEventListener('mousedown', (e) => { this.freeDragHandler(e); });
      freeDraggableElems[i].addEventListener('mousedown', (e) => {
        this.freeDragHandler(e);
        return false;
      });

      window.removeEventListener('mouseup', (e) => { this.freeDragendHandler(e); });
      window.addEventListener('mouseup', (e) => {
        this.freeDragendHandler(e);
      });
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

    const offset = DomUtils.getOffset( this.currentFreeDragElem );

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
﻿// https://medium.com/the-z/making-a-resizable-div-in-js-is-not-easy-as-you-think-bda19a1bc53d

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

  if ( currWidth >= 799 )
    thisWindow.style.width = currWidth.toString() + 'px';

  if ( currHight >= 418 )
    thisWindow.style.height = currHight.toString() + 'px';
};

new WindowResizer();
﻿// Conect to server.
class FileSystem {

  _fetchFileSystem() {

  }

  /**
   * Get a directory using its complete path.
   * 
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

  get structure() {

    return {
      "root/": {
        // For shivayl (João Neves).
        "portfolioOS/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Video', 'www' )
          ],
          "music/": []
        },
        "applications/": {
          "system/": [
            new SystemApp( 'Terminal', '', '', console.log )
          ],
          "appStore/": [
            new AppStoreApplication( FileSystemItemType.Executable, 'Wikipedia Viewer', 'shivayl', 'https://rawgit.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html' )
          ]
        },
        "user/": {
          "documents/": [
            new FileModel( FileSystemItemType.File, 'My Document', 'Hello World.' )
          ],
          "images/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Image', 'www' )
          ],
          "videos/": [
            new FileModel( FileSystemItemType.FileUrl, 'My Video', 'www' )
          ],
          "music/": [],
          "trash/": []
        }
      }
    };

  }
}

const fileSystem = new FileSystem();
﻿class TaskbarIcon {
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
    document.getElementById(this.id).remove();
  }

  minimized() {
    document.getElementById(this.id).children[0].classList.add('minimized');
    this.isMinimized = true;
  }

  maximized() {
    document.getElementById(this.id).children[0].classList.remove('minimized');
    this.isMinimized = false;
  }
}
﻿const START_MENU_ANIM_DELAY = 1;

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
﻿// TODO: Add the z-index of each each window.

class Window {
  constructor(processId, title, content) {

    this.id = `win-${ processId }`;
    this.title = title;
    this.content = content;
    this.icon = TaskbarIcon;

    this.isMinimized = false;
    this.init();
  }

  get element() { return document.getElementById( this.id ); }

  get template() {
    return `
      <article class="window-manager grid-y resizable" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell large-10">
              <p class="window-title free-draggable">${this.title}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell large-1 icon-wrap">
              <img src="${IMG_PATH}minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="${IMG_PATH}maximize-white.svg" alt="Maximize Window Icon" class="max-size-window icon" />
            </div>
            <div class="cell large-1 icon-wrap">
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

  init() {
    document.getElementById('window-manager-container').innerHTML += this.template;
  }

  kill() {
    this.element.remove();
  }

  minimize() {
    this.element.style.display = 'none';
    this.isMinimized = true;
  }

  maximize() {
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
﻿// TODO: Refactor class.
class WindowManager {
  constructor() {
    this.windows = new Dictionary();
  }

  openNewWindow(processId, content = '') {
    const thisAppInstance = processManager.getAppInstance(processId);
    const thisWindow = new Window(processId, thisAppInstance.name, content);
    const newTaskbarIcon = taskbarManager.addIcon(thisWindow.id, thisAppInstance.taskbarIconUrl);
    thisWindow.icon = newTaskbarIcon;
    this.windows.add(thisWindow.id, thisWindow);

    this.updateListeners();
    dragAndDrop.cancelNonDraggableElements();
    dragAndDrop.updateFreeDraggListeners();
    windowResizer.updateListeners();
    document.getElementById( thisWindow.id ).classList.add( 'anim' );
    document.getElementById( thisWindow.id ).classList.add( 'zoom-in' );
  }

  closeWindow(windowId) {
    this.findWindowInstance(windowId).kill();
    taskbarManager.killIcon(windowId);
    this.windows.remove(windowId);
    this.updateListeners();
  }

  minimizeWindow(windowId) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon(windowId);
  }

  maximizeWindow (windowId) {
    this.findWindowInstance(windowId).maximize();
    taskbarManager.maximizedIcon(windowId);
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
      this.maximizeWindow(thisWindowId);
    else
      this.minimizeWindow(thisWindowId);
  }

  // #endregion

  // UTILITIES:
  findWindowInstance(windowId, Callback) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }
}

const windowManager = new WindowManager();
﻿﻿class SystemAppsManager {
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
    const newApp = new SystemApp(appName, startMenuIconUrl, taskbarIconUrl, executeFunction);
    this.systemApps.add(appName, newApp);
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
﻿class Trash {
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
﻿﻿class TerminalTemplates {
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
    /** @type { fileSystem.structure } */

    this.init();
  }

  get element() { return document.getElementById(this.id); };

  init() {
    windowManager.openNewWindow(this.processId, terminalTemplates.window(this.id));

    this.element.innerHTML += terminalTemplates.addLine(terminalTemplates.withInfo());
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
  deativateLastInput( lastInput = null, aditionalInfo = '' ) {
    const currentActiveInput = document.getElementById( 'active-input' );

    if (currentActiveInput) {
      if ( !lastInput )
        lastInput = this.currentInput;

      DomUtils.getParentByClassInclude( currentActiveInput, 'grid-x input-group line' ).remove();
      this.element.innerHTML += terminalTemplates.withLastInput( lastInput ).addLine();

      if (aditionalInfo !== '')
        this.element.innerHTML += terminalTemplates.withInfo( aditionalInfo ).addLine();

      this.currentInput = '';
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
    const activeInput = document.getElementById('active-input');
    this.focusActiveInput();
    this.element.removeEventListener('focus', this.focusActiveInput, true);
    this.element.addEventListener('focus', this.focusActiveInput, true);
    this.element.removeEventListener('click', this.focusActiveInput, true);
    this.element.addEventListener('click', this.focusActiveInput, true);
    activeInput.addEventListener( 'blur', this.focusActiveInput, true );

    activeInput.addEventListener( 'keypress', ( e ) => {
      if ( e.keyCode === 13 ) {
        this.currentInput = activeInput.value;
        this.executeCommand( e );
      }
    } );
  }

  focusActiveInput() {
    document.getElementById('active-input').focus();
  }

  executeCommand( e ) {
    e.preventDefault();
    const parsedInput = this.parseInput( this.currentInput );
    const cmd = parsedInput.cmd;
    const val = parsedInput.value;
    this.deativateLastInput();

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

    this.addNewInput();
  }

  // COMMAND HANDLERS:
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
      if ( this.currentDir[key] instanceof FileModel )
        dirInfo += this.currentDir[key].name + '<br>';
      else if ( typeof this.currentDir[key] === 'function' )
        continue;
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

    for ( let i = 0; i < dirName.length; ++i) {
      if ( !dirName[i].endsWith( '/' ) )
        dirName[i] += '/';
    }

    this.currentDirName = dirName[dirName.length - 1];
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
﻿class Process {
  constructor(processName) {
    this.id = Utils.randomString(5);
    this.name = processName;
  }
}
﻿class ProcessManager {
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

  getAppInstance(processId) {
    return this.activeProcesses.getByKey(processId);
  }
}

const processManager = new ProcessManager();
﻿class StartMenuApp {
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
﻿class StartMenuManager {
  constructor() {
    this.init();
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
  }

  hide() {
    const that = this.element;
    that.classList.remove( 'anim' );
    that.classList.remove( 'start-menu-slide-up' );
    that.classList.add( 'anim' );
    that.classList.add( 'start-menu-slide-down' );
  }

  outsideClickGlobalEvent( e ) {
    const that = e.target;
    if ( that.closest( '.start-menu' ) || that.closest( '.menu-icon-wrap' ) )
      return;

    this.hide();
  }
}

const startMenuManager = new StartMenuManager();
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
        <figure class="desktop-icon draggable" id="${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">Trash</label>
        </figure>
      `;
    }
  }
}

const desktopTemplates = new DesktopTemplates();
﻿class DesktopIcon {
  constructor(emptyCell, iconUrl, label) {
    this.id = 'd-icon-' + Utils.randomString( 4 );
    this.iconUrl = iconUrl;
    this.label = label;
    this.emptyCell = emptyCell;
    this.isSelected = Boolean;

    this.init();

    this.getCellElem = () => {
      const thisIcon = document.getElementById( this.id ).offsetParent;
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
﻿class DesktopManager {
  constructor() {
    this.rowCount = 0
    this.cellCount = 0;
    this.icons = new Dictionary();

    this.utils = {

      findEmptyCell: () => {
        const cellCount = desktopManager.cellCount;

        for (let i = 0; i < cellCount; i++) {
          let currentCell = document.getElementById(`cell-${i + 1}`);
          if (currentCell.childElementCount <= 0)
            return currentCell;
        }
        return false;
      },

      findIconInstance: (iconId, Callback) => {
        const thisIcon = this.icons.getByKey( iconId );

        if (Callback) Callback(thisIcon);
        else return thisIcon;
      }
    }
  }

  init() {
    const theDesktop = document.getElementById( 'desktop' );
    const grid = Utils.calculateGrid( 5, 15 );
    this.rowCount = grid.y;
    this.cellCount = grid.x;

    Utils.insertGrid( grid.x, grid.y, theDesktop, desktopTemplates.rowTemplate, desktopTemplates.cellTemplate );
  }

  insertNewIcon( iconUrl, label ) {
    const emptyCell = this.utils.findEmptyCell();
    const newIcon = new DesktopIcon( emptyCell, iconUrl, label );
    this.icons.add( newIcon.id, newIcon );
    this.updateListeners();
    dragAndDrop.updateDraggables();
  }

  updateListeners() {
    const allIcons = document.getElementsByClassName( 'desktop-icon' );
    if ( !allIcons ) return false;

    for ( let i = 0; i < allIcons.length; i++ ) {
      allIcons[i].removeEventListener( 'click', this.utils.findIconInstance );
      allIcons[i].addEventListener( 'click', ( e ) => {
        const that = e.target;
        const icon = DomUtils.getParentByTag( that, 'figure' );
        this.utils.findIconInstance( icon.id, ( thisIcon ) => {
          thisIcon.selected();
        } );
      } );

      allIcons[i].removeEventListener( 'dblclick', windowManager.openNewWindow );
      allIcons[i].addEventListener( 'dblclick', ( e ) => {
        const that = e.target;
        const icon = DomUtils.getDirectChildrenByTag( that, 'img' );
        // windowManager.openNewWindow(icon.alt);
        processManager.launchNewProcess( icon.alt );
      } );
    }
  }
}

const desktopManager = new DesktopManager();
﻿class ContextMenuTemplates {
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
﻿// http://ignitersworld.com/lab/contextMenu.html
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
﻿/**
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
﻿// Initializations.

whenDomReady( () => {

  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( "Delete" ), contextMenuTemplates.menuItem( "Open" )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.init();

  console.debug( 'Windows:', windowManager.windows );
  console.debug( 'Taskbar Icons:', taskbarManager.icons );
  dragAndDrop.updateDraggables();
} );
