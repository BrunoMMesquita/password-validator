import { ValidatePasswordModel } from '@/domain/models'

import faker from 'faker'

export const mockValidateResponse = (): ValidatePasswordModel => ({
  valid: faker.random.boolean()
})
