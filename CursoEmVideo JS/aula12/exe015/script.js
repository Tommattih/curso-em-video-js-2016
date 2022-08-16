function check() {
  var data = new Date()
  var ano = data.getFullYear()
  var txtano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (txtano.value.length == 0 || Number(txtano.value) > ano) {
    alert('[ERRO!] Entrada inválida!')
  } else {
    var resgender = document.getElementsByName('radgen')
    var idade = ano - Number(txtano.value)
    var img = document.createElement('img') //pay attention1
    img.setAttribute('id', 'avatar') //pay attention2
    var gender = ''

    if (resgender[0].checked) {
      gender = 'um homem'
      document.body.style.background = 'rgb(0 103 169)'
      if (idade > 0 && idade < 5 ) {
        img.setAttribute('src', 'm5.png')
        //baby
      } else if (idade < 10 ) {
        img.setAttribute('src', 'm10.png')
        //child
      } else if (idade < 15 ) {
        img.setAttribute('src', 'm15.png')
        //ten
      } else if (idade < 20 ) {
        img.setAttribute('src', 'm20.png')
        //adu1
      } else if (idade < 30 ) {
        img.setAttribute('src', 'm30.png')
        //adu2
      } else if (idade < 45 ) {
        img.setAttribute('src', 'm45.png')
        //mature
      } else {
        img.setAttribute('src', 'm60.png')
        //old
      }
    } else if  (resgender[1].checked) {
      gender = 'uma mulher'
      document.body.style.background = 'rgb(178 14 85)'
      if (idade > 0 && idade < 5 ) {
        img.setAttribute('src', 'f5.png')
        //baby
      } else if (idade < 10 ) {
        img.setAttribute('src', 'f10.png')
        //child
      } else if (idade < 15 ) {
        img.setAttribute('src', 'f15.png')
        //ten
      } else if (idade < 20 ) {
        img.setAttribute('src', 'f20.png')
        //adu1
      } else if (idade < 30 ) {
        img.setAttribute('src', 'f30.png')
        //adu2
      } else if (idade < 45 ) {
        img.setAttribute('src', 'f45.png')
        //mature
      } else {
        img.setAttribute('src', 'f60.png')
        //old
      }
    } else {
      gender = 'não binário'
      img.setAttribute('src', '00.png') //pay attention4
      document.body.style.background = 'rgb(118 73 164)'

    }
    
    res.innerHTML = `Você é ${gender} e tem <strong>${idade}</strong> anos <br>`
    res.style.textAlign = 'center'
    res.appendChild(img) //pay attention3

  }
}

//rgb(178 14 85)
//rgb(0 103 169)
//rgb(243 170 125)
