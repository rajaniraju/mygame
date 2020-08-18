import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: true,
      gameOver: false,
      currentPlayer: "Player 1",
      currentSymbol: "X",
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }
  onClick = (row, col) => {
    console.log("I have clicked");
    console.log(row, col);

    let currentPlayer = this.state.player1 ? "Player 2" : "Player 1";
    let currentSymbol = this.state.player1 ? "X" : "O";
    //changing state of array without setState.
    let gameState = this.state.gameState;
    gameState[row][col] = currentSymbol;

    this.setState(
      {
        currentPlayer: currentPlayer,
        currentSymbol: currentSymbol,
        player1: !this.state.player1,
        gameState: gameState,
      },
      () => {
        console.log(this.state.gameState);
        setTimeout(() => {
          this.checkGameOver(gameState);
        }, 50);
      }
    );
  };

  checkGameOver(gameState) {
    //horizontal
    this.checkHorizontalRow(gameState, 0);
    this.checkHorizontalRow(gameState, 1);
    this.checkHorizontalRow(gameState, 2);
    this.checkVeticalColumn(gameState, 0);
    this.checkVeticalColumn(gameState, 1);
    this.checkVeticalColumn(gameState, 2);
    this.checkDiagonal(gameState);
  }
  checkDiagonal = (gameState) => {
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[1][1] === gameState[2][2] &&
      gameState[2][2] !== ""
    ) {
      alert("Game over");
    }
    if (
      gameState[2][0] === gameState[1][1] &&
      gameState[1][1] === gameState[0][2] &&
      gameState[0][2] !== ""
    ) {
      alert("Game over");
    }
  };

  checkHorizontalRow = (gameState, row) => {
    if (
      gameState[row][0] === gameState[row][1] &&
      gameState[row][1] === gameState[row][2] &&
      gameState[row][1] !== ""
    ) {
      alert("Game over");
    }
  };
  checkVeticalColumn = (gameState, col) => {
    if (
      gameState[0][col] === gameState[1][col] &&
      gameState[1][col] === gameState[2][col] &&
      gameState[2][col] !== ""
    ) {
      alert("Game over");
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <div>{this.state.currentPlayer} now playing</div>
          <div>
            <Square
              onClick={this.onClick}
              row="0"
              col="0"
              text={this.state.gameState[0][0]}
            />
            <Square
              onClick={this.onClick}
              row="0"
              col="1"
              text={this.state.gameState[0][1]}
            />
            <Square
              onClick={this.onClick}
              row="0"
              col="2"
              text={this.state.gameState[0][2]}
            />
          </div>
          <div>
            <Square
              onClick={this.onClick}
              row="1"
              col="0"
              text={this.state.gameState[1][0]}
            />
            <Square
              onClick={this.onClick}
              row="1"
              col="1"
              text={this.state.gameState[1][1]}
            />
            <Square
              onClick={this.onClick}
              row="1"
              col="2"
              text={this.state.gameState[1][2]}
            />
          </div>
          <div>
            <Square
              onClick={this.onClick}
              row="2"
              col="0"
              text={this.state.gameState[2][0]}
            />
            <Square
              onClick={this.onClick}
              row="2"
              col="1"
              text={this.state.gameState[2][1]}
            />
            <Square
              onClick={this.onClick}
              row="2"
              col="2"
              text={this.state.gameState[2][2]}
            />
          </div>
          <span>{this.whenGameOver}</span>
        </div>
      </div>
    );
  }
}
