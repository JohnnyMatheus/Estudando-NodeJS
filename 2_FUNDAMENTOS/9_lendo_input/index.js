const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual seu Nome? ',(nome) =>{
    console.log(`O nome é: ${nome}`)
    readline.close();
})

