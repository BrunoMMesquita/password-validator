import { ValidationComposite } from '@/main/composites'
import { ValidationBuilder as Builder } from '@/main/builders'

export const makePasswordValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('name').required('Nome').build(),
  ...Builder.field('email').required('E-mail').email().build(),
  ...Builder.field('password').required('Senha').length(6).between(184759, 856920).sequence().build()
])
