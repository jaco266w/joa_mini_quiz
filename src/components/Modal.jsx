import Slide from "./Slide";
import ModalButtons from "./ModalButtons";
import Steps from "./Steps";

import { useState } from "react";
import Q1 from "./Q1";

export default function Modal() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    if (currentSlide === 2) {
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
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-cover bg-no-repeat bg-center bg-[url('/quiz_bg.png')]  w-9/12 max-w-2xl  ">
        <form className="h-44" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <Slide title="Hvad er den særlige anledning?">
          <Q1 />
        </Slide>
        <Steps currentStep={currentSlide} />
        <ModalButtons clickBackwards={() => prevSlide()} clickForwards={() => nextSlide()} />
      </div>
    </dialog>
  );
}
