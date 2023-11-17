"use client";

import Image from "next/image";
import Modal from "./Modal";

export default function QuizCard() {
  return (
    <>
      <div className="card w-72 bg-neutral cursor-pointer hover:shadow-xl" onClick={() => document.getElementById("my_modal_3").showModal()}>
        <figure>
          <Image className="object-cover h-56" width={500} height={500} src="/quiz.png" alt="gaveide" />
        </figure>
        <div className="card-body">
          <p className="uppercase text-center">Hjælp til gaven?</p>
          <h2 className="card-title font-serif capitalize text-xl">Gaven til den eneste ene</h2>
        </div>
      </div>
      <Modal />
    </>
  );
}
