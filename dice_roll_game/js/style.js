const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const dieContainer = document.querySelector(".die-container")
const dieImage = document.querySelector(".die")
const roll = document.querySelector(".roll")
const boardContainer = document.querySelector(".board-container")
const tiles = document.querySelectorAll(".tile")
const tileWinner = document.querySelector(".winner")

// game state
let player1Position = 0
let player2Position = 0
let turn = player1
