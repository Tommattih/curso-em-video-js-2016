function carregar() {
  var msg = document.getElementById('msg')
  var imagem = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas`
  
  if (hora >= 6 && hora < 12){
    imagem.src = 'pexels-morning.jpg'
    document.body.style.background = 'rgb(174 189 202)'
  } else if (hora >= 12 && hora < 18) {
    imagem.src = 'pexels-afternoon.jpg'
    document.body.style.background = 'rgb(252 141 114)'
  } else {
    imagem.src = 'pexels-night.jpg'
    document.body.style.background = 'rgb(21 38 46)'
  }
}
