/**
 * @class trata outros tipos de erros das requisições http Unexpected error
 */
class UnexpectedError extends Error {
    constructor(){
        super("Algo de errado aconteceu. tente novamente em breve");
        this.name = 'UnexpectedError'; 
    }
}

export {UnexpectedError}