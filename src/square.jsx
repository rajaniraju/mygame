import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Square extends React.Component {
  whenClicked(props) {
    console.log(this.props.value);
  }
  render() {
    return (
      <button type="button" className="btn" onClick={this.whenClicked} value={this.props.value}></button>
    );
  }
}
export default Square;
