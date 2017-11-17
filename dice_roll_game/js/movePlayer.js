function movePlayer(player, position) {
  if (position > 10) {
    // Game Over
    gameOver(player)
    return false
  }

  let tilePosition = tiles[position - 1].getBoundingClientRect()
  // console.log(player.style.top);
  // console.log(player.style.left);
  console.log(tilePosition);
  player.style.top = tilePosition.top + "px"
  player.style.left = tilePosition.left + "px"
}
