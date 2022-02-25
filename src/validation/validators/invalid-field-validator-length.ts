import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldLengthError } from '@/validation/errors'

export class MinAndMaxLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly length: number) {}

  validate (input: object): Error {
    return input[this.field]?.length === this.length ? null : new InvalidFieldLengthError()
  }
}
