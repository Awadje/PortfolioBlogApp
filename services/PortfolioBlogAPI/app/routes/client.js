const models = require('@PortfolioBlog/app/setup')
const passport = require('passport')
const config = require('@config')

module.exports = app => {
  const controller = app.PortfolioBlogAPI.app.controllers.client

  app.route('/api/v1/client')
      .post(passport.authenticate('jwt', config.session), controller.store(models.User, models.Client, app.get('postsecret')))
      .get(passport.authenticate('jwt', config.session), controller.getAll(models.User, models.Client, app.get('postsecret')))
}
