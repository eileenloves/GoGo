import React, { Component } from "react";
import { Carousel } from "antd";

function onChange(a, b, c) {
  console.log(a, b, c);
}

class Center extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  render() {
    return (
      <div className="container">
        <Carousel afterChange={onChange}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Center;
