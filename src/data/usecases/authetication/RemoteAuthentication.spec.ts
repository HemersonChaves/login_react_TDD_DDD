import {HttpPostClientSpy} from "@/data/test/MockHttpClient";
import { RemoteAuthentication } from "./RemoteAuthentication";
import { mockAuthentication } from "@/domain/test/mockAuthentications";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import { HttpStatusCode } from "@/data/protocols/http/HttpResponse";
import { UnexpectedError } from "@/domain/erros/UnexpectedError";
import faker from "faker";
type SutTypes ={
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy

}

const makeSut = (url: string = faker.internet.url() ): SutTypes =>{

    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);

    return {
        sut,
        httpPostClientSpy
    }
}


describe("RemoteAuthentication", ()=>{
    test('should call HttpPostClient with correct URL ', async () => {
        const url = faker.internet.url();
        const {sut, httpPostClientSpy} = makeSut(url);
        
        await sut.auth(mockAuthentication());
        expect(httpPostClientSpy.url).toBe(url);
    });
    test('should call HttpPostClient with correct body', async () => {
       
        const {sut, httpPostClientSpy} = makeSut();
       const autenticationsParams =  mockAuthentication();
        await sut.auth(autenticationsParams);
        expect(httpPostClientSpy.body).toEqual(autenticationsParams);
    });

    test('should call InvalidCrendentialsError if  HttpPostClient returns 401', async () => {       
        const {sut, httpPostClientSpy} = makeSut();        
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.unathorized
        }
        const promise =  sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new InvalidCredentialsError());
    });
    test('should call UnexpectedError if  HttpPostClient returns 401', async () => {       
        const {sut, httpPostClientSpy} = makeSut();        
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.badRequest
        }
        const promise =  sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new UnexpectedError());
    });
    test('should call UnexpectedError if  HttpPostClient returns 404', async () => {       
        const {sut, httpPostClientSpy} = makeSut();        
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.notFound
        }
        const promise =  sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new UnexpectedError());
    });
    test('should call UnexpectedError if  HttpPostClient returns 500', async () => {       
        const {sut, httpPostClientSpy} = makeSut();        
        httpPostClientSpy.response = {
            statusCode: HttpStatusCode.serverError
        }
        const promise =  sut.auth(mockAuthentication());
        await expect(promise).rejects.toThrow(new UnexpectedError());
    });
})
