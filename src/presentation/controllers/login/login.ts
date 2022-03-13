import { MissingParamError } from '../../errors'
import { badRequest } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse } from '../../protocols'

export class LoginController implements Controller {
  async handle (HttpRequest: HttpRequest): Promise<HttpResponse> {
    return badRequest(new MissingParamError('email'))
  }
}
