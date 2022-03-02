import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldCheckEqualError } from '@/validation/errors'

export class InvalidFieldCheckEqualValidation implements FieldValidation {
  constructor(readonly field: string) { }

  validate(input: object): Error {
    const numbers = input[this.field].toString().split('')
    let isValid = false
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numbers[i-1]){
        isValid = true
        break
      }
    }
    return isValid ? null : new InvalidFieldCheckEqualError()
  }
}
