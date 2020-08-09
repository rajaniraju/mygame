import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: true,
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

    this.setState({
      currentPlayer: currentPlayer,
      currentSymbol: currentSymbol,
      player1: !this.state.player1,
      gameState: gameState,
    });
    console.log(this.state.gameState);
    return this.state.gameState.text;
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
        </div>
      </div>
    );
  }
}
