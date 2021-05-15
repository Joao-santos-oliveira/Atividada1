let Saldo = prompt('Insira seu saldo inicial');
const ValorProduto = 20

Saldo = parseInt(Saldo)

if (Saldo > 20) {
    alert(`A compra foi realizada com sucesso! Seu saldo atual é de ${Saldo - ValorProduto}`)
}
else if (Saldo < 20) {
    alert('Saldo insuficiente')
}
else {
    alert('A compra foi relizada com sucesso!')
}