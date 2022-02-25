import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { ValidatePassword } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

export class RemoteAuthentication implements ValidatePassword {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>
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

export namespace RemoteAuthentication {
  export type Model = ValidatePassword.Model
}
