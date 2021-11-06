import { HttpPostParams } from "@/data/protocols/http";
import { AxiosHttpCleint } from "./AxiosHttpClient";
import faker from 'faker';
import axios from "axios";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("AxiosHttpCleint", () => {
    test("Should cal axios with correct URL", async () => {
        const url = faker.internet.url();
        const sut = new AxiosHttpCleint();
        await sut.post({ url });
        expect(mockedAxios).toHaveBeenCalledWith(url);
    })
})