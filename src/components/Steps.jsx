export default function Steps(props) {
  return (
    <ul className="steps w-full mb-4">
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
      <style jsx>{`
        .steps .step:before {
          height: 0.25rem;
        }
      `}</style>
    </ul>
  );
}
