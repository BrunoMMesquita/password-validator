import { InvalidFieldSequenceValidation } from '@/validation/validators'
import { InvalidFieldSequenceError } from '@/validation/errors'
import faker from 'faker'

const makeSut = (field: string): InvalidFieldSequenceValidation => new InvalidFieldSequenceValidation(field)

describe('InvalidFieldSequenceValidation', () => {
  test('Should return error if field is not in sequence', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 124356 })

    expect(error).toEqual(new InvalidFieldSequenceError())
  })

  test('Should return falsy if value is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: 122456 })

    expect(error).toBeFalsy()
  })
})
