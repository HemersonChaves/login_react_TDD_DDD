import { IHttpPostClient, HttpPostParams } from "domain/data/protocols/http/HttpPostClient";

class RemoteAuthentication{
    constructor (
        private readonly url: string,
        private readonly httpPostClient: IHttpPostClient
    ){}
    async auth (): Promise<void>{
        
        await this.httpPostClient.post(
            {
                url:this.url
            });
    }
      
}

export { RemoteAuthentication }