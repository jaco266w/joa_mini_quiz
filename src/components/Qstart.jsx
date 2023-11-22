import Image from "next/image";
import ConfettiComponent from "./ConfettiComponent";

export default function Qstart(props) {
  return (
    <div className="flex flex-col items-center justify-start h-full gap-10 pt-20">
      <div className="flex flex-col gap-10 items-center ">
        <h2 className="font-serif text-center font-medium text-4xl max-w-sm">
          Få hjælp af vores magiske gaveguide!
        </h2>
        <button onClick={props.clickForwards} className="btn btn-primary ">
          Start
        </button>
        <ConfettiComponent confetti={props.confetti} />
      </div>

      <Image
        src={"/wizard4.png"}
        alt="hello"
        width="500"
        height="400"
        className="absolute top-56  object-contain pointer-events-none"
      />
    </div>
  );
}
