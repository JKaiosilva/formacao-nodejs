var victor = {
    nome: 'victor lima',
    empresa: 'guia do programador'
}

var david = {
    nome: 'david',
    empresa: 'umbler'
}

var erik = {
    nome: 'erik fig',
    empresa: 'udemy'
}

var users = [victor, david, erik]


var usuario = users.find(user => user.nome === 'victor lima')

console.log(usuario)