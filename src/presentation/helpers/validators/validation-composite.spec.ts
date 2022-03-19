import { CompareFieldValidation } from './compare-fields-validation'
import { ValidationComposite } from './validation-composite'
import { EmailValidator } from '../../protocols/email-validator'
import { Validation } from './validation'
import { EmailValidation } from './email-validation'
import { MissingParamError } from '../../errors'
 
describe('ValidationComposite', () => {
  test('should return an error if some validation fails', () => {
    class ValidationStub implements Validation {
      validate (input: any): Error {
        return new MissingParamError('field')
      }
    }
    const validationStub = new ValidationStub()
    const sut = new ValidationComposite([validationStub])
    const error = sut.validate({ field: 'any_value' })
    expect(error).toEqual(new MissingParamError('field'))
  })
})
