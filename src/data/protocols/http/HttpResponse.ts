/**
 * Respostas possíveis Http e seus status code
 */
enum HttpStatusCode{
    ok =200,    
    noContent = 204,
    unauthorized = 401,
    badRequest = 400,
    notFound = 404,
    serverError = 500
}
/**
 * tipo generico de resposta http com bady distintos
 *  
 */
type HttpResponse<T> = {
    statusCode:HttpStatusCode
    body?: T
}
export {HttpResponse, HttpStatusCode}