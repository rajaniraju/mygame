import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: "player1",
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
    let currentPlayer = this.player1 ? this.player2 : this.player1;
    let currentSymbol = this.player1 ? "X" : "O";

    this.setState({
      currentPlayer: currentPlayer,
      currentSymbol: currentSymbol,
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
