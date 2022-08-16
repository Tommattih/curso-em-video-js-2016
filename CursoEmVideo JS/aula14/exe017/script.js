function calc() {
  var num = document.getElementById('number')
  var seltab = document.getElementById('seltab')
  
  if (num.value.lenght == 0) {
    alert('Por favor, digite um número')
  } else {
    var numb = Number(num.value)
    var cal = 1
    seltab.innerHTML= ''
    while (cal <= 10) {
      let item = document.createElement('option')
      item.style.padding = '.25rem' //extra
      item.text = `${numb} x ${cal} = ${numb*cal}`
      item.value = `seltab${cal}`      
      seltab.appendChild(item) //extra
      cal++
    }
  }

}