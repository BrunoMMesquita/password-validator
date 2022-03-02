import { ValidatePasswordModel } from '@/domain/models'

import faker from 'faker'

export const mockValidateResponse = (): ValidatePasswordModel => ({
  requestId: faker.datatype.uuid()
})
