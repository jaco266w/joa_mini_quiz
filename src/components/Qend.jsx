import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Confetti from "react-dom-confetti";

export default function Qend() {
  const [wizard, setWizard] = useState(5);
  const [message, setMessage] = useState("Tænker...");
  const [showButton, setShowButton] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (wizard < 7) {
        setWizard(wizard + 1);
      } else {
        setMessage("Perfekt gave fundet!");
        setConfetti(true);
        setShowButton(true);
        clearInterval(timer);
        setTimeout(() => setConfetti(false), 2000);
      }
    }, 1800);
    return () => clearInterval(timer);
  }, [wizard]);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 25,
    elementCount: 3000,
    dragFriction: 0.12,
    duration: 20000,
    stagger: 20,
    width: "10px",
    height: "10px",
    perspective: "800px",
    colors: ["#002643", "#EB595E", "#004634", "#F07E8C", "#D8D1CB"],
    // colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };

  return (
    <div className="flex flex-col items-center justify-start h-full gap-10 pt-20 ">
      <div className=" w-full absolute -top-20 flex justify-center">
        <Confetti
          active={confetti}
          config={config}
          className="w-0 h-0 absolute -z-50"
        />
      </div>

      <div className="flex flex-col gap-10 items-center ">
        <h2 className="font-serif text-center font-medium text-4xl">
          {message}
        </h2>
        {showButton && (
          <button className="btn btn-primary">
            <Link href="/resultspage">Se Resultat</Link>
          </button>
        )}
      </div>

      <Image
        src={`/wizard${wizard}.png`}
        alt="hello"
        width="500"
        height="400"
        className="absolute top-56  object-contain pointer-events-none"
      />
    </div>
  );
}
