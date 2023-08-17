let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let secondPlayer

//Contador de jogadas
let player1 = 0
let player2 = 0

//Adicionando os eventos de click nos botões
for (let i = 0; i < boxes.length; i++) {

    //Quando recebe clicks na caixa
    boxes[i].addEventListener("click", function () {

        let el = ckeckEL(player1, player2)

        //Verifica se já tem x ou o
        if (this.childNodes.length == 0) {
            let cloneEL = el.cloneNode(true)

            this.appendChild(cloneEL)

            if (player1 == player2) {
                player1++
            } else {
                player2++
            }
        }
    })
}
function ckeckEL(player1, player2){
    if (player1 == player2) {
        el = x
    } else {
        el = o
    }
    return el
}