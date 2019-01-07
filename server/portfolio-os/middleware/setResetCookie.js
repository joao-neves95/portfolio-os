module.exports = ( req ) => {
  req.cookie(
    'reset',
    true,
    {
      signed: true,
      audience: process.env.JWT_AUDIENCE,
      issuer: process.env.JWT_ISSUER
    }
  );
};
