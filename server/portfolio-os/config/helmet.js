'use strict';
// https://github.com/helmetjs/helmet
// 60 days
// const HSTS_MAX_AGE = 5184000;

module.exports = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'https://code.jquery.com', 'https://stackpath.bootstrapcdn.com', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://use.fontawesome.com', 'https://stackpath.bootstrapcdn.com', 'https://cdnjs.cloudflare.com', 'https://cdn.jsdelivr.net'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com', 'https://use.fontawesome.com'],
      imgSrc: ["'self'", "data: https:", 'https://png.icons8.com', 'https://img.icons8.com'],
      mediaSrc: ["'self'"],
      frameSrc: ["'self'"]
    },
  },
  referrerPolicy: {
    policy: 'same-origin'
  },
  permittedCrossDomainPolicies: {
    permittedPolicies: 'none'
  }
  // hsts: {
  //   maxAge: HSTS_MAX_AGE,
  //   includeSubDomains: true
  // }
};
