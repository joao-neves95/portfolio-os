const REFFERER = 'https://duckduckgo.com';

module.exports = ( req, res, next ) => {
  res.set( '_referrer', REFFERER );
  res.set( 'Referer', REFFERER );
  res.set( 'HTTP_REFERER', REFFERER );
  res.set( 'Origin', REFFERER );
  next();
};
