//Criar uma function no botão Comprar
function comprar() {
    let ingresso = document.getElementById("tipo-ingresso").value
    let quantiade = parseInt(document.getElementById("qtd").value)

    if (ingresso == "pista") {
        comprarPista(quantiade);
    } else if (ingresso == "superior") {
        comprarSuperior (quantiade)
    } else if (ingresso == "inferior") {
        comprarInferior (quantiade)
    }

}

function comprarPista(quantiade){
    let pista = parseInt(document.getElementById("qtd-pista").textContent)
    if (quantiade > pista) {
        alert ("Quantiade indisponível!")
    } else {
        pista = pista - quantiade
        document.getElementById("qtd-pista").textContent = pista
        alert("Compra realizada com sucesso!")
    }
}

function comprarSuperior(quantiade){
    let superior = parseInt(document.getElementById("qtd-superior").textContent)
    if (quantiade > superior) {
        alert("Quantidade indisponível!")
    } else {
        superior = superior - quantiade
        document.getElementById("qtd-superior").textContent = superior
        alert("Compra realizada com sucesso!")
    }
}

function comprarInferior(quantiade){
    let inferior = parseInt(document.getElementById("qtd-inferior").textContent)
    if (quantiade > inferior) {
        alert ("Quantiade indisponível!")
    } else {
        inferior = inferior - quantiade
        document.getElementById("qtd-inferior").textContent = inferior
        alert("Compra realizada com sucesso!")
    }

}