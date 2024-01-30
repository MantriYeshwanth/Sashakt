import React from "react";
import ScratchCard from "react-scratchcard";
import cardImage from "./ScratchCard.jpg";
import "./ScratchCard.css"; // Replace with the path to your stylesheet

const settings = {
    width: 640,
    height: 480,
    image: cardImage,
    finishPercent: 80,
    onComplete: () => console.log("The card is now clear!")
};

const ScratchCardComponent = () => (
    <div className="scratch-card-box">
        <ScratchCard {...settings} />
        <div className="scratched-content">
            <p>
            Child rights are inherent entitlements belonging to every individual under the age of 18. These rights, outlined in international agreements like the United Nations Convention on the Rights of the Child (CRC), cover areas such as survival, development, protection from exploitation, and participation in decisions affecting them. They emphasize the importance of providing children with essentials like education, healthcare, and a secure environment. Ensuring child rights establishes a foundation for a just and nurturing society, enabling children to grow, learn, and contribute positively to the world.
            </p>
        </div>
    </div>
);

class Scratchcard extends React.Component {
    render() {
        return (
            <div className="container">
                <ScratchCardComponent />
            </div>
        );
    }
}

export default Scratchcard;
