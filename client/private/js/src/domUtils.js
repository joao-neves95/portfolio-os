﻿/*
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
