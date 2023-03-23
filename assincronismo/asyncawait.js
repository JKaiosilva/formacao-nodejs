function pegarId(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1500)
    })
}

function buscarEmailNoDb(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve('kaio silva')
        }, 2000)
    })
}


function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            var deuErro = false
            if(!deuErro){
                resolve({time: 6, to: 'kaio silva'})
            }else{
                reject('Fila cheia')
            }

        }, 4000)
    })
}


function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {name: 'victor', lang: 'js'},
                {name: 'lima', lang: 'c#'},
                {name: 'daniel', lang: 'java'}
            ])
        }, 3000)
    })
}

async function principal(){
    var usuarios = await pegarUsuarios()
    console.log(usuarios)
}

principal()


/* pegarId().then((id) => {
    buscarEmailNoDb(id).then((email) => {
        enviarEmail('olá, como vai', email).then(() => {
            console.log('email enviado')
        }).catch(err => {
            console.log(err)
        })
    })
}) */