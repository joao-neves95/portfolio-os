/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

'use strict';
// https://github.com/helmetjs/helmet
// 60 days
const HSTS_MAX_AGE = 5184000;

module.exports = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", process.env.HOST, 'https://shivayl.com'],
      connectSrc: ["'self'", process.env.HOST, 'https://www.shivayl.com'],
      scriptSrc: ["'self'", process.env.HOST, 'https://shivayl.com', 'https://code.jquery.com', 'https://stackpath.bootstrapcdn.com', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", process.env.HOST, 'https://shivayl.com', "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://use.fontawesome.com', 'https://stackpath.bootstrapcdn.com', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
      fontSrc: ["'self'", process.env.HOST, 'https://shivayl.com', 'https://fonts.gstatic.com', 'https://use.fontawesome.com'],
      imgSrc: ["'self'", process.env.HOST, 'https://shivayl.com', "data: https:", 'https://png.icons8.com', 'https://img.icons8.com'],
      mediaSrc: ["'self'", process.env.HOST, 'https://shivayl.com'],
      frameSrc: ["'self'", process.env.HOST, 'https://shivayl.com']
    }
  },
  referrerPolicy: {
    policy: 'same-origin'
  },
  permittedCrossDomainPolicies: {
    permittedPolicies: 'none'
  },
  hsts: {
    maxAge: HSTS_MAX_AGE,
    includeSubDomains: true
  }
};
