"use client";

import Image from "next/image";
import Modal from "./Modal";

export default function QuizCard() {
  return (
    <>
      <div
        className="card w-72 border cursor-pointer hover:shadow-md transition-shadow h-96 md:h-auto  relative overflow-hidden"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <div className="text-center flex flex-col justify-center gap-4 items-center h-1/2 mx-8">
          <p className="text-sm">Kan du ikke vælge den helt perfekte gave?</p>
          <button className="btn btn-primary ">Spørg Wellness Wizard</button>
        </div>
        <figure>
          <Image
            className="object-cover translate-y-32 w-full absolute bottom-0 left-0 -z-50"
            width={200}
            height={200}
            src={"/wizard1.png"}
            alt="gaveide"
          />
        </figure>
      </div>
      <Modal />
    </>
  );
}
