import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+918340921220';
    const message = 'Hi';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank'); // Corrected variable name to 'url'
  };

  const handleInstaClick = () => {
    const instaid = 'https://www.instagram.com/direct/t/17847568733895720/';
    window.open(instaid, '_blank');
  };

  return (
    <>
      <button onClick={handleWhatsAppClick} className='WAbutton'>
        <img src='whatsapp.jpg' alt='Whatsapp' />
      </button>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <button onClick={handleInstaClick} className='Instabutton'>
        <img src='instagram.jpg' alt='instagram' />
      </button>
    </>
  );
};

export default WhatsAppButton;
