const
  path    = require('path'),
  express = require('express'),
  app     = express(),
  port    = 80

const renderIndex = require('./pages/index')

app
  .use('/assets', express.static('assets'))
  .set('views', path.join(__dirname, 'layouts'))
  .set('view engine', 'ejs')
  .get('/', renderIndex)
  .listen(port, () => {
    console.log(`Listening on port ${port}`)
  })