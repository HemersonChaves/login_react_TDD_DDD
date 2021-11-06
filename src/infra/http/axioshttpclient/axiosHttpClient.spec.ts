import { AxiosHttpClient } from "./AxiosHttpClient";
import faker from 'faker';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient();
}

describe("AxiosHttpCleint", () => {
    test("Should cal axios with correct URL", async () => {
        const url = faker.internet.url();
        const sut = makeSut();
        await sut.post({ url });
        expect(mockedAxios).toHaveBeenCalledWith(url);
    })
})