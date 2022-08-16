let euObjeto = {nome:'Tom',
genero:'M',
peso:54.2,
engordar(p=0){
  console.log('Ganhou peso')
  this.peso += p
}}

euObjeto.engordar(2)
console.log(`${euObjeto.nome} pesa ${euObjeto.peso}Kg`)
let num = 8
num **= 2
console.log(num)