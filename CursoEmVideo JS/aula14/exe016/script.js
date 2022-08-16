function contar() {
  var start = document.getElementById('start')
  var finish = document.getElementById('finish')
  var step = document.getElementById('step')
  var res = document.getElementById('res')
  
  if (start.value.length == 0 || step.value.length == 0 || finish.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
    //alert('[ERRO!] Faltam dados!')
  } else {
    res.innerHTML = 'Contando... <br>'
    let stt = Number(start.value)
    let end = Number(finish.value)
    let stp = Number(step.value)
    if (stp <= 0) {
      alert('Passo inválido! Considerando Passo = 1')
      stp = 1
    }
    if (stt < end) {
      //cont cresc.
      for (let cont = stt; cont <= end; cont += stp) {
        res.innerHTML += ` \u{1F449} ${cont} `
      }
    } else {
      //cont regr.
      for (let cont = stt; cont >= end; cont -= stp) {
        res.innerHTML += ` \u{1F449} ${cont} `
      }
    }
    res.innerHTML += `\u{1F3C1}`
}}