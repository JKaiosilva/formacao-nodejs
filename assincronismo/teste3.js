function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------
            ${corpo}
            ----------------
            de: Victor Lima
        
        `)
        callback('ok', 5, '8s')
    }, 8000)
}

console.log('inicio de envio de email')

enviarEmail('oi, seja bem vindo ao guia', 'victor@mail.com', (status, amount, time) => {
    console.log(`
    Status: ${status}
    ----------------
    Contatos: ${amount}
    ----------------
    Tempo de envio: ${time}
    `);
    console.log('tudo ok')
})

