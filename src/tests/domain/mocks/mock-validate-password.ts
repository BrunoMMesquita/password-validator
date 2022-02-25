import { ValidatePassword } from '@/domain/usecases'
import { mockValidateResponse } from '@/tests/domain/mocks'

export const mockValidate = (): ValidatePassword.Model => mockValidateResponse()

export class ValidateSpy implements ValidatePassword {
  response = mockValidate()
  params: ValidatePassword.Params

  async validate (params: ValidatePassword.Params): Promise<ValidatePassword.Model> {
    this.params = params
    return this.response
  }
}
