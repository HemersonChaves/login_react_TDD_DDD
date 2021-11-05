import { AccountModel } from "../models/AccountModel"

type AuthenticationParams = {
    email: string,
    password: string
}
interface IAuthentication{
    auth(params: AuthenticationParams): Promise<AccountModel>
}

export { IAuthentication,AuthenticationParams };