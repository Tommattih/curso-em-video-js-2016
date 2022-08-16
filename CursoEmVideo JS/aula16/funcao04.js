let f = function (n) { // <-----
    let fat = 1
    for (let contador = n; contador > 1; contador--) {
        fat *= contador
    }
    return fat
}

console.log(f(5))
// 5! = 5 x 4 x 3 x 2 x 1