import { FieldValidation } from '@/validation/protocols'
import {
  RequiredFieldValidation, EmailValidation, InvalidFieldCheckEqualValidation,
  MinAndMaxLengthValidation, InvalidFieldBetweenValuesValidation, InvalidFieldSequenceValidation
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) { }

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required(exhibitionName?: string): ValidationBuilder {
    this.validations.push(new RequiredFieldValidation(this.fieldName, exhibitionName))
    return this
  }

  email(): ValidationBuilder {
    this.validations.push(new EmailValidation(this.fieldName))
    return this
  }

  length(length: number): ValidationBuilder {
    this.validations.push(new MinAndMaxLengthValidation(this.fieldName, length))
    return this
  }

  between(value: number, valueEnd: number): ValidationBuilder {
    this.validations.push(new InvalidFieldBetweenValuesValidation(this.fieldName, value, valueEnd))
    return this
  }

  sequence(): ValidationBuilder {
    this.validations.push(new InvalidFieldSequenceValidation(this.fieldName))
    return this
  }

  equal(): ValidationBuilder {
    this.validations.push(new InvalidFieldCheckEqualValidation(this.fieldName))
    return this
  }

  build(): FieldValidation[] {
    return this.validations
  }
}
