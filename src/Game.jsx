import React, { Component } from "react";
import Board from './Board';


export default class Game extends Component{
   render() {
       return(<div>
           <h1>Tic Tac Toe</h1> 
           <div className= "game">
               <div className="game-board"><Board/></div></div>
            </div>)
   }
}
