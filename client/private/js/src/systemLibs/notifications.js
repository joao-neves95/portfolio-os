﻿/*
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
