/**
 * @class trata os erros de crendecial inválida Invalid credentials error
 */
class InvalidCredentialsError extends Error {
    constructor(){
        super("Credenciais inválidas");
        this.name = 'InvalidCrendentialsError'; 
    }
}

export {InvalidCredentialsError}