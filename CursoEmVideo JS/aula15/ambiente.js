let num = [5, 1, 9, 3, 7]
num.push(8, 2, 4, 0, 6)
num.sort()
let pos = num.indexOf(18) //<------ QUANDO UM VALOR BUSCADO NAO EXISTE NO ARRAY ELE RETORNA QUE A CHAVE = -1 ...então:
if (pos == -1) {
  console.log(`A posição selecionada não tem um valor atribuido`)
} else {
  console.log(`O valor 8 esta na ${pos}`)
}


/*
for (var c = 0; c < num.length; c++) {
  console.log(num[c])
}
*/
// console.log(num)
// console.log(`Nosso vetor é tem ${num.length} posições`)
// console.log(`o primeiro valor do vetor é ${num[0]}`)
// console.log(num.length)