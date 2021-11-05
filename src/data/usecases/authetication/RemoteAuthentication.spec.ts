import {HttpPostClientSpy} from "@/data/test/MockHttpClient";
import { RemoteAuthentication } from "./RemoteAuthentication";
import { mockAuthentication } from "@/domain/test/mockAuthentications";
import { InvalidCredentialsError } from "@/domain/erros/InvalidCredentialsError";
import faker from "faker";
import { HttpStatusCode } from "@/data/protocols/http/HttpResponse";
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
})
