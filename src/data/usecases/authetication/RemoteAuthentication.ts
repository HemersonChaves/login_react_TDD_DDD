import { AuthenticationParams, IAuthentication } from "@/domain/usecases/Authentication";
import { IHttpPostClient, HttpStatusCode } from "@/data/protocols/http";
import { InvalidCredentialsError, UnexpectedError } from "@/domain/erros";
import { AccountModel } from "@/domain/models";

/**
 * @class responsável por autenticar usuário via http  
 */
class RemoteAuthentication implements IAuthentication {
    /**
    * instancia uma url string e um httpPostClient ds tipos AuthenticationParams, AccountModel
    * @constructor
    */
    constructor(
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient<AuthenticationParams, AccountModel>
    ) { }
    /**
     * auth representa um request via post
     * @param params: AuthenticationParams
     * @returns Promise<AccountModel>
     */
    async auth(params: AuthenticationParams): Promise<AccountModel> {
        /**
         * recebe uma resposta http do tipo HttpPostParams
         */
        const httpResponse = await this.httpPostClient.post(
            {
                url: this.url,
                body: params
            });
            /**
             * trata o tipo de resposta http 
              */
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body;
            case HttpStatusCode.unauthorized: throw new InvalidCredentialsError();
            default: throw new UnexpectedError();
        }
    }

}

export { RemoteAuthentication }