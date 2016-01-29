import React, { Component } from 'react';

export default class Board extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div style={{'border-style': 'solid', 'border-color': 'red', 'width': '500px', 'height': '500px' }}>
        <div style={{position: 'relative', 'top': '100px', 'left': '100px', 'background-color': 'blue', width: '10px', height: '10px'}}></div>
      </div>
    );
  }
}
