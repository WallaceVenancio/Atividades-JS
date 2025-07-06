function jogador(nome) {
    return (`Olá, ${nome}`)
}

console.log (jogador("Wallace"))

function carteira(idade){
    if (idade >= 18) {
        return "Parabéns! Você é maior de idade e está habilitado para tirar a carteira"
    } else {
        return "Você é menor idade, e não poderá tirar sua habilitação!"
    }
}

console.log (carteira("7"))

function comparacao(a, b, c) {
    if (a > b && a > c) {
        return `O número ${a} definitivamente é maior que ${b} e ${c}`;
    } else if (b > a && b > c) {
        return `O número ${b} definitivamente é maior que ${a} e ${c}`;
    } else if (c > a && c > b) {
        return `O número ${c} definitivamente é maior que ${a} e ${b}`;
    } else {
        return "Os números são iguais ou não há um único maior.";
    }
}

console.log(comparacao(2, 10, 30));  // O número 30 definitivamente é maior que 2 e 10



function cuceta(numUm, numDois, numTres) {
    if (numUm > numDois && numTres)
        return "Seu número é maior"
}

const resultado = cuceta(2, 10, 3)
console.log(resultado)