import Image from "next/image";

export default function Qstart(props) {
  return (
    <div className="flex flex-col items-center justify-center h-3/6 gap-10 ">
      <div className="flex flex-col gap-10 items-center ">
        <h2 className="font-serif text-center font-medium text-4xl max-w-sm">
          Få hjælp af vores magiske gaveguide!
        </h2>
        <button onClick={props.clickForwards} className="btn btn-primary ">
          Start
        </button>
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
