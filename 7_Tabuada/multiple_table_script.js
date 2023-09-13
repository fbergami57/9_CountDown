function Table(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0  || end.value.length == 0 ) {
        window.alert('[ERRO] Informe os campos!')
    } else {
        var n = Number(num.value)
    var e = Number(end.value)
    var x = 0
    var a = ''
    var ans = window.document.getElementById('answer')
    //a = n*e
    //ans.innerHTML=`The answer is: ${a}`
    ans.innerHTML = `the multiple table of the ${n} is: <br>`

    do {
        a = n * x
        ans.innerHTML += `${x} x ${e} = ${a} <br>`
        x++
    }while (x <= e)
    }
    
}