class InvalidCredentialsError extends Error {
    constructor(){
        super("Credenciais inválidas");
        this.name = 'InvalidCrendentialsError'; 
    }
}

export {InvalidCredentialsError}