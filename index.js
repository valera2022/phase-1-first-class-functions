function receivesAFunction(spy){
spy()
}

function returnsANamedFunction(){ // trigers in response to user
    return receivesAFunction
}

function returnsAnAnonymousFunction (){ return (function (){})
}