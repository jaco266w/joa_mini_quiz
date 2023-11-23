import Confetti from "react-dom-confetti";

export default function ConfettiComponent(props) {
  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 15,
    elementCount: 35,
    dragFriction: 0.12,
    duration: 2000,
    stagger: 1,
    width: "10px",
    height: "10px",
    perspective: "800px",
    colors: ["#002643", "#EB595E", "#004634", "#F07E8C", "#D8D1CB"],
    // colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <Confetti
      active={props.confetti}
      config={config}
      className="w-0 h-0 absolute -translate-x-14 -translate-y-1/2"
    />
  );
}
