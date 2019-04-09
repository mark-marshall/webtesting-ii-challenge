import React, { Component } from 'react';

import Display from './Display'
import Dashboard from './Dashboard';


class Container extends Component {
  state = {
    strike: 0,
    ball: 0,
  };

  fireStrike = () => {
    this.state.strike === 3
      ? this.setState({
          strike: 0,
          ball: 0,
        })
      : this.setState(prevState => ({
          strike: prevState.strike + 1,
        }));
  };

  fireBall = () => {
    this.state.ball === 4
      ? this.setState({
          ball: 0,
          strike: 0,
        })
      : this.setState(prevState => ({
          ball: prevState.ball + 1,
        }));
  };

  fireFoul = () => {
    this.state.strike === 0 || this.state.strike === 1
      ? this.setState(prevState => ({
          strike: prevState.strike + 1,
        }))
      : this.setState(prevState => ({
          strike: prevState.strike,
        }));
  };

  fireHit = () => {
    this.setState({
      strike: 0,
      ball: 0,
    });
  };

  render() {
    return (
      <div>
        <h2>Baseball</h2>
        <Display 
        strike={this.state.strike}
        ball={this.state.ball}
        />
        <Dashboard
        fireStrike={this.fireStrike}
        fireBall={this.fireBall}
        fireFoul={this.fireFoul}
        fireHit={this.fireHit}
        />
      </div>
    );
  }
}

export default Container;
