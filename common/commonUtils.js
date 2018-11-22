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
    return input.toString().trim().replace( /</g, '&lt;' ).replace( />/g, '&gt;' ).replace( /'/g, '&#x27;' ).replace( /"/g, '&#34;' ).replace( /&/g, '&amp;' ).replce( /\//g, '&#x2F;' );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = CommonUtils;

} catch {
  // Do nothing, this is the browser.
}
