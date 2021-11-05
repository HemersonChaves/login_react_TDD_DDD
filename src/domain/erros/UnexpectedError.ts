class UnexpectedError extends Error {
    constructor(){
        super("Algo de errado aconteceu. tente novamente em breve");
        this.name = 'UnexpectedError'; 
    }
}

export {UnexpectedError}