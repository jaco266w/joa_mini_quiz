import { useState } from "react";

import ModalButtons from "./ModalButtons";
import StartButton from "./StartButton";
import GiftButton from "./GiftButton";
import Steps from "./Steps";
import Qstart from "./Qstart";
import Qend from "./Qend";
import Image from "next/image";
import QuestionSelect from "./QuestionSelect";
import QuestionSlider from "./QuestionSlider";

export default function Modal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const [svar, setSvar] = useState([]);
  console.log(svar);

  const questions = require("../utils/questions.json");

  function nextSlide() {
    if (currentSlide === 6) {
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
      <div className="modal-box h-screen md:h-4/6 max-w-2xl overflow-hidden flex flex-col justify-between rounded-2xl">
        <form className="" method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn md:btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
            ✕
          </button>
        </form>
        {currentSlide === 0 && <Qstart />}
        {currentSlide === 0 && <StartButton clickForwards={nextSlide} />}
        {currentSlide === 1 && (
          <QuestionSelect
            onChange={(e) => {
              let newSvar = [...svar];
              newSvar[0] = e.target.value;
              setSvar(newSvar);
            }}
            svar={svar[0]}
            question={questions[0]}
          />
        )}
        {currentSlide === 2 && (
          <QuestionSelect
            question={questions[1]}
            onChange={(e) => {
              let newSvar = [...svar];
              newSvar[1] = e.target.value;
              setSvar(newSvar);
            }}
            svar={svar[1]}
          />
        )}
        {currentSlide === 3 && (
          <QuestionSelect
            question={questions[2].subQuestions
              .find((subQuestion) => subQuestion.category === svar[1])
              .questions.find((question) => question.subNumber === 1)}
            onChange={(e) => {
              let newSvar = [...svar];
              newSvar[2] = e.target.value;
              setSvar(newSvar);
            }}
            svar={svar[2]}
          />
        )}
        {currentSlide === 4 && (
          <QuestionSelect
            question={questions[2].subQuestions
              .find((subQuestion) => subQuestion.category === svar[1])
              .questions.find((question) => question.subNumber === 2)}
            onChange={(e) => {
              let newSvar = [...svar];
              newSvar[3] = e.target.value;
              setSvar(newSvar);
            }}
            svar={svar[3]}
          />
        )}
        {currentSlide === 5 && (
          <QuestionSlider
            question={questions[3]}
            onChange={(e) => {
              let newSvar = [...svar];
              newSvar[4] = e.target.value;
              setSvar(newSvar);
            }}
            svar={svar[4]}
          />
        )}
        {currentSlide === 6 && (
          <div>
            <Qend />
            <GiftButton />
          </div>
        )}
        {currentSlide >= 1 && currentSlide <= 5 ? (
          <div>
            <Steps currentStep={currentSlide} />
            <ModalButtons
              clickBackwards={prevSlide}
              clickForwards={nextSlide}
              isOptionSelected={svar[currentSlide - 1] !== undefined}
            />
          </div>
        ) : null}
      </div>
    </dialog>
  );
}
