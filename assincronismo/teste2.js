function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------
            ${corpo}
            ----------------
            de: Victor Lima
        
        `)
        callback()
    }, 8000)
}

console.log('inicio de envio de email')

enviarEmail('oi, seja bem vindo ao guia', 'victor@mail.com', () => {
    console.log('seu email deve ser enviado em alguns instantes')
    console.log('tudo ok')
})

