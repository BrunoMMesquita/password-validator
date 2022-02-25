import { EmailValidation } from '@/validation/validators'
import { InvalidFieldEmailError } from '@/validation/errors'

import faker from 'faker'

const makeSut = (field: string): EmailValidation => new EmailValidation(field)

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: faker.random.word() })

    expect(error).toEqual(new InvalidFieldEmailError())
  })

  test('Should return falsy if email is valid', () => {
    const field = faker.database.column()
    const sut = makeSut(field)

    const error = sut.validate({ [field]: faker.internet.email() })

    expect(error).toBeFalsy()
  })
})
