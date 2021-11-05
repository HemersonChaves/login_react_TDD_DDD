import { AuthenticationParams } from "@/domain/usecases/Authentication";
import { AccountModel } from "../models/AccountModel";
import faker from 'faker'; 

const mockAuthentication = (): AuthenticationParams =>({
    email: faker.internet.email(),
    password: faker.internet.password()
});

const mockAccountModel = (): AccountModel =>({
    accessToken: faker.datatype.uuid()
});

export {mockAuthentication, mockAccountModel}