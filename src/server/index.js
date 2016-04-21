require('babel-core/register')

const server = require('./server').default

const PORT = process.env.PORT || 1616

server.listen(PORT, function () {
  console.log('Server listening on port', PORT)
})
