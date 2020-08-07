import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Square extends React.Component {
  clicked = false;

  whenClick = () => {
    if (this.clicked === false) {
      this.clicked = true;
      this.props.onClick();
    }
  };

  render() {
    return (
      <button type="button" className="btn" onClick={this.whenClick}>
        {this.props.text}
      </button>
    );
  }
}

export default Square;
