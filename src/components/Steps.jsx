// This is a functional component that takes in the total number of steps and the current step
// It returns a list of steps with the current and previous steps highlighted
export default function Steps({ numSteps, currentStep }) {
  return (
    <ul className="steps text-xs w-full mb-2">
      {
        // Create an array with the length of numSteps and map each element to a list item
        Array.from({ length: numSteps }, (_, i) => (
          <li
            key={i}
            className={`step step-neutral ${
              currentStep >= i + 1 ? "step-primary" : "step-neutral"
            }`}
          ></li>
        ))
      }
      <style jsx>{`
        .steps .step:before {
          height: 0.25rem;
        }
        .steps .step:after {
          height: 1.5rem;
          width: 1.5rem;
        }
      `}</style>
    </ul>
  );
}
