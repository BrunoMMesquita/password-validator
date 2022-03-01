import { InvalidFieldCheckEqualValidation } from '@/validation/validators'
import { InvalidFieldCheckEqualError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string): InvalidFieldCheckEqualValidation => new InvalidFieldCheckEqualValidation(field)

describe('InvalidFieldCheckEqualValidation', () => {
  test('Should return error if field do not contain equal values', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 124356 })

    expect(error).toEqual(new InvalidFieldCheckEqualError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 122256 })

    expect(error).toBeFalsy()
  })
})
