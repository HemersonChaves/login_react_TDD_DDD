import { HttpResponse } from "."

/**
 * define o tipo de paramentro q será passado para uma requisição http post
 */
type HttpPostParams<T> = {
    url: string;
    body?: T;
}
/**
 * Interface que recebe paramentros para envio de http post para um client (API)
 * @template T tipos de paramentros http 
 * @template R tipos de respostas
 */
interface IHttpPostClient<T, R>{
    post(params: HttpPostParams<T>): Promise<HttpResponse<R>>
}

export { IHttpPostClient, HttpPostParams }