import { AccountModel } from "@/domain/models/AccountModel"
/**
 * Paramentros para autenticação da API
 */
type AuthenticationParams = {
    email: string,
    password: string
}
/**
 * Iauthentication
 */
interface IAuthentication{
    auth(params: AuthenticationParams): Promise<AccountModel>
}

export { IAuthentication,AuthenticationParams };