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
