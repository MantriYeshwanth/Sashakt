import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

function Sashakt() {
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "rgb(0, 0, 0)", opacity: 0.9 ,zIndex:'1000',width: '100%',top: '0' }}>
        <h1 style={{ textAlign: 'left', color: 'rgba(10, 200, 180, 10)', paddingLeft: '15px' }}>
          SASHAKT <sub>CHILD EMPOWERMENT</sub>
        </h1>
        <ul className="nav justify-content-lg-end" style={{ paddingRight: '50px' }}>
          <li className="nav-item">
            <Link className="nav-link active"to="/" aria-current="page" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Home</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/Carousel" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Rights</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About" style={{ color: 'white', fontSize: 'larger' }}>
              <b>About</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/Feedback" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Feedback</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/logindecide" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Login</b>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"to="/ContactUs" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Contact</b>
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link"to="#" style={{ color: 'white', fontSize: 'larger' }}>
              <b>Emergency</b>
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link"to="/faq" style={{ color: 'white', fontSize: 'larger' }}>
              <b>FAQ</b>
            </Link>
          </li>
        </ul>
      </div>
      <style>
        {`
          #hdes {
            padding-top: 140px;
            text-align: center;
            color: darkred;
          }
        `}
      </style>
      
    </>
  );
}

export default Sashakt;
