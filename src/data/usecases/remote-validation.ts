import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { ValidatePassword } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteValidation implements ValidatePassword {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteValidation.Model>
  ) {}

  async validate (params: ValidatePassword.Params): Promise<ValidatePassword.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteValidation {
  export type Model = ValidatePassword.Model
}
