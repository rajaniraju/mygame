import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: true,
      gameOver: false,
      currentPlayer: "Player 1",
      winner: "",
      currentSymbol: "X",
      gameState: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }
  onClick = (row, col) => {
    console.log(row, col);
    let currentPlayer = this.state.player1 ? "Player 2" : "Player 1";
    let currentSymbol = this.state.player1 ? "X" : "O";

    //changing state of array without setState.
    let gameState = this.state.gameState;
    gameState[row][col] = currentSymbol;

    this.setState(
      {
        currentPlayer: currentPlayer,
        winner: this.state.winner,
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
  declareWinner = (currentPlayer) => {
    let winner = currentPlayer === "Player 1" ? "Player 2" : "Player 1";
    this.setState({ winner: winner });
  };
  checkGameOver = (gameState) => {
    //horizontal
    this.checkHorizontalRow(gameState, 0);
    this.checkHorizontalRow(gameState, 1);
    this.checkHorizontalRow(gameState, 2);
    this.checkVeticalColumn(gameState, 0);
    this.checkVeticalColumn(gameState, 1);
    this.checkVeticalColumn(gameState, 2);
    this.checkDiagonal(gameState);
  };
  checkDiagonal = (gameState, winner) => {
    if (
      gameState[0][0] === gameState[1][1] &&
      gameState[1][1] === gameState[2][2] &&
      gameState[2][2] !== ""
    ) {
      this.declareWinner();
      alert("Game over");
    }
    if (
      gameState[2][0] === gameState[1][1] &&
      gameState[1][1] === gameState[0][2] &&
      gameState[0][2] !== ""
    ) {
      this.declareWinner();
      alert("Game over");
    }
  };

  checkHorizontalRow = (gameState, row) => {
    if (
      gameState[row][0] === gameState[row][1] &&
      gameState[row][1] === gameState[row][2] &&
      gameState[row][1] !== ""
    ) {
      this.declareWinner();
      alert("Game over");
    }
  };
  checkVeticalColumn = (gameState, col) => {
    if (
      gameState[0][col] === gameState[1][col] &&
      gameState[1][col] === gameState[2][col] &&
      gameState[2][col] !== ""
    ) {
      this.declareWinner();
      alert("Game over");
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2 className="playerName">{this.state.currentPlayer}</h2>{" "}
          <span className="playing">now playing</span>
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
          <div>
            <h3 className="winner">Winner: {this.state.winner}</h3>
          </div>
        </div>
      </div>
    );
  }
}
