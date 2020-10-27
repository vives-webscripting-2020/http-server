// const net = require('net');
import net from 'net'
import Request from './Request'

export default class Server {
  server :net.Server

  constructor() {
    this.server = net.createServer( (client) => {
      client.on('data', this.onData)
      console.log('client connected')
      client.write('http/1.1 200 OK\r\n\r\n<h1>Yooo</h1>')
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








