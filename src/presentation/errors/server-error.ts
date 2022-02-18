export class ServerError extends Error {
  constructor (stack?: string) {
    super('internal server error')
    this.name = 'Server Error'
    this.stack = stack
  }
}
