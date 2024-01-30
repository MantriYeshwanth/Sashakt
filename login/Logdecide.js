import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const LandingPage = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '50px',
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      margin: '10px',
      textDecoration: 'none',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    heading: {
      fontSize: '28px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Sashakt</h1>
      <Link to="/login" style={{ ...styles.button, ...styles.buttonHover }}>
        Continue Adventure
      </Link>
      <Link to="/signup" style={styles.button}>
        Start Adventure
      </Link>
    </div>
  );
};

export default LandingPage;