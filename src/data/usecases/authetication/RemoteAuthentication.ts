 import { AuthenticationParams, IAuthentication } from "@/domain/usecases/Authentication";
import { IHttpPostClient} from "@/data/protocols/http/HttpPostClient";
import { HttpStatusCode } from "@/data/protocols/http/HttpResponse";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import { UnexpectedError } from "@/domain/erros/UnexpectedError";
import { AccountModel } from "@/domain/models/AccountModel";

class RemoteAuthentication implements IAuthentication {
    constructor (
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient<AuthenticationParams, AccountModel>
    ){}
    async auth (params: AuthenticationParams): Promise<AccountModel> {
       
        const httpResponse = await this.httpPostClient.post(
            {
                url:this.url,
                body: params
            });
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body;
            case HttpStatusCode.unathorized: throw new InvalidCredentialsError();
            default:  throw new UnexpectedError();
        }
    }
      
}

export { RemoteAuthentication }