import { MissingParamError } from '../../errors'
import { RequiredFieldValidation } from './required-field-validation'

const makeSut = (): RequiredFieldValidation => {
  return new RequiredFieldValidation('field')
}

describe('Required field validation', () => {
  test('should return a MissingParamError if a validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ name: 'another field name' })
    expect(error).toEqual(new MissingParamError('field'))
  })

  test('should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: { name: 'another field name' } })
    expect(error).toBeFalsy()
  })
})
