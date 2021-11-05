 import { AuthenticationParams } from "@/domain/usecases/Authentication";
import { IHttpPostClient, HttpPostParams } from "@/data/protocols/http/HttpPostClient";
import { HttpStatusCode } from "@/data/protocols/http/HttpResponse";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import { UnexpectedError } from "@/domain/erros/UnexpectedError";

class RemoteAuthentication{
    constructor (
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient
    ){}
    async auth (params: AuthenticationParams): Promise<void>{
       
        const httpResponse = await this.httpPostClient.post(
            {
                url:this.url,
                body: params
            });
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: break;
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError();
            case HttpStatusCode.badRequest: throw new UnexpectedError();
            case HttpStatusCode.serverError: throw new UnexpectedError();
            case HttpStatusCode.notFound: throw new UnexpectedError();
            default: return Promise.resolve();
        }
    }
      
}

export { RemoteAuthentication }