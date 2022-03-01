import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldSequenceError } from '@/validation/errors'

export class InvalidFieldSequenceValidation implements FieldValidation {
  constructor(readonly field: string) { }

  validate(input: object): Error {
    const numbers = input[this.field].toString().split('')
    const isValid = numbers.every((num: number, i: number) => i === numbers.length - 1 || num <= numbers[i + 1])
    return isValid ? null : new InvalidFieldSequenceError()
  }
}
