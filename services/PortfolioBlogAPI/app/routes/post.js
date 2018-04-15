const models = require('@PortfolioBlog/app/setup')
const passport = require('passport')
const config = require('@config')

module.exports = app => {
  const controller = app.PortfolioBlogAPI.app.controllers.post

  app.route('/api/v1/post')
      .post(passport.authenticate('jwt', config.session), controller.store(models.User, models.Post, app.get('postsecret')))
      .get(passport.authenticate('jwt', config.session), controller.getAll(models.User, models.Post, app.get('postsecret')))
      .get(passport.authenticate('jwt', config.session), controller.getAllFromPost(models.User, models.Post, app.get('posttsecret')))
}
