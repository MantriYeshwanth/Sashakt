import React from "react";
import ScratchCard from "react-scratchcard";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import cardImage from "./istockphoto-1400919733-2048x2048.jpg";
const replace ="./Screenshot 2020-10-08 100900.jpg";

const settings = {
    width: 640,
    height: 480,
    image: cardImage,
    finishPercent: 20 ,
    onComplete: () => console.log("The card is now clear!")
};
const ScratchCardComponent = () => (
<ScratchCard {...settings}><div style={{textAlign:"center"}}><img src={replace} alt="jhfh"  style={{width:"640px",  height:"400px"}}/><Link to='#' ><Button >quiz</Button></Link></div></ScratchCard>);

class Scratchcard extends React.Component {
    handleMouseEnter = () => {
        // Change cursor shape here
        document.body.style.cursor = 'crosshair';
    };
    
    handleMouseLeave = () => {
            // Reset cursor shape when leaving
        document.body.style.cursor = 'default';
    };
    render() {
        return (
        <div onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} style={{width:'650px'}}>
            <ScratchCardComponent />
        </div>
        );
    }
}
export default Scratchcard;
