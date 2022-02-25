
import { ValidatePasswordModel } from '@/domain/models'

export interface ValidatePassword {
  validate: (params: ValidatePassword.Params) => Promise<ValidatePassword.Model>
}

export namespace ValidatePassword {
  export type Params = {
    email: string
    name: string
    password: string
  }

  export type Model = ValidatePasswordModel
}
