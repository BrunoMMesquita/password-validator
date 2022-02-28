import { RequiredFieldValidation, EmailValidation, MinAndMaxLengthValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from '@/main/builders'

import faker from 'faker'

describe('ValidationBuilder', () => {
  test('should return RequiredFieldValidation', () => {
    const field = faker.database.column()

    const validations = sut.field(field).required().build()

    expect(validations).toEqual([new RequiredFieldValidation(field)])
  })

  test('should return EmailValidation', () => {
    const field = faker.database.column()

    const validations = sut.field(field).email().build()

    expect(validations).toEqual([new EmailValidation(field)])
  })

  test('Should return MinLengthValidation', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()

    const validations = sut.field(field).length(length).build()

    expect(validations).toEqual([new MinAndMaxLengthValidation(field, length)])
  })

  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const length = faker.datatype.number()

    const validations = sut.field(field).required().email().length(length).build()

    expect(validations).toEqual([
      new RequiredFieldValidation(field),
      new EmailValidation(field),
      new MinAndMaxLengthValidation(field, length)
    ])
  })

})
