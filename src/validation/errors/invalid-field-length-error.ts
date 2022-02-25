export class InvalidFieldLengthError extends Error {
  constructor () {
    super('Senha deve conter 6 dígitos')
    this.name = 'InvalidFieldLengthError'
  }
}
