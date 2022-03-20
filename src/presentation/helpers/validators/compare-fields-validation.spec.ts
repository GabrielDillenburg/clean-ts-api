import { InvalidParamError } from '../../errors'
import { CompareFieldValidation } from './compare-fields-validation'

const makeSut = (): CompareFieldValidation => {
  return new CompareFieldValidation('field', 'fieldToCompare')
}

describe('CompareFieldValidation', () => {
  test('should return a InvalidParamError if a validation fails', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value', fieldToCompare: 'other_value' })
    expect(error).toEqual(new InvalidParamError('fieldToCompare'))
  })

  test('should not return if validation succeds', () => {
    const sut = makeSut()
    const error = sut.validate({ field: 'any_value', fieldToCompare: 'any_value' })
    expect(error).toBeFalsy()
  })
})
