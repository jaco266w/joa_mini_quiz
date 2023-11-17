"use client";

import Image from "next/image";
import Modal from "./Modal";

export default function QuizCard() {
  return (
    <>
      <div
        className="card w-72  border cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <figure>
          <Image
            className="object-contain h-48 w-48 m-4"
            width={200}
            height={200}
            src="/gifts.png"
            alt="gaveide"
          />
        </figure>
        <div className="card-body ">
          <p className="text-center">Kan du ikke finde den perfekte gave?</p>
          <button className="btn btn-neutral">Tag quizzen</button>
        </div>
      </div>
      <Modal />
    </>
  );
}
