export default function Steps(props) {
  return (
    <ul className="steps text-xs w-full mb-2">
      <li
        className={`step step-neutral ${
          props.currentStep >= 1 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 2 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 3 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 4 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 5 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 6 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 7 ? "step step-primary" : ""
        }`}
      ></li>
      <li
        className={`step step-neutral ${
          props.currentStep >= 8 ? "step step-primary" : ""
        }`}
      ></li>
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
