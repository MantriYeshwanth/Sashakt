import React from 'react';
import './Board.css';

class Board extends React.Component {
  state = {
    totalNodes: 5,
    currentNodePosition: 0,
    board: [],
    gameOver: false,
    showPopup: false,
  };

  componentDidMount() {
    this.renderBoard();
  }

  handleBtnClick = () => {
    let moverContainerLeftOffset = this.refs.moverContainer.offsetLeft;
    let moverLeftOffset = this.refs.mover.offsetLeft;
    let moverMiddle = this.refs.moverContainer.clientWidth / 2;
    let moverLength = this.refs.mover.clientWidth;
    let left = moverContainerLeftOffset + moverMiddle - 2.25 * moverLength;
    let right = moverContainerLeftOffset + moverMiddle + 2.25 * moverLength;

    if (moverLeftOffset >= left && moverLeftOffset <= right) {
      this.updateCurrentPosition();
    } else {
      this.setState({ gameOver: true });
      this.resetBoard();
    }
  };

  updateCurrentPosition = () => {
    const { currentNodePosition, totalNodes } = this.state;
    let currentPosition = currentNodePosition;
    currentPosition += 1;
    this.setState({ currentNodePosition: currentPosition });
    this.updateBoard(currentPosition);

    if (currentPosition === totalNodes) {
      // Change the image and show popup after a delay of 3 seconds
      setTimeout(() => {
        this.setState({ showPopup: true });
      }, 1000);
    }
  };

  updateBoard = (value) => {
    const { board, totalNodes } = this.state;
    if (value > totalNodes) {
      return;
    }

    let boardData = board;
    boardData[value - 2] = <div key={value - 2}>{value - 1}</div>;

    const imageUrl = '/images/police.jpg'; // Keep the node image constant

    boardData[value - 1] = (
      <div key={value - 1}>
    <img src={imageUrl} alt={`Node ${value - 1}`} className="selected-image" />
      </div>

    );

    this.setState({ board: boardData, gameOver: false });

    if (value === totalNodes) {
      // Change the image in the image-container after reaching the last box
      this.refs.imageContainer.firstChild.src = '/carouselimg/100.jpg'; // Replace with the path of your new image
    }
  };

  resetBoard = () => {
    this.setState(
      {
        currentNodePosition: 0,
        board: [],
      },
      () => this.renderBoard()
    );
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  renderBoard = () => {
    const { totalNodes } = this.state;
    let boardItems = [];
    for (let i = 0; i < totalNodes; i++) {
      boardItems.push(<div key={i}>{i + 1}</div>);
    }
    this.setState({ board: boardItems });
  };

  resetBoardAndGameOver = () => {
    this.setState({ currentNodePosition: 0, board: [], gameOver: false, showPopup: false }, () =>
      this.renderBoard()
    );
  };

  render() {
    const { board, currentNodePosition, totalNodes, gameOver, showPopup } = this.state;
    return (
      <div className="Board">
        <div className="main-container">
          <div className="instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Press 'Click here' Button when the moving node is inside the 'Zone'</li>
            <li>If you can reach to box 5, you can then rescue a child from the clutches of injustice!</li>
          </ol>
        </div>
          <div className="line-container">
            <div className="board-container">{board}</div>
            <div className="image-container" ref="imageContainer">
              <img src="/images/childm.png" alt="Your Image" />
            </div>
          </div>
          <div className="panel">
            <div className="all">
              <button
                className="btn primary"
                onClick={this.handleBtnClick}
                disabled={currentNodePosition === totalNodes}
              >
                Click Here
              </button>

              <button className="btn danger" onClick={() => this.resetBoardAndGameOver()}>
                Replay
              </button>

              <div ref="moverContainer" className="mover-container">
                <div ref="mover" className="mover"></div>
              </div>
              <div className="zone" ref="zone">
                <span style={{ backgroundColor: '#333' }}>ZONE</span>
              </div>
            </div>
            <div>
              {gameOver && <h1 style={{ color: 'red' }}>Game over !!!</h1>}
            </div>
          </div>
        </div>
        {showPopup && (
          <div className="popup">
            <h2>Woohhooo!</h2>
            <p>You saved the child from child marriage. Now she's free to study and live without any barriers. Thanks to your call to the police, she's safe and has a chance for a better future!</p>
            <button onClick={this.closePopup}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

export default Board;