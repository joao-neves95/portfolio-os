'use strict'

class DomUtils {
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
  }
}
