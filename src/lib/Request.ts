

export default class Request {

  method: string
  uri: string
  version: string
  headers: Array<string>

  constructor(request :string) {
    const { method, uri, version } = this.parseRequsetLine(request)   
    
    this.method = method
    this.uri = uri
    this.version = version
    this.headers = this.parseHeaders(request)
  }

  private parseRequsetLine(request :string) {
    const requestLine = request.split('\r\n')[0]
    const [ method, uri, version ] = requestLine.split(' ')
    return { method, uri, version }
  }

  private parseHeaders(request :string) {
    const headerString = request.split('\r\n').slice(1, -1)
    console.log(headerString)
    return []
  }
}