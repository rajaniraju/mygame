import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Square extends React.Component {
  onButtonClick = () => {
    console.log(this.props.index);
    //let indexOfSquare=this.props.onClick
  };
  render() {
    return (
      <button
        type="button"
        className="btn"
        onClick={this.onButtonClick}
      ></button>
    );
  }
}
export default Square;
