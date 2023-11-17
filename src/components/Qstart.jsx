import Image from "next/image";

export default function Qstart() {
  return (
    <div>
      <div className="grid place-content-center">
        <h2 className="font-serif text-center font-bold text-3xl">Find din perfekte gave</h2>
        <div className=" h-96 bg-center bg-[url('/quiz.png')] w-96  mix-blend-normal"></div>
        {/* <Image className="w-fit h-fit outline-none" src="/quiz.png" alt="produkt" width={500} height={500} /> */}
      </div>
    </div>
  );
}
