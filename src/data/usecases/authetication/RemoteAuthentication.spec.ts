import {HttpPostClientSpy} from "../../test/MockHttpClient";
import { RemoteAuthentication } from "./RemoteAuthentication";
import faker from "faker";
import { mockAuthentication } from "../../../domain/test/mockAuthentications";

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
})
