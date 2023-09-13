var selecao = 'Uruguai'
console.log(selecao)

if (selecao == 'Brasil') {
    console.log(`${selecao} ja ganhou 5x a copa`)
} else if  (selecao == 'Argentina' || selecao == 'Uruguai') {
    console.log(`${selecao} ja ganhou 2x a copa`)
} else {
    console.log(`${selecao} nunca ganhou uma copa do mundo`)
}