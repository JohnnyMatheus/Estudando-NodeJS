//nome
//  node .\index.js nome=Johnny

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)
console.log('###################################################')

const nome = args[0].split('=')[1]

console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)



console.log(`O Nome dele é ${nome} e a idade é ${idade} anos`)