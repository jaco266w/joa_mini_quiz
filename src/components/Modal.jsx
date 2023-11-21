import { useState } from "react";
import ModalButtons from "./ModalButtons";
import GiftButton from "./GiftButton";
import Steps from "./Steps";
import Qstart from "./Qstart";
import Qend from "./Qend";
import Image from "next/image";
import QuestionSelect from "./QuestionSelect";
import QuestionSlider from "./QuestionSlider";

// Main Modal component
export default function Modal() {
  // State for current slide and answers
  const [currentSlide, setCurrentSlide] = useState(0);
  const [svar, setSvar] = useState([]);
  console.log(svar);

  // Load questions from JSON file
  const questions = require("../utils/questions2.json");
  const numQuestions = questions.length;
  // Separate the last question for the slider
  const sliderQuestion = questions.slice(-1)[0];
  // All other questions
  const otherQuestions = questions.slice(0, -1);

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentSlide < 9) {
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

        {currentSlide === 0 && <Qstart clickForwards={nextSlide} />}

        {otherQuestions.map(
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
            />
            <Steps currentStep={currentSlide} numSteps={numQuestions} />
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
