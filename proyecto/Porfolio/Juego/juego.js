let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const reiniciarBtn = document.getElementById("reiniciarBtn");
  intentos++;

  if (isNaN(guess) || guess < 1 || guess > 10) {
    message.textContent = "❗ Ingresa un número válido entre 1 y 10.";
    return;
  }

  if (guess === numeroSecreto) {
    message.textContent = `🎉 ¡Correcto! Adivinaste el número en ${intentos} intentos.`;
    reiniciarBtn.style.display = "inline-block";
  } else if (guess < numeroSecreto) {
    message.textContent = " El número secreto es más alto.";
  } else {
    message.textContent = " El número secreto es más bajo.";
  }
}

function reiniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("reiniciarBtn").style.display = "none";
}
