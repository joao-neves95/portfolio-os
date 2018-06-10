'use strict'
const path = require('path');

const JS_FILES_PATH = './client/private/js/';
const CSS_FILES_PATH = './client/private/css/';

module.exports = {
  getDesktopHtmlPage: (req, res) => {
    res.contentType = 'html';
    res.status(200).sendFile(path.join(process.cwd(), './client/private/desktop.html'));
  },

  getDesktopFiles: (req, res) => {
    const reqPath = req.path.split(/\//g);

    switch (reqPath[2]) {
      case 'js':
        res.status(200).sendFile(path.join(process.cwd(), JS_FILES_PATH, req.params.fileName));
        break;
      case 'css':
        res.status(200).sendFile(path.join(process.cwd(), CSS_FILES_PATH, req.params.fileName));
        break;
      default:
    }
  }
}
