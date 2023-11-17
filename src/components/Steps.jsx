export default function Steps(props) {
  return (
    <ul className="steps grid place-content-center ">
      <li
        className={`step ${props.currentStep >= 1 ? "step step-primary" : ""}`}
      ></li>
      <li
        className={`step ${props.currentStep >= 2 ? "step step-primary" : ""}`}
      ></li>
      <li
        className={`step ${props.currentStep >= 3 ? "step step-primary" : ""}`}
      ></li>
      <li
        className={`step ${props.currentStep >= 4 ? "step step-primary" : ""}`}
      ></li>
      <li
        className={`step ${props.currentStep >= 5 ? "step step-primary" : ""}`}
      ></li>
    </ul>
  );
}
