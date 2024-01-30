import { Link } from "react-router-dom";
import './Splash.css';

const Splash = () => {
    const backgroundStyle = {
      backgroundImage: `url("/images/splashintrow.jpg")`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      width: '100%', // Adjust the width as needed
      height: '100vh', // Adjust the height as needed
    };
    return (  
      <>
      <div className='backgroundimg' style={backgroundStyle}></div>
        <div className="splash" >
          <div className="splash-content">
            <h1 className="head" >Empower Your Child From Today</h1>
            <p className="para" >
              Experience a Gamified platform that nurtures your child's development in a fun & engaging way.
            </p>
            <Link  className="enter-button" to="/Ageland">
               <input className='btn btn-success' type='button' value='Join Now'/>
            </Link>
          </div>
        </div>
        </>
    );

}
 
export default Splash;