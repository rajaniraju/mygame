import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: "X",
      player2: "o",
      currentPlayer: null,      
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }
  onClick(){}

  render() {
    return (
      <div>
        <div className="container">
          <div>{this.state.player1} now playing</div>
          <div>
          <Square value={this.state.board[0][0]}/>
          <Square value={this.state.board[0][1]}/>
          <Square value={this.state.board[0][2]}/>
          </div>
          <div>
          <Square value={this.state.board[1][0]}/>
          <Square value={this.state.board[1][1]}/>
          <Square value={this.state.board[1][2]}/>
          </div>
          <div>
          <Square value={this.state.board[2][0]}/>
          <Square value={this.state.board[2][1]}/>
          <Square value={this.state.board[2][2]}/>
          </div>
        </div>
      </div>
    );
  }
}
