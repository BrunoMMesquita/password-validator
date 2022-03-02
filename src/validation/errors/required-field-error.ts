export class RequiredFieldError extends Error {
  constructor (fielName?: string) {
    super(`${fielName ? fielName : ''} é um campo obrigatório`)
    this.name = 'RequiredFieldError'
  }
}
