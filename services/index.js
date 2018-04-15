require('module-alias/register')

const http = require('http')
const PortfolioBlogAPI = require('@PortfolioBlogAPI')
const PortfolioBlogServer = http.Server(PortfolioBlogAPI)
const PortfolioBlogPORT = process.env.PORT || 3001
const LOCAL = '0.0.0.0'

PortfolioBlogServer.listen(PortfolioBlogPORT, LOCAL, () => console.info('PortfolioBlogAPI running on', PortfolioBlogPORT))
