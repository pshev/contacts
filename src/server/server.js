import http from 'http'
import express from 'express'

const app = express()

app.use((req, res) => {
  const HTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>React Demo</title>
        </head>
        <body>
          <div id="root">Hello world</div>
        </body>
      </html>
     `

  res.end(HTML)
})

const server = http.createServer(app)

export default server
