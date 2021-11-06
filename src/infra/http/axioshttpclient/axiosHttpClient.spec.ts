import { AxiosHttpClient } from "./AxiosHttpClient";
import faker from 'faker';
import axios from "axios";
import { HttpPostParams } from "@/data/protocols/http";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mocekdAxiosResult = {
    data: faker.random.objectElement(),
    status: faker.datatype.number()
}
mockedAxios.post.mockResolvedValue(mocekdAxiosResult);

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: faker.internet.url(),
    body: faker.random.objectElement()
});
describe("AxiosHttpCleint", () => {
    test("Should call axios with correct values", async () => {
        const request = mockPostRequest();
        const sut = makeSut();
        await sut.post(request);
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
    });
    test("Should return the correct statusCode and body", async () => {

        const sut = makeSut();
        const httpResponse = await sut.post(mockPostRequest());
        expect(httpResponse).toEqual(
            {
                statusCode: mocekdAxiosResult.status,
                body: mocekdAxiosResult.data
            });
    });
})

