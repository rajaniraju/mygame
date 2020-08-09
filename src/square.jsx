import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Square extends React.Component {
  clicked = false;
  text = "";

  whenClick = () => {
    if (this.clicked === false) {
      this.props.onClick(this.props.row, this.props.col);
      this.clicked = true;
    }
    //let indexArray = this.props.index;
    //console.log(indexArray.index);
  };

  render() {
     if (this.text.length <= 0) {
     this.text = this.props.text;
     }
    return (
      <button type="button" className="btn" onClick={this.whenClick}>
        {this.text}
      </button>
    );
  }
}

export default Square;
