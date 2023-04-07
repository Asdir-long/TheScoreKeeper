const p1Btn = document.querySelector("#p1Btn")
const p2Btn = document.querySelector("#p2Btn")
const reset = document.querySelector("#reset")

const p1Display = document.querySelector("#p1Dis")
const p2Display = document.querySelector("#p2Dis")

const selectPannel = document.querySelector("#playTo");

let p1Score = 0, p2Score = 0;
let winnigScore = 1;
let isGameOver = false;

for (let i = 2; i < 10; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    selectPannel.appendChild(option)
}


selectPannel.addEventListener("change", () => {
    winnigScore = selectPannel.value;
})



reset.addEventListener('click',resetGame)

p1Btn.addEventListener("click", () => {
    if (!isGameOver) {
        p1Display.innerText = ++p1Score;
    }
    if (winnigScore == p1Score) {
        isGameOver = true;
        GameOver(p1Display);
    }
})

p2Btn.addEventListener("click", () => {
    if (!isGameOver) {
        p2Display.innerText = ++p2Score;
    }
    if (winnigScore == p2Score) {
        isGameOver = true;
        GameOver(p2Display);
    }

})
const GameOver = function (winner) {
    let loser = winner == p1Display ? p2Display : p1Display;
    winner.classList.add("has-text-success");
    loser.classList.add("has-text-danger");
    p1Btn.disabled = true;
    p2Btn.disabled = true;

}
function resetGame() {
    p1Btn.disabled = false;
    p2Btn.disabled = false;
    isGameOver = false;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Score = 0;
    p2Score = 0;

    p1Display.classList.remove("has-text-success","has-text-danger")
    p2Display.classList.remove("has-text-success","has-text-danger")


}
