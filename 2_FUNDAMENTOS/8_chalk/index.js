import chalk from 'chalk'

const nota = 0

if(nota >=7){
console.log(chalk.green('Parabéns você foi aprovado'))
}else{
   // console.log(chalk.bgRed('Reprovado'))
    console.log(chalk.bgRed.black('Reprovado'))

}