import { IHttpPostClient, HttpPostParams } from "@/data/protocols/http/HttpPostClient";
import { HttpResponse } from "@/data/protocols/http/HttpResponse";
import { HttpStatusCode } from "../protocols/http/HttpResponse";

class HttpPostClientSpy implements IHttpPostClient{
    url?:string;
    body?:object;
    response: HttpResponse = { 
        statusCode: HttpStatusCode.noContent
    }
    async post (params: HttpPostParams ): Promise<HttpResponse>{
        this.url =params.url;
        this.body = params.body;

        return Promise.resolve(this.response);
    }
}

export {HttpPostClientSpy}