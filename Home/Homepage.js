import React from 'react';
import './Homepage.css'
import MysteryBox from './MysteryBox';
import AppFooter from '../footer';

const Homepage = () => (
  <div>
    <div
     className='body001'
      style={{
        position: 'relative',
        height: '100vh',
        width:"100wh",
        backgroundImage: 'url("/Images/pic1.jpg")',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        padding: '0',
        //margin:'20px 20px'
      }}
      >
        
    <h1 style={{ marginTop: '100px' ,fontSize:'70px'}}>Welcome to Our Fun Learning App!</h1>
    <p style={{ marginTop: '10px' ,fontSize:'40px'}}>Explore and learn about child rights through games and stories.</p>
    <div className="buttons-container">
      <MysteryBox/>
    </div>
    </div>
    {/* <AppFooter/> */}
  </div>
);



export default Homepage;
