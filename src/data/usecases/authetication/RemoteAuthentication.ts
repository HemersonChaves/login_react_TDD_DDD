 import { AuthenticationParams } from "@/domain/usecases/Authentication";
import { IHttpPostClient, HttpPostParams } from "@/data/protocols/http/HttpPostClient";
import { HttpStatusCode } from "@/data/protocols/http/HttpResponse";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";

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
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError();
            default: return Promise.resolve();
        }
    }
      
}

export { RemoteAuthentication }