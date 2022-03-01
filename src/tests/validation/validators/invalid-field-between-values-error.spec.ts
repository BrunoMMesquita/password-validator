import { InvalidFieldBetweenValuesValidation } from '@/validation/validators'
import { InvalidFieldBetweenValuesError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string): InvalidFieldBetweenValuesValidation => new InvalidFieldBetweenValuesValidation(field, 184759, 856920)

describe('RequiredFieldValidation', () => {
  test('Should return error if field is less than or greater than 6', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 856921 })

    expect(error).toEqual(new InvalidFieldBetweenValuesError(184759, 856920))
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 184759 })

    expect(error).toBeFalsy()
  })
})
