import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className={`home ${this.props.className}`}>
        <span>Welcome</span>
      </div>
    );
  }
}

export default Home;
