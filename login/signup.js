import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
const NicknameGenerator = () => {
  const NavLink=useNavigate();
  const [childName, setChildName] = useState('');
  const [cartoonCharacter, setCartoonCharacter] = useState('');
  const [age, setAge] = useState('');
  const [nickname, setNickname] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Fancy nickname generation logic
    const nameWithoutSpaces = childName.replace(/\s/g, ''); // Remove spaces from the child's name
    const firstThreeChars = nameWithoutSpaces.slice(0, 3).toLowerCase();
    const cartoonFirstThreeChars = cartoonCharacter.slice(0, 3).toLowerCase();
    const generatedNickname = `${firstThreeChars}${cartoonFirstThreeChars}${age}`;

    // You can add more sophisticated logic for nickname generation here

    const url = 'http://localhost:5000/register';
            const pitch={nickname:generatedNickname};
            const res= await fetch(url, {    method: 'POST',    headers: {    'Content-Type': 'application/json' },    body: JSON.stringify(pitch)})
            const data= await res.json();
            console.log(data);
            if(data.status ===422 || !data){
                window.alert("invalid");
                console.log("invalid");
            }else{
                console.log("valid");
                // NavLink("/home");
                setLoggedIn(true);
            }

    setNickname(generatedNickname);
    
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setChildName('');
    setCartoonCharacter('');
    setAge('');
    setNickname('');
  };

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
      textDecoration: 'none', // Remove underline from the link
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
    nicknameResult: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      {isLoggedIn ? (
        <div>
          {/* <h2>Welcome back!</h2> */}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <button style={{ ...styles.button, ...styles.buttonHover }}>Thank you for registering</button>
          </Link>
          {/* <button onClick={handleLogout} style={styles.button}>
            Logout
          </button> */}
        </div>
      ) : (
        <div>
          <h2>Register</h2>
          <form onSubmit={handleLogin} style={styles.form}>
            <label htmlFor="childName" style={styles.label}>
              Your name
            </label>
            <input
              type="text"
              id="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              style={styles.input}
              required
            />
            <br />

            <label htmlFor="cartoonCharacter" style={styles.label}>
              Favorite Cartoon Character:
            </label>
            <input
              type="text"
              id="cartoonCharacter"
              value={cartoonCharacter}
              onChange={(e) => setCartoonCharacter(e.target.value)}
              style={styles.input}
              required
            />
            <br />

            <label htmlFor="age" style={styles.label}>
              Age:
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={styles.input}
              required
            />
            <br />

            <button type="submit" style={styles.button} onMouseOver={(e) => (e.target.style = styles.buttonHover)}>
              Say my Nickname
            </button>
          </form>
        </div>
      )}

      {nickname && (
        <div style={styles.nicknameResult}>
          <h3>Hello</h3>
          <p>{nickname}  !!</p>
        </div>
      )}
    </div>
  );
};

export default NicknameGenerator;