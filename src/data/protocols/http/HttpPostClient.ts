type HttpPostParams ={
    url:string
}
interface IHttpPostClient{
    post (params: HttpPostParams ): Promise<void>
}

export{IHttpPostClient, HttpPostParams}