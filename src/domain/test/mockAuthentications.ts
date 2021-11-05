import { AuthenticationParams } from "@/domain/usecases/Authentication";
import faker from 'faker'; 

const mockAuthentication = (): AuthenticationParams =>({
    email: faker.internet.email(),
    password: faker.internet.password()
});

export {mockAuthentication}