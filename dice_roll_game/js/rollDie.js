function rollDie() {
  die.setAttribute("src", "./img/Dodecahedron3.gif")

  roll.textContent = "?"

  setTimeout(function(){
    const num = Math.floor(Math.random() * 10 + 1)
    roll.textContent = num

    if(turn === player1){
      player1Position += num
      movePlayer(player1, player1Position)
      turn = player2
    } else {
      player2Position += num
      movePlayer(player2, player2Position)
      turn = player1
    }
  }, 2000)
}

die.addEventListener("click", rollDie)
roll.addEventListener('click', rollDie);
