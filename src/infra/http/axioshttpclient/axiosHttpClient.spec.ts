import { AxiosHttpClient } from "./AxiosHttpClient";
import faker from 'faker';
import axios from "axios";
import {  HttpPostParams } from "@/data/protocols/http";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
});
describe("AxiosHttpCleint", () => {
    test("Should cal axios with correct URL and verb", async () => {
        const request = mockPostRequest();
        const sut = makeSut();
        await sut.post(request );
        expect(mockedAxios.post).toHaveBeenCalledWith(request .url);
    });
})
test("Should cal axios with correct body", async () => {
    const request  =mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url);
});
