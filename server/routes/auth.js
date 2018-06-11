'use strict'

module.exports = {
  login: (req, res) => {
    console.info('\nEmail:', req.body.email, '\nPassword:', req.body.password, '\n');
    res.status(202).redirect('/desktop');
  },

  register: (req, res) => {
    console.info('\nEmail:', req.body.email, '\nPassword:', req.body.password, '\n');
    res.status(202).redirect('/desktop');
  }
};
