const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display")
}
const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display")
}
const select = document.querySelector("#options")
let gameActive = true
const reset = document.querySelector('#reset')
for (let i = 1; i <= 100; i++) {
  const newValue = document.createElement("option")
  newValue.setAttribute("value", i)
  newValue.innerText = `${i}`
  select.appendChild(newValue)
}
let winningScore = parseInt(select.value)
function updateScores(player, opponent) {
  if (gameActive) {
    player.score++
    player.display.innerText = player.score
    if (player.score === winningScore) {
      gameActive = false
      player.display.classList.add("has-text-success")
      opponent.display.classList.add("has-text-danger")
      player.button.disabled = true
      opponent.button.disabled = true
    }
  }
}

p1.button.addEventListener("click", function () {
  updateScores(p1, p2)
})
p2.button.addEventListener("click", function () {
  updateScores(p2, p1)
})
resetFunction = function () {
  for (p of [p1, p2]) {
    p.score = 0
    p.display.innerText = p.score
    p.display.classList.remove("has-text-success", "has-text-danger")
    p.button.disabled = false
  }
  gameActive = true
}

reset.addEventListener('click', resetFunction)
select.addEventListener("change", function () {
  winningScore = parseInt(select.value)
  resetFunction()
})

