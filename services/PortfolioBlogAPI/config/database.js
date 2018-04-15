module.exports = (mongoose, config) => {
  const database = mongoose.connection

  mongoose.Promise = Promise
  mongoose.connect(config.database, {
    promiseLibrary: global.Promise
  })

  database.on('error', error => console.error('Connection to PortfolioBlog database failed', error))
          .on('connected', () => console.info('Connected to PortfolioBlog database'))
          .on('disconnected', () => console.info('Disconnected from PortfolioBlog database'))

  process.on('SIGINT', () => {
    database.close(() => {
      console.info('PortfolioBlog terminated, connection closed')
      process.exit(0)
    })
  })
}
