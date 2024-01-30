// import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div className="button-containeryesh1">
      <Link to="/Memory">
        <button className="box-buttonyesh1">Memory</button>
      </Link>
      <Link to="/flip">
        <button className="box-buttonyesh1">Flip-Card</button>
      </Link>
      <Link to="/Cross">
        <button className="box-buttonyesh1">crossWord</button>
      </Link>
      <Link to="/home/games/Guess">
        <button className="box-buttonyesh1">guess</button>
      </Link>
      <Link to="/Jigsaw">
        <button className="box-buttonyesh1">jig-saw</button>
      </Link>
      {/* <Link to="/SpinWheel">
        <button className="box-buttonyesh1">Spin-wheel</button>
      </Link> */}
      <Link to="/Board">
        <button className="box-buttonyesh1">Freedom Quest</button>
      </Link>
    </div>
  );
};

export default Button;

// Define class at the end of the page
const styles = `
  .button-containeryesh1 {
    margin: 200px auto;
    display: grid;
    padding-right: 100px;
    padding-left: 100px;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 100px;
    grid-gap: 5px;
  }

  .box-buttonyesh1 {
    font-size: 150%;
    width: 12vw;
    height: 10vh;
    margin: 10px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

// Apply styles
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
