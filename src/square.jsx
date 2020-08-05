import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Square extends React.Component {
  
  render() {
    return (
      <button type="button" className="btn" onClick={this.props.onClick} >  </button>
    );
  }
}
export default Square;
