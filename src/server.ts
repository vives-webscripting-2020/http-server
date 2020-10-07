// const net = require('net');
import net from 'net'

const server = net.createServer( (client) => {
    console.log('client connected')
    client.write('http/1.1 200 OK\r\n\r\n<h1>Yooo</h1>')
    client.end()
})

server.listen(80, () => {
    console.log('welcome to port 80')
})

console.log('*** HTTP Server started ***')
