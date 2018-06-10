'use strict'
const path = require('path');
const router = require('express').Router();

router.get(['/desktop/js/:fileName', '/desktop/css/:fileName'], (req, res) => {
  const reqPath = req.path.split(/\//g);

  switch (reqPath[2]) {
    case 'js':
      res.status(200).sendFile(path.join(process.cwd(), `./client/private/js/${req.params.fileName}`));
      break;
    case 'css':
      res.status(200).sendFile(path.join(process.cwd(), `./client/private/css/${req.params.fileName}`));
      break;
    default:
  }
});

router.get('/desktop', (req, res) => {
  res.contentType = 'html';
  console.info(req.body.email, req.body.password);
  res.status(200).sendFile(path.join(process.cwd(), './client/private/desktop.html'));
});

module.exports = router;
