import http from 'http'
import express from 'express'
import webpackHotMiddleware from './webpack-hot-middleware'

const app = express()

webpackHotMiddleware(app)

app.use((req, res) => {
  const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>React Demo</title>
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