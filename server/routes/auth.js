'use strict'

module.exports = {
  login: (req, res) => {
    console.info(req.body.email, req.body.password);
    res.status(202).redirect('/desktop');
  }
};
