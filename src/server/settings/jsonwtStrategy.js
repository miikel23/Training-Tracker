const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require('../models/model_user');
const myKey = require("./secret");
var secret = myKey.secret;

module.exports = passport => {
 // This verifies that the token sent by the user is valid
  passport.use(
    new JwtStrategy(
      {
        secretOrKey: `${secret}`,

        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
      },
      // eslint-disable-next-line consistent-return
      async (token, done) => {
        try {
          // Find the user associated with the email provided by the user
          const user = await User.findOne({
            where: {
              // eslint-disable-next-line object-shorthand
              username: token.username,
            },
          });
          if (!user) {
            // If the user isn't found in the database, return a message
            return done(null, false, { message: 'User not found' });
          }

          // Send the user information to the next middleware
          return done(null, user, { message: 'Logged in Successfully' });
        } catch (error) {
          done(error);
        }
      }
    )
  );
};