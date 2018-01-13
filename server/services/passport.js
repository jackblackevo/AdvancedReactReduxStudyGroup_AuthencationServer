const passport = require('passport')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const User = require('../models/user')
const config = require('../config')

// create some jwt options
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// create jwt strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if user ID in the payload exists in our database
  // if it does call done with that other
  // otherwise, call done without a user object
  User.findById(payload.sub, function (err, user) {
    if (err) {
      return done(err, false)
    }

    if (user) {
      done(null, user)
    } else {
      done(null, false)
    }
  })
})

// tell passport to use this strategy

passport.use(jwtLogin)

module.exports = {
  requireJWTAuth: passport.authenticate('jwt', { session: false })
}
