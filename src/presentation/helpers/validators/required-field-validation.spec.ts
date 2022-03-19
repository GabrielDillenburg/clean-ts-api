import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

describe('Required field validation', () => {
  test('should return a MissingParamError if a validation fails', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ name: 'another field name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return if validation succeds', () => {
    const sut = new RequiredFieldValidation('field')
    const error = sut.validate({ field: { name: 'another field name' } })
    expect(error).toBeFalsy()
  })
})
