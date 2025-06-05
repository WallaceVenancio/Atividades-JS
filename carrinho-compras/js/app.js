let somarValor
limpar()

function adicionar() {
    let produto = document.getElementById("produto").value
    let nomeProduto = produto.split ("-") [0]
    let valor = produto.split ("R$") [1]
    let quantiade = document.getElementById("quantidade").value
    let subTotal = (quantiade * valor)

    let produtosDoCarrinho = document.getElementById("lista-produtos")
    produtosDoCarrinho.innerHTML = produtosDoCarrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantiade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span></section>`

    somarValor = somarValor + subTotal;
    let = valorTotal = document.getElementById("valor-total")
    valorTotal.textContent = `R$ ${somarValor}`
    document.getElementById("quantidade").value = "0"

    if (quantiade <= 0 ) {
        alert("A quantandiade PRECISA ser maior que 0")
        document.getElementById("lista-produtos").innerHTML = ""
        document.getElementById("valor-total").innerHTML = "R$ 0"
    }
    
}

function limpar(){
    somarValor = 0
    document.getElementById("lista-produtos").innerHTML = ""
    document.getElementById("valor-total").innerHTML = "R$ 0"

}