import React, { Component } from 'react';
import Board from './Board';

export default class App extends Component {
  constructor(props) {
      super(props);
  }


  render() {
    return (
      <Board />
    );
  }
}
