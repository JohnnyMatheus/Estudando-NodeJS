// no terminal rode node index.js --nome=Johnny --profissao=Estudante
const minimist = require('minimist')


const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args['profissao']
console.log(nome, profissao)

console.log(`Seu nome é ${nome} e sua profissão é ${profissao}`)