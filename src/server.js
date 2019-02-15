const app = require('./app')
const http = require('http')

const server = http.createServer(app)
const port = 3000

server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`)
})
