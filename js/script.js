// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack LeVasseur
// Created on: 2024
// This file contains the JS functions for index.html

"use strict"

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a draw!";
  }
  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  }
  return 'You lose!';
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const resultText = determineWinner(userChoice, computerChoice);

  document.getElementById('answer').innerHTML = `
    You chose: ${userChoice}<br>
    Computer chose: ${computerChoice}<br>
    ${resultText}
  `;
}