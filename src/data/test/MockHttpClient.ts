import { IHttpPostClient, HttpPostParams } from "@/data/protocols/http/HttpPostClient";
import { HttpResponse } from "@/data/protocols/http/HttpResponse";
import { HttpStatusCode } from "../protocols/http/HttpResponse";

class HttpPostClientSpy<T, R> implements IHttpPostClient<T, R>{
    url?:string;
    body?:T;
    response: HttpResponse<R> = { 
        statusCode: HttpStatusCode.ok
    }
    async post (params: HttpPostParams<T> ): Promise<HttpResponse<R>>{
        this.url =params.url;
        this.body = params.body;

        return Promise.resolve(this.response);
    }
}

export {HttpPostClientSpy}