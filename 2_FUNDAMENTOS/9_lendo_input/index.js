const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual seu Nome? ',(nome) =>{
    console.log(`A minha linguagem preferida é: ${nome}`)
    readline.close()
})

readline.question()