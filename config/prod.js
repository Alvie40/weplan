// prod.js - production keys here!!
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGOLAB_AMBER_URI,
  cookieKey: process.env.COOKIE_KEY,
  sendGridKey: process.env.SEND_GRID_KEY
};
