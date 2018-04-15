const models = require('@PortfolioBlog/app/setup')

module.exports = app => {
  const controller = app.PortfolioBlogAPI.app.controllers.user

  app.route('/api/v1/setup').post(controller.setup(models.User))

  app.route('/api/v1/signup').post(controller.signup(models.User))
}
