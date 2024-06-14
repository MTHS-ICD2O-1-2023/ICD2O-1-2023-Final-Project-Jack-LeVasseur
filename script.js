// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack
// Created on: 
// This file contains the JS functions for index.html

"use strict"

function generateComputerChoice() {}
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  const computerChoiceDisplay = document.getElementById("computer-choice")
  const possibleChoices = document.querySelectorAll("button")

  let computerChoice

  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "scissors"
  }
  if (randomNumber == 3) {
    computerChoice = "paper"
  }
  computerChoiceDisplay.innerHTML = computerChoice
{}

function getUserChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  const userChoiceDisplay = document.getElementById("user-choice")
  const possibleChoices = document.querySelectorAll("button")

  let userChoice

if (computerChoice === userChoice) {
  result = "drawl!!"
}
if (computerChoice === "rock" && userChoice ==="paper") {
  result = "you win!!"
}
if (computerChoice === "rock" && userChoice ==="scissors") {
  result = "you lose!!"
}
if (computerChoice === "paper" && userChoice ==="scissors") {
  result = "you win!!"
}
if (computerChoice === "paper" && userChoice ==="rock") {
  result = "you lose!!"
}
if (computerChoice === "scissors" && userChoice ==="rock") {
  result = "you win!!"
}
if (computerChoice === "scissors" && userChoice ==="paper") {
  result = "you lose!!"
}
document.getElementById('result') }