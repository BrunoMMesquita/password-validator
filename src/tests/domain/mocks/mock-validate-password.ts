import { ValidatePassword } from '@/domain/usecases'
import { mockValidateResponse } from '@/tests/domain/mocks'

import faker from 'faker'

export const mockValidationParams = (): ValidatePassword.Params => ({
  email: faker.internet.email(),
  name: faker.internet.userName(),
  password: faker.internet.password()
})

export const mockValidationModel = (): ValidatePassword.Model => mockValidateResponse()

export class ValidateSpy implements ValidatePassword {
  response = mockValidationModel()
  params: ValidatePassword.Params

  async validate (params: ValidatePassword.Params): Promise<ValidatePassword.Model> {
    this.params = params
    return this.response
  }
}
