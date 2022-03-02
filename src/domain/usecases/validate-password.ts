
import { ValidatePasswordModel, Authentication } from '@/domain/models'

export interface ValidatePassword {
  validate: (params: ValidatePassword.Params) => Promise<ValidatePassword.Model>
}

export namespace ValidatePassword {
  export type Params = Authentication

  export type Model = ValidatePasswordModel
}
