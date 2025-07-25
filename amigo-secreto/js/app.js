let amigos = []
function adicionar() {
    let nome = document.getElementById("nome-amigo")
    if (nome.value == ""){
        alert("É preciso digitar um nome")
        return
    }

    if (amigos.includes(nome.value)) {
        alert("Nome já inserido!")
        return
    }

    let adicionarAmigo = document.getElementById("lista-amigos")
    amigos.push(nome.value)
    
    if (adicionarAmigo.textContent == "") {
       adicionarAmigo.textContent = nome.value
    } else {
       adicionarAmigo.textContent = adicionarAmigo.textContent + ", " + nome.value
    }
    nome.value = "";
}


function sortear() {
    let sorteio = document.getElementById("lista-sorteio")

    if (amigos.length <= 4) {
        alert ("O número de participantes precisa ser maior que 4")
        return;
    }

    for (let i = 0; i < amigos.length; i++)

    if ( i == amigos.length - 1 ){
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " -->" + amigos [0] + "<br>"
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " -->" + amigos [i + 1] + "<br>"
    }
    
}

function embaralha(amigos) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = []
    document.getElementById("nome-amigo").innerHTML = ""
    document.getElementById("lista-amigos").innerHTML = ""
    document.getElementById("lista-sorteio").innerHTML = ""
}