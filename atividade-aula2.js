console.log("Opa blz?")

function validarCPF(cpf) {
    var regex = /^(([0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    cpf = "434.206.489-78"

    if (regex.test(cpf)) {
        console.log("CPF válido! Está certo.");
    } else {
        console.log("CPF inválido, está errado...");
    }
}

validarCPF() 

function validarRG(rg){

    rg = "45.331.683-X"

    var regex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}[-][0-9X]$/

    if( regex.test(rg) ){
        console.log("RG váldo! Está certo")
    }else{
        console.log("Inválido, está errado...")
    }
}

validarRG()

function validarTelefone(){

    // pesquisar o uso do .replace
    var telefone = "(17) 9 9173-3578"

    telefone = telefone.replace("(", "") // 10) 9 9173-3578
    telefone = telefone.replace(")", "") // (10 9 9173-3578
    telefone = telefone.replace("-", "") // (10) 9 9173-578
    telefone = telefone.replace(" ", "") // (10)9 9173-3578
    telefone = telefone.replace(" ", "") // (10)99173-3578

    if (telefone.length == 11 ){
        console.log("Telefone válido! Está certo.");
    } else {
        console.log("Telefone inválido, está errado...");
    }
}

validarTelefone()

function validarTelefone(){

    // pesquisar o uso do .replace
    var telefone = "(17) 9 9173-3578"

    telefone = telefone.replace("(", "") // 10) 9 9173-3578
    telefone = telefone.replace(")", "") // (10 9 9173-3578
    telefone = telefone.replace("-", "") // (10) 9 9173-578
    telefone = telefone.replace(" ", "") // (10)9 9173-3578
    telefone = telefone.replace(" ", "") // (10)99173-3578

    if (telefone.length == 11 ){
        console.log("Telefone válido! Está certo.");
    } else {
        console.log("Telefone inválido, está errado...");
    }
}

validarTelefone()