/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';

// #region UTILS
const findDirectChildrenByTag = ( elem, tag ) => {
  if ( elem.localName === tag ) return elem;

  const that = elem.children;
  let found = false;
  let elems = [];
  for ( let i = 0; i < that.length; i++ ) {
    if ( that[i].localName === tag ) {
      elems.push( that[i] );
      found = true;
    }
  }
  if ( found ) {
    if ( elems.length <= 1 )
      return elems[0];
    else
      return elems;
  }

  return false;
};

const getParentNodeClassIncludes = ( elem, query ) => {
  let that = elem;
  while ( that && !that.className.includes( query ) ) {
    that = that.parentNode;
  }

  return that;
};

// From an external library.
const randomString = ( length ) => {
  return Random.string( 'qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPÇLKJHGFDSAZXCVBNM1234567890«»<>!$%&/()?{[]}~^*-0+.@' )( Random.engines.browserCrypto, length );
};

// #endregion

$( document ).ready( () => {
  const reset = Cookies.get( 'reset' );
  if ( reset !== undefined || reset !== null ) {
    localStorage.removeItem( 'JWT' );
    Cookies.remove( 'JWT' );
    Cookies.remove( 'reset' );
  }

  const jwt = localStorage.getItem( 'JWT' );
  if ( jwt !== null ) {
    Cookies.remove( 'JWT' );
    Cookies.set( 'JWT', jwt );
    localStorage.removeItem( 'JWT' );
    document.location.href = '/portfolio-os/desktop';
  }

  $( document ).foundation();

  const allPageImgs = document.getElementsByTagName( 'img' );
  for ( let i = 0; i < allPageImgs.length; i++ ) {
    allPageImgs[i].addEventListener( 'dragstart', ( e ) => {
      e.preventDefault();
      return false;
    } );
  }

  const showHidePasswordIcons = document.getElementsByClassName( 'pass-visibility-span' );
  for ( let i = 0; i < showHidePasswordIcons.length; i++ ) {
    showHidePasswordIcons[i].addEventListener( 'click', ( e ) => {
      e.stopPropagation();

      const that = e.target;
      const passwordInput = getParentNodeClassIncludes( that, 'pass-visibility-span' ).previousElementSibling;
      const showHideImg = findDirectChildrenByTag( that, 'img' );

      if ( showHideImg.src.includes( 'show.svg' ) ) {
        showHideImg.src = 'img/hide.svg';
        passwordInput.type = 'text';
      } else {
        showHideImg.src = 'img/show.svg';
        passwordInput.type = 'password';
      }
    } );
  }

  document.getElementById( 'login-as-guest' ).addEventListener( 'click', ( e ) => {
    e.preventDefault();
    Cookies.set( 'IS_GUEST', JSON.stringify( true ) );
    Cookies.set( 'GUEST_SESSION', JSON.stringify( { id: randomString( 21 ) } ) );
  } );

  //document.getElementById( 'register-btn' ).addEventListener( 'click', ( e ) => {
  //  e.preventDefault();

  //  const userPassword = document.getElementById( 'register-password' ).value;
  //  const passwordRepeat = document.getElementById( 'register-password-repeat' ).value;

  //  if ( passwordRepeat !== userPassword ) {
  //    console.debug( 'The passwords do not match.' );
  //    e.preventDefault();
  //    return false;
  //  }

  //  document.getElementById( 'register' ).submit();
  //}, false );
} );
