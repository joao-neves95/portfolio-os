/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
const path = require('path');

const JS_FILES_PATH = './client/private/js/';
const CSS_FILES_PATH = './client/private/css/';

module.exports = {
  getDesktopHtmlPage: ( req, res ) => {
    res.contentType = 'html';
    return res.status( 200 ).sendFile( path.join( process.cwd(), './client/private/desktop.html' ) );
  },

  getDesktopFiles: ( req, res ) => {
    const reqPath = req.path.split( /\//g );

    switch ( reqPath[2] ) {
      case 'js':
        return res.status( 200 ).sendFile( path.join( process.cwd(), JS_FILES_PATH, req.params.fileName ) );
      case 'css':
        return res.status( 200 ).sendFile( path.join( process.cwd(), CSS_FILES_PATH, req.params.fileName ) );
    }
  }
};
