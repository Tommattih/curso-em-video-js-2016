//========================== GUANABARA ===================================
let ent = document.getElementById('entrada') //fnum //num
let select = document.getElementById('adicionado') //flista //lista
let resp = document.getElementById('resp') //res
let add = [] //valores

function ehnumero (n) {
  //se o numero for menor q 1 e menor q 100 retorna verdadeiro
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function nalista(n, l) {
  //se na lista houver uma posição pro valor inserido, retorna falso
  if (l.indexOf(Number(n)) != -1) { //add.indexOf(converteEmNumero(ent.value)) nãoForIgual a -1QueÉoRetornoPraValorNãoEncontradoNaLista)
    return true
  } else {
    return false
  }
}

function adicionar () {
  if (ehnumero(ent.value) && !nalista(ent.value, add)) {
    add.push(Number(ent.value))
    
    let opt = document.createElement('option')
    opt.text = `Você adicionou: ${ent.value}`
    opt.style.padding = '.2rem'
    select.appendChild(opt)
    resp.innerHTML = '' //toda vez que for adicionar um valor na lista limpa a resposta
  } else {
    alert('Entrada inválida ou já inserido, por favor adicione um número entre 1 e 100')
  }
  ent.value = ''
  ent.focus()
}

function finalizar() {
  if (add.length == 0) {
    alert('Campo em branco, favor adicione um número')
  } else {
    let total = add.length
    let menor= add[0]
    let maior = add[0]
    let soma = 0
    let media = 0
    for (let pos in add) {
      soma += add[pos]
      if (add[pos] > maior)
        maior = add[pos]
      if (add[pos] < menor)
      menor = add[pos]
    }
    media = soma / total
    resp.innerHTML = ''
    resp.innerHTML += `<p>Você inseriu ${total} números.</p>`
    resp.innerHTML += `<p>O maior número inserido foi <strong>${maior}</strong></p>`
    resp.innerHTML += `<p>O menor número inserido foi <strong>${menor}</strong></p>`
    resp.innerHTML += `<p>A soma de todos os números adicionados é <strong>${soma}</strong></p>`
    resp.innerHTML += `<p>A média dos números adicionados é <strong>${media}</strong></p>`
  }  
}