import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SimpleLoginPage = () => {
  const [nickname, setNickname] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your authentication logic here
    if (nickname.trim() !== '') {
      setLoggedIn(true);
    }
  };

//   const handleLogout = () => {
//     setLoggedIn(false);
//     setNickname('');
//   };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '50px',
    },
    form: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f8f8f8',
    },
    label: {
      display: 'block',
      marginBottom: '8px',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
    },
    button: {
      backgroundColor: '#4caf50',
      color: '#fff',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginRight: '8px',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    welcomeMessage: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div>
          <h2>Welcome back, {nickname}!</h2>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <button style={styles.button}>Start Adventure</button>
          </Link>
          {/* <button onClick={handleLogout} style={styles.button}>
            Logout
          </button> */}
        </div>
      ) : (
        <div>
          <h2>Say your Nickname to resume the Adventurous learning</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <label htmlFor="nickname" style={styles.label}>
              Nickname:
            </label>
            <input
              type="text"
              id="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              style={styles.input}
              required
            />
            <br />
            <button
              type="submit"
              style={styles.button}
              onMouseOver={(e) => (e.target.style = styles.buttonHover)}
            >
              Start
            </button>
          </form>
        </div>
      )}

      {isLoggedIn && (
        <div style={styles.welcomeMessage}>
          {/* <h3>Start exploring the site!</h3> */}
        </div>
      )}
    </div>
  );
};

export default SimpleLoginPage;