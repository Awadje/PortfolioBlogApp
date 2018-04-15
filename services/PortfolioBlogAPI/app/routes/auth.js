const models = require('@PortfolioBlog/app/setup')

module.exports = app => {
  const controller = app.PortfolioBlogAPI.app.controllers.auth

  app.route('/').get((req, res) => res.send('Budget Manager API'))
  app.route('/api/v1/auth').post(controller.login(models.User))
}
