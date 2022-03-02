export class InvalidFieldEmailError extends Error {
  constructor () {
    super('E-mail Inválido')
    this.name = 'InvalidFieldEmailError'
  }
}
