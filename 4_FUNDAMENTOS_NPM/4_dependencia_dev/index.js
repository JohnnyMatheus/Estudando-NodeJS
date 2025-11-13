import _ from 'lodash'
import chalk from 'chalk'

console.clear()
const a = [1,2,3,4,5]
const b = [2,4,5,6,8]

const diff = _.difference(a,b)

console.log(`O que tem em A que não tem em B ${chalk.bgRed.bold(diff)}`)