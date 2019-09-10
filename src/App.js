import { Registration } from './Registration';
import React from 'react';
import './App.css';
import { Game } from './Game';

class App extends React.Component {
  state = {
    p1: '',
    p2: ''
  };

  handleNewGame = (p1, p2) => {
    this.setState({ p1, p2 });
  };
  render() {
    return (
      <div className="App">
        <Registration onNewGame={this.handleNewGame}></Registration>
        <Game p1={this.state.p1} p2={this.state.p2}></Game>
      </div>
    );
  }
}

export default App;
