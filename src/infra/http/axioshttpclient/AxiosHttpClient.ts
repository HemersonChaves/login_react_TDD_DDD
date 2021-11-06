import { HttpPostParams } from "@/data/protocols/http";
import axios from "axios";

class AxiosHttpCleint {
    async post(params: HttpPostParams<any>): Promise<void> {
        await axios(params.url)
    }
}

export { AxiosHttpCleint }