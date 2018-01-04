const Authentication = require('./controllers/authentication')
const { requireJWTAuth } = require('./services/passport')
const { localSignInAuth } = require('./services/passport-local')

module.exports = function (app) {
  app.get('/', requireJWTAuth, function (req, res) {
    res.send({
      message: 'Super secret code is ABC12345'
    })
  })
  app.post('/signin', localSignInAuth, Authentication.signin)
  app.post('/signup', Authentication.signup)
}
