let fighters = ["🐉", "🐥", "🐊", "💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷", "🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let startButtonEl = document.getElementById("startButton")
let yourButtonEl = document.getElementById("yourButton")
let opponentButtonEl = document.getElementById("opponentButton")

startButtonEl.addEventListener("click", function () {

    let fighter1 = fighters[Math.floor(Math.random() * (fighters.length))]
    let fighter2 = fighters[Math.floor(Math.random() * (fighters.length))]
    stageEl.textContent = fighter1 + " vs " + fighter2
    opponentButtonEl.addEventListener("click", function () {
        fighter2 = fighters[Math.floor(Math.random() * (fighters.length))]
        stageEl.textContent = fighter1 + " vs " + fighter2

    })

    yourButtonEl.addEventListener("click", function () {
        fighter1 = fighters[Math.floor(Math.random() * (fighters.length))]
        stageEl.textContent = fighter1 + " vs " + fighter2

    })

})


