document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

document.querySelector("#qtde").addEventListener("change", atualizarPreco)
document.querySelector("#colorido").addEventListener("change", atualizarPreco)
document.querySelector("#refNao").addEventListener("change", atualizarPreco)
document.querySelector("#refSim").addEventListener("change", atualizarPreco)
document.querySelector("#prazo").addEventListener("change", function () {
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} dia(s)`
    atualizarPreco()
})

function atualizarPreco(){
const qtde = document.querySelector("#qtde").value
const temCor = document.querySelector("#colorido").checked
const incluiRef = document.querySelector("#refNao").checked
const prazo = document.querySelector("#prazo").value

let preco = qtde *10;
if (temCor) preco *= 1.1
if (incluiRef) preco += 5
let taxaUrgencia = 1 - prazo*0.143;
    preco *= 1 + taxaUrgencia


document.querySelector("#preco").innerHTML = `${preco.toFixed(2)} €`
}