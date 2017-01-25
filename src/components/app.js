import React, { Component } from 'react';


// make sure that app renders this.props.children
export default class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}
