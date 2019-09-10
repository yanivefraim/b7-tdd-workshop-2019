import { Registration } from './Registration';
import cloneDeep from 'lodash/cloneDeep';
import React from 'react';
import './App.css';
import { Game } from './Game';

class App extends React.Component {
  state = {
    p1: '',
    p2: '',
    board: [['', '', ''], ['', '', ''], ['', '', '']]
  };

  handleNewGame = (p1, p2) => {
    this.setState({ p1, p2 });
  };
  handleCellClicked = (rowIndex, cellIndex) => {
    const board = cloneDeep(this.state.board);

    board[rowIndex][cellIndex] = 'X';
    this.setState({ board });
  };

  render() {
    return (
      <div className="App">
        <Registration onNewGame={this.handleNewGame}></Registration>
        <Game
          p1={this.state.p1}
          p2={this.state.p2}
          board={this.state.board}
          onCellClicked={this.handleCellClicked}
        ></Game>
      </div>
    );
  }
}

export default App;
