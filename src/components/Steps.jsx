export default function Steps(props) {
  return (
    <ul className="steps grid place-content-center">
      <li className={`step ${props.currentStep >= 0 ? "step step-primary" : ""}`}>Fly to moon</li>
      <li className={`step ${props.currentStep >= 1 ? "step step-primary" : ""}`}>Shrink the moon</li>
      <li className={`step ${props.currentStep >= 2 ? "step step-primary" : ""}`}>Grab the moon</li>
      <li className={`step ${props.currentStep >= 3 ? "step step-primary" : ""}`}>Grab the moon</li>
    </ul>
  );
}
