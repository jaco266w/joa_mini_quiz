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

// Main Modal component
export default function Modal() {
  // State for current slide and answers
  const [currentSlide, setCurrentSlide] = useState(0);
  const [svar, setSvar] = useState([]);
  console.log(svar);

  // Load questions from JSON file
  const questions = require("../utils/questions.json");
  // Separate the last question for the slider
  const sliderQuestion = questions.slice(-1)[0];
  // All other questions
  const otherQuestions = questions.slice(0, -1);

  // Function to go to the next slide
  const nextSlide = () => {
    if (currentSlide < 6) {
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
      <div className="modal-box h-screen md:h-4/6 max-w-2xl overflow-hidden flex flex-col justify-between rounded-2xl">
        <form className="" method="dialog">
          <button className="btn md:btn-sm btn-circle btn-ghost absolute right-2 top-2 text-xl">
            ✕
          </button>
        </form>
        {currentSlide === 0 && <Qstart />}
        {currentSlide === 0 && <StartButton clickForwards={nextSlide} />}
        {otherQuestions
          // Filter out the first two questions and the questions that don't match the previous answers
          .filter(
            (question, index) => index < 2 || question.category === svar[1],
          )
          // Map over the remaining questions and render them
          .map(
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
        {currentSlide === 5 && (
          <QuestionSlider
            question={sliderQuestion}
            onChange={handleChange(4)}
            svar={svar[4]}
          />
        )}
        {currentSlide === 6 && (
          <div>
            <Qend />
            <GiftButton />
          </div>
        )}
        {currentSlide >= 1 && currentSlide <= 5 && (
          <div>
            <Steps currentStep={currentSlide} />
            <ModalButtons
              clickBackwards={prevSlide}
              clickForwards={nextSlide}
              isOptionSelected={svar[currentSlide - 1] !== undefined}
            />
          </div>
        )}
      </div>
    </dialog>
  );
}
