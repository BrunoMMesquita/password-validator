import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequiredFieldValidation implements FieldValidation {
  constructor (readonly field: string, readonly exhibitionName?: string) {}

  validate (input: object): Error {
    return input[this.field] ? null : new RequiredFieldError(this.exhibitionName)
  }
}
