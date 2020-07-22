import React, { Component } from "react";
import Square from "./square";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player:" ",
      index: [1,2,3,4,5,6,7,8,9]
     
    };
  }
  // getIndex(index){
  //   for (let i=0;i<index.length;i++){
  //     console.log(i)
  //     return i;
      
  choosePlayer(){
const {player}= this.state
return player===" "?"player1":"player2"
    }

  render() {
    return (
      <div>
      
      <div className="container">
      <div>{this.choosePlayer()} now playing</div>
        <div className="cell">
          <div className="row">
          
            <Square index="1" />
            <Square index="2" />
            <Square index="3" />
          </div>
        </div>
        <div className="row">
          <Square index="4" />
          <Square index="5" />
          <Square index="6" />
        </div>
        <div className="row">
          <Square index="7" />
          <Square index="8" />
          <Square index="9" />
        </div>
      </div>
      </div>
    );
  }
}
