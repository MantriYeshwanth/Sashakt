import WheelComponent from "react-wheel-of-prizes";

const WheelApp = () => {
  const segments = [
    "Right to education",
    "Right to Equality",
    "Right to Nutrition & Healthcare",
    "Right against Descrimination",
    "Protection from Exploitation and Trafficking",
    "Right to Participation"
  ];

  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];

  const onFinished = (winner) => {
    console.log(winner);
  };

  return (
    <div className="App">
      <div className='backgroundimg'>
        <img src="/images/first.jpg" alt="My Image" />
      </div>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin"
        isOnlyOnce={false}
        size={215}
        upDuration={50}
        downDuration={600}
        fontFamily="Arial"
        className="WheelComponent"
      />
    </div>
  );
};

export default WheelApp;
