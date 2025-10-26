

//Externo
const minimist = require('minimist')


//Interno

const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const a = parseInt(args['a'])
const b = parseInt(args['b'])
//Para execultar use o terminal e passe os argumentos node index.js --a=1 --b=2

soma(a,b)