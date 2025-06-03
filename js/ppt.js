const rockBtn = document.getElementById("piedra")
const paperBtn = document.getElementById("papel")
const scissorsBtn = document.getElementById("tijera")
const userImg = document.getElementById("userImg")
const machineImg = document.getElementById("machineImg")
const textResult = document.getElementById("start-text")

const ROCK = "piedra"
const PAPER = "papel"
const SCISSORS = "tijera"

const EMPATE = 1
const GANAS = 2
const PIERDES = 3

rockBtn.addEventListener("click", () => {
  play(ROCK);

});
paperBtn.addEventListener("click", () => {
  play(PAPER);

});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);

});

function play(respuesta) {
  const opcionRival = machineResultText()
  const result = playResutl(respuesta, opcionRival)

  userImg.src = "../img/" + respuesta + ".png"
  machineImg.src = "../img/" + opcionRival + ".png"

  switch (result) {
    case EMPATE:
      textResult.innerText = "Empate!"
      break;
    case GANAS:
      textResult.innerText = "Ganaste!"
      break;
    case PIERDES:
      textResult.innerText = "Perdiste!"
      break;
    default:
      break;
  }
}

function machineResultText() {
  const number = Math.floor(Math.random() * 3 + 1)
  switch (number) {
    case 1:
      return ROCK
    case 2:
      return PAPER
    case 3:
      return SCISSORS
    default:
      break;
  }
}

function playResutl(respuesta, opcionRival) {
  if (respuesta === opcionRival) {
    return EMPATE
  } else if (respuesta === ROCK) {
    if (opcionRival === PAPER) return PIERDES;
    if (opcionRival === SCISSORS) return GANAS;

  } else if (respuesta === PAPER) {
    if (opcionRival === ROCK) return GANAS;
    if (opcionRival === SCISSORS) return PIERDES;

  } else if (respuesta === SCISSORS) {
    if (opcionRival === PAPER) return GANAS;
    if (opcionRival === ROCK) return PIERDES;
  }
}