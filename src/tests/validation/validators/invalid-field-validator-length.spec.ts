import { MinAndMaxLengthValidation } from '@/validation/validators'
import { InvalidFieldLengthError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string): MinAndMaxLengthValidation => new MinAndMaxLengthValidation(field, 6)

describe('RequiredFieldValidation', () => {
  test('Should return error if field is less than or greater than 6', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: faker.random.alphaNumeric(5) })

    expect(error).toEqual(new InvalidFieldLengthError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: faker.random.alphaNumeric(6) })

    expect(error).toBeFalsy()
  })
})
