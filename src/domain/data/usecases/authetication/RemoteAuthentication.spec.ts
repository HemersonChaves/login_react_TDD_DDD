import { IHttpPostClient } from "domain/data/protocols/http/HttpPostClient";
import { RemoteAuthentication } from "./RemoteAuthentication";



describe("RemoteAuthentication", ()=>{
    test('should call HttpPostClient with correct URL ', async () => {
        class HttpPostClientSpy implements IHttpPostClient{
            url?:string;
            async post (url: string ): Promise<void>{
                this.url = url;
                return Promise.resolve();
            }
        }

        const url = "any_url";
        const httpPostClientSpy = new HttpPostClientSpy();
        const sut = new RemoteAuthentication(url, httpPostClientSpy);
        await sut.auth();
        expect(httpPostClientSpy.url).toBe(url);
    });
})
