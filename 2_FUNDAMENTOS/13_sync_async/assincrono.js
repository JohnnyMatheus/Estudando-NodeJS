const fs = require('fs')


fs.writeFile('arquivo.txt', 'Hello world', function (err) {
    setTimeout(function (){
        console.log('Arquivo criado')
    },1000)

})

console.log('Fim')