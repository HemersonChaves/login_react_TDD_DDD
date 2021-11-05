 import { AuthenticationParams } from "../../../domain/usecases/Authentication";
import { IHttpPostClient, HttpPostParams } from "../../protocols/http/HttpPostClient";

class RemoteAuthentication{
    constructor (
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient
    ){}
    async auth (params: AuthenticationParams): Promise<void>{
        
        await this.httpPostClient.post(
            {
                url:this.url,
                body: params
            });
    }
      
}

export { RemoteAuthentication }