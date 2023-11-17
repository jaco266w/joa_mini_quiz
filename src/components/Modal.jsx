import Slide from "./Slide";

import ModalButtons from "./ModalButtons";
import StartButton from "./StartButton";
import GiftButton from "./GiftButton";
import Steps from "./Steps";

import { useState } from "react";
import Qstart from "./Qstart";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Qend from "./Qend";
import Image from "next/image";

export default function Modal() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide === 4) {
      return;
    }
    setCurrentSlide((old) => old + 1);
  }

  function prevSlide() {
    if (currentSlide === 0) {
      return;
    }
    setCurrentSlide((old) => old - 1);
  }
  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box h-4/6 max-w-2xl overflow-clip flex flex-col justify-between rounded-2xl">
        <Image height={500} width={500} src="/quiz_bg.png" alt="quiz_bg" className="absolute -z-50 top-0 left-0 w-full h-full scale-110" />
        <form className="" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        {currentSlide === 0 && (
          <>
            <Qstart />
          </>
        )}
        {currentSlide === 0 && (
          <>
            <StartButton clickForwards={nextSlide} />
          </>
        )}
        {currentSlide === 1 && (
          <Slide title="Første Spørgsmål">
            <Q1 />
          </Slide>
        )}
        {currentSlide === 2 && (
          <Slide title="Andet Spørgsmål">
            <Q2 />
          </Slide>
        )}
        {currentSlide === 3 && (
          <Slide title="Tredje Spørgsmål">
            <Q3 />
          </Slide>
        )}
        {currentSlide === 4 && (
          <Slide title="Fjerde Spørgsmål">
            <Q4 />
          </Slide>
        )}
        {currentSlide === 5 && (
          <div>
            <Qend />
            <GiftButton />
          </div>
        )}
        {currentSlide !== 0 && (
          <div clas>
            <Steps currentStep={currentSlide} />
            <ModalButtons clickBackwards={prevSlide} clickForwards={nextSlide} />
          </div>
        )}
      </div>
    </dialog>
  );
}
