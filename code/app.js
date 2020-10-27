const http = require('http')
const os = require('os')

console.log('Globomantics server starting...')

var handler = function (request, response) {
  if (request.url != '/favicon.ico') {
    console.log(
      `url:${request.url} Recieved a request from ${request.connection.remoteAddress}`
    )
    response.writeHead(200)
    response.write(
      `Welcome to Globomantics.\n Server time = ${Date().toLocaleString()}\n`
    )
    response.end(`You have hit ${os.hostname()}\n`)
  }
}

var www = http.createServer(handler)
www.listen(8080)
