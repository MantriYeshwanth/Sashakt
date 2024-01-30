import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";
import Modal from 'react-modal';
import "./WheelApp.css"; 

const modalStyles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 3, 
  },
  content: {
    position: "static", 
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    borderRadius: "8px",
    outline: "none",
    padding: "20px",
  },
};

const WheelApp = () => {
  const [hasSpun, setHasSpun] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [winnerText, setWinnerText] = useState("");
  const [winnerMessage, setWinnerMessage] = useState("");
  const [winnerImage, setWinnerImage] = useState("");
  const [winningSegment, setWinningSegment] = useState(null); // Declare winningSegment

  const segments = [
    { name: "Education", image: "/parImg/movie.jpeg", message: "Right to Education" },
    { name: "equality", image: "/parImg/movie.jpeg", message: "Right to Equality" },
    { name: "Nutrition", image: "/parImg/movie.jpeg", message: "Right to Nutrition" },
    { name: "Discrimination", image: "/parImg/movie.jpeg", message: "Protection against discrimination" },
    { name: "Trafficking", image: "/parImg/roleplay.jpeg", message: "Protection against trafficking" },
    { name: "Participation", image: "/parImg/journal.jpg", message: "Right to participation" },
    { name: "child Labour", image: "/parImg/Playtime.jpg", message: "Protection from child labour" },
    { name: "Child Marriage", image: "/parImg/grateful.jpg", message: "Child Marriage Prevention" },
  ];

  const customMessageBasedOnWinner = (winner) => {
    switch (winner) {
      case "Education":
        return "Education fact";
      case "equality":
        return "equality fact";
      case "Nutrition":
        return "Nutrition fact";
      case "Discrimination":
        return "Discrimination fact";
      case "Trafficking":
        return "Traficking fact";
      case "Participation":
        return "Participation fact";
      case "child Labour":
        return "Labour fact";
      case "Child Marriage":
        return "Marriage fact";
      default:
        return "";
    }
  };

  const segColors = ["#ffeb3b", "#e91e63", "#4caf50", "#3f51b5", "#ffeb3b", "#e91e63", "#4caf50", "#3f51b5"];

  const onFinished = (winner) => {
    const currentWinningSegment = segments.find((segment) => segment.name === winner);
    setWinnerText(winner);
    setWinnerMessage(currentWinningSegment.message);
    setHasSpun(true);
    setModalOpen(true);
    setWinnerImage(currentWinningSegment.image);
    setWinningSegment(currentWinningSegment); // Update winningSegment
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    
    <div className="Wheeel">
      <div className="wheel-container">
        <WheelComponent
          segments={segments.map(segment => segment.name)}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="#F5F5DC"
          contrastColor="#002D51"
          buttonText="Spin"
          isOnlyOnce={hasSpun}
          size={240}
          upDuration={50}
          downDuration={600}
          fontFamily="Arial"
          zIndex={2}
          className="WheelComponent"
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Winner Modal"
        style={modalStyles}
      >
        <div style={{ textAlign: "center" }}>
         <h2>{winnerMessage}</h2>
         {winnerImage && <img src={winnerImage} alt="Winner" style={{ maxWidth: "100%" }} />}
         <p style={{ marginTop: "10px" }}>
        
           Additional message: {customMessageBasedOnWinner(winnerText)}
         </p>
         <button onClick={closeModal}>Close</button>
       </div>
     </Modal>
   </div>

    
    
);
};

export default WheelApp;
