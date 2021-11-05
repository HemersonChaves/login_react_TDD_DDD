import { HttpResponse } from "."

type HttpPostParams<T> = {
    url: string;
    body?: T;
}
interface IHttpPostClient<T, R>{
    post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}

export { IHttpPostClient, HttpPostParams }