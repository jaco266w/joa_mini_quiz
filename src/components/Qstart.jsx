import Image from "next/image";

export default function Qstart() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h2 className="font-serif text-center font-bold text-4xl">
          Find din perfekte gave
        </h2>
        <Image
          src={"/gifts.png"}
          alt="hello"
          width="350"
          height="350"
          className="  mix-blend-color-burn grayscale contrast-125  brightness-50"
        />
      </div>
    </div>
  );
}
