
import React, { useState } from "react";
import AH from "./AH";

const Helpline = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <h1>EMERGENCY Contact Number</h1>
      <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
        <img
          src="/images/1098.jpg"
          alt="My Image"
          style={{
            width: '70%',
            height: '30%',
          }}
        />
        <div style={{ position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', textAlign: 'center' }}>
          <button onClick={togglePopup} style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>
            <img src="/images/info.jpg" alt="Info" style={{ width: '40px', height: '40px' }} />
          </button>

          {showPopup && (
            <div style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '10px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', zIndex: '3' }}>
              <p>CHILDLINE is a National, 24 Hour, Emergency toll-free phone service for children in need of care and protection. Any child or concerned adult can dial 1098 to access this service. It is a project of The Ministry of Woman and Child Development, Government of India (GOI).<br></br><br></br><br></br><br></br></p>
              <button onClick={togglePopup}>Close</button>
            </div>
          )}
        </div>
        <div style={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '2', textAlign: 'center' }}>
          <a href="tel:1098" style={{ textDecoration: 'none' }}>
            <AH buttonText="CALL 1098" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Helpline;
