export class ServerError extends Error {
  constructor () {
    super('internal server error')
    this.name = 'Server Error'
  }
}
