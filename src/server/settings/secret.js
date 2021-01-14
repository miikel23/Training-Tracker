require('dotenv').config();

module.exports = {
  secret: process.env.JWT_KEY,
  TESTACCESSTOKEN: process.env.TESTACCESSTOKEN,
};