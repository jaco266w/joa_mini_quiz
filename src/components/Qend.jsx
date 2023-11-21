import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Qend() {
  const [wizard, setWizard] = useState(5);
  const [message, setMessage] = useState("Tænker...");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (wizard < 7) {
        setWizard(wizard + 1);
      } else {
        setMessage("Perfekt gave fundet!");
        setShowButton(true);
        clearInterval(timer);
      }
    }, 1800);
    return () => clearInterval(timer);
  }, [wizard]);

  return (
    <div className="flex flex-col items-center justify-start h-full gap-10 pt-20 ">
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
