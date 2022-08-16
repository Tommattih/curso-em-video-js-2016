let valores = [8, 1, 7, 4, 2, 9]
valores.sort() //<------- função que ordena a posição dos objetos no array
// para (cada position dentro de num) {...
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} //<------- metodo eficiente e reduzido

/*
console.log(valores) <------- metodo cru, sem formatação

console.log(valores[0]) <------- metodo bruto, ineficiente
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for (var = valor inicial; condição de interrupção; incremento/decremento) {ação} <- aportuguesando
for (var position = 0; position < valores.length; position++) {
  console.log(`A posição ${position} tem o valor ${valores[position]}`)
} <------- metodo eficiente
*/