import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: true,
      currentPlayer: "Player 1",
      currentSymbol: "X",
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }
  onClick = () => {
    console.log("I have clicked");
    let currentPlayer = this.state.player1 ? "Player 2" : "Player 1";
    let currentSymbol = this.state.player1 ? "X" : "O";

    this.setState({
      currentPlayer: currentPlayer,
      currentSymbol: currentSymbol,
      player1: !this.state.player1,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div>{this.state.currentPlayer} now playing</div>
          <div>
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
          </div>
          <div>
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
          </div>
          <div>
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
            <Square onClick={this.onClick} />
          </div>
        </div>
      </div>
    );
  }
}
