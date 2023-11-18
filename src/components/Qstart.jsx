import Image from "next/image";

export default function Qstart() {
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <h2 className="font-medium font-serif text-center text-3xl">
          Find den perfekte gave
        </h2>
        <Image
          src={"/gifts.png"}
          alt="hello"
          width="350"
          height="350"
          className=" "
        />
      </div>
    </div>
  );
}
