const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://fo-sho.eu.auth0.com/.well-known/jwks.json`
  }),

  audience: 'fosho-general',
  issuer: `https://fo-sho.eu.auth0.com/`,
  algorithms: ["RS256"]
});

module.exports = checkJwt;