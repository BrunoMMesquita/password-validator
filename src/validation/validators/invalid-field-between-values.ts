import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldBetweenValuesError } from '@/validation/errors'

export class InvalidFieldBetweenValuesValidation implements FieldValidation {
  constructor(readonly field: string, private readonly valueStart: number, private readonly valueEnd: number) { }

  validate(input: object): Error {
    return input[this.field] >= this.valueStart && input[this.field] <= this.valueEnd ?
      null : new InvalidFieldBetweenValuesError(this.valueStart, this.valueEnd)
  }
}
