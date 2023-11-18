export default function Steps({ numSteps, currentStep }) {
  return (
    <ul className="steps text-xs w-full mb-2">
      {Array.from({ length: numSteps }, (_, i) => (
        <li
          key={i}
          className={`step step-neutral ${
            currentStep >= i + 1 ? "step-primary" : "step-neutral"
          }`}
        ></li>
      ))}
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
