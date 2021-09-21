import { HttpResponse, HttpRequest } from '../protocols/http'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statuscode: 400,
        body: new Error('missing  param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statuscode: 400,
        body: new Error('missing  param: email')
      }
    }
  }
}
