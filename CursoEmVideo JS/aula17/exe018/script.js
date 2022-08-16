/* pedras
1. limpar o campo do input
2. testar se o valor a inserido ja existe na lista
3. savar em maior e menor seus respectivos números qndo o resultado for recalculado
4. limpar a resposta qdo adc outro numero sem zerar a contagem
*/
//========================== M E =========================================
let ent = document.getElementById('entrada')
let add = []

let select = document.getElementById('adicionado')
let resp = document.getElementById('resp')

let menor= 100
let maior = 0
let soma = 0
let media = 0
let total = 0

function adicionar () {
  if (ent.length == 0 || ent.value == 0 || ent.value > 100 || add.indexOf(+ent.value) != -1) {
    alert('Entrada inválida ou valor já inserido. Por favor adicione um número entre 1 e 100')
  } else {
    add.push(Number(ent.value))
    
    let opt = document.createElement('option')
    opt.style.padding = '.2rem'
    opt.text = `Você adicionou: ${ent.value}`
    select.appendChild(opt)
    
    soma = soma + Number(ent.value)

    if (maior < +(ent.value)) {
      maior = ent.value
    }
    if (menor > +(ent.value) ) {
      menor = ent.value //ñ estava salvando numeros de 2 casas, ai forcei o valor com Number() e foi 
    }
  }

  // se a div de resposta tiver algum conteudo, limpar
  if (resp.value != -1) {
    resp.innerHTML = ''
  }
  ent.value = ''
  ent.focus()
}

function finalizar() {
  if (add.length < 1) {
    alert('Campo em branco, favor adicione um número')
  } else {
    total = add.length
    resp.innerHTML = `<p>Você inseriu ${total} números.</p>
    <p>O menor número inserido foi <strong>${menor}</strong></p>
    <p>O maior número inserido foi <strong>${maior}</strong></p>
    <p>A soma de todos os números adicionados é <strong>${soma}</strong></p>
    <p>A média dos números adicionados é <strong>${soma/total}</strong></p>`
  } 
}