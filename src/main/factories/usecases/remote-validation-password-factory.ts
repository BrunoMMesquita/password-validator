import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteValidation } from '@/data/usecases'
import { ValidatePassword } from '@/domain/usecases'

export const makeRemoteValidation = (): ValidatePassword =>
  new RemoteValidation(makeApiUrl(), makeAxiosHttpClient())
