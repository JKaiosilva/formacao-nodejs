function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        var deuErro = false
        if(deuErro){
            callback('o envio deu erro')
        }else{
            callback()
        }
        
    
        callback('ok', 5, '8s')
    }, 8000)
}

console.log('inicio de envio de email')

enviarEmail('oi, seja bem vindo ao guia', 'victor@mail.com', (erro) => {
    if(erro == undefined) {
        console.log('tudo ok')
    }else{
        console.log('ocorreu um erro' + erro)
    }
})

