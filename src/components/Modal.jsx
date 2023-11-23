"use client";

import { useState } from "react";
import Steps from "./Steps";
import Qstart from "./Qstart";
import Qend from "./Qend";
import QuestionSelect from "./QuestionSelect";
import QuestionSlider from "./QuestionSlider";

import ModalButtons from "./ModalButtons";

// Main Modal component
export default function Modal() {
  // State for current slide and answers
  const [currentSlide, setCurrentSlide] = useState(0);
  const [svar, setSvar] = useState([]);
  const [confetti, setConfetti] = useState(false);

  console.log(svar);

  // Load questions from JSON file
  const questions = require("../utils/questions3.json");
  const numQuestions = questions.length;
  // Separate the last question for the slider
  const sliderQuestion = questions.slice(-1)[0];
  // All other questions
  const otherQuestions = questions.slice(0, -1);

  const categoryQuestions = otherQuestions.slice(5, 9);

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentSlide < 9) {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 100);
      setCurrentSlide((old) => old + 1);
    }
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((old) => old - 1);
    }
  };

  // Function to handle change in answers
  const handleChange = (index) => (e) => {
    // Make a copy of the answers array
    let newSvar = [...svar];
    // Update the answer at the given index
    newSvar[index] = e.target.value;
    // Update the answers array
    setSvar(newSvar);
  };

  // Render the modal
  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box h-screen  max-w-2xl overflow-hidden flex flex-col justify-between rounded-2xl">
        <form className="" method="dialog">
          <button className="btn md:btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
            ✕
          </button>
        </form>

        {currentSlide === 0 && (
          <Qstart clickForwards={nextSlide} confetti={confetti} />
        )}

        {currentSlide > 0 &&
          currentSlide < 6 &&
          otherQuestions.map(
            (question, index) =>
              index === currentSlide - 1 && (
                <QuestionSelect
                  key={index}
                  question={question}
                  onChange={handleChange(index)}
                  svar={svar[index]}
                />
              ),
          )}

        {currentSlide >= 6 &&
          currentSlide < 9 &&
          categoryQuestions
            .filter((question) => question.category === svar[5])
            .map(
              (question, index) =>
                index === currentSlide - 6 && (
                  <QuestionSelect
                    key={index}
                    question={question}
                    onChange={handleChange(index + 5)}
                    svar={svar[index + 5]}
                  />
                ),
            )}

        {currentSlide === 8 && (
          <QuestionSlider
            question={sliderQuestion}
            onChange={handleChange(7)}
            svar={svar[7]}
          />
        )}

        {currentSlide === 9 && <Qend />}

        {currentSlide >= 1 && currentSlide <= 8 && (
          <div>
            <ModalButtons
              clickBackwards={prevSlide}
              clickForwards={nextSlide}
              isOptionSelected={svar[currentSlide - 1] !== undefined}
              confetti={confetti}
            />

            <Steps currentStep={currentSlide} numSteps={7} />
          </div>
        )}
      </div>
      <style jsx>{`
        @media (min-height: 800px) {
          .modal-box {
            height: 70vh;
          }
        }
      `}</style>
    </dialog>
  );
}
