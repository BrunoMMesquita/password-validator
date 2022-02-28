import { FieldValidation } from '@/validation/protocols'

export class ValidationComposite {
  private constructor (private readonly validators: FieldValidation[]) {}

  static build (validators: FieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (fieldName: string, input: object): string[] {
    let errors: string[] = []
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) {
        errors.push(error.message)
      }
    }

    return errors
  }
}
