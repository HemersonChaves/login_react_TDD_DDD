enum HttpStatusCode{
    ok =200,    
    noContent = 204,
    unathorized = 401,
    badRequest = 400,
    notFound = 404,
    serverError = 500
}
type HttpResponse = {
    statusCode:HttpStatusCode
    body?: any
}
export {HttpResponse, HttpStatusCode}