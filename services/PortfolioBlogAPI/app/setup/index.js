require('@PortfolioBlogModels/user')
require('@PortfolioBlogModels/post')
require('@PortfolioBlogModels/client')

const mongoose = require('mongoose')
const models = {
  User: mongoose.model('User'),
  Post: mongoose.model('Post'),
  Client: mongoose.model('Client')
}

module.exports = models
