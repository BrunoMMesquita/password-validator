import { ValidationComposite } from '@/main/composites'
import { ValidationBuilder as Builder } from '@/main/builders'

export const makePasswordValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('email').required().email().build(),
  ...Builder.field('password').required().required().build(),
  ...Builder.field('password').required().length(6).build()
])
