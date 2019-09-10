import React from 'react';
export class Registration extends React.Component {
  state = {
    p1: '',
    p2: ''
  };

  render() {
    return (
      <div>
        <input
          data-testid="p1-input"
          onChange={evt =>
            this.setState({
              p1: evt.target.value
            })
          }
        ></input>
        <input
          data-testid="p2-input"
          onChange={evt =>
            this.setState({
              p2: evt.target.value
            })
          }
        ></input>
        <button
          data-testid="new-game"
          onClick={() => this.props.onNewGame(this.state.p1, this.state.p2)}
        >
          New Game
        </button>
      </div>
    );
  }
}
