// const net = require('net');
import net from 'net'
import Request from './Request'

export default class Server {
  server :net.Server

  constructor() {
    this.server = net.createServer( (client) => {
      client.on('data', this.onData)
      console.log('client connected')
      const content = '<h1>This is a proper response</h1>'
      const statusCode = 200
      const headers = {
        ContentType: "text/html"
        ContentLanguage: "en"
      }
      const response = new Response({ statusCode, headers, content })
      client.write(response.toString())
      client.end()
    })
    console.log('*** HTTP Server started ***')
    this.server.listen(80, () => {
      console.log('welcome to port 80')
    })
  }

  onData(data :Buffer) {
    const request = new Request(data.toString())
    console.log(request)
  }
}








