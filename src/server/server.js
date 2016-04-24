import http from 'http'
import express from 'express'
import webpackHotMiddleware from './webpack-hot-middleware'

const app = express()

webpackHotMiddleware(app)

app.get('/api/contacts', (req, res) =>
  res.send(require('../../contacts.json')))

app.use((req, res) => {
  const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>React Demo</title>
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
        </head>
        <body>
          <div id="root"></div>
          <script type="application/javascript" src="/build/bundle.js"></script>
        </body>
      </html>
     `

  res.end(HTML)
})

const server = http.createServer(app)

export default server
