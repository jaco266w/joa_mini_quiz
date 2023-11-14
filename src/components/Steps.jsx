export default function Steps(props) {
	return (
		<ul className="steps">
			<li className={`step ${props.currentStep >= 0 ? "step-primary" : ""}`}>
				Fly to moon
			</li>
			<li className={`step ${props.currentStep >= 1 ? "step-primary" : ""}`}>
				Shrink the moon
			</li>
			<li className={`step ${props.currentStep === 2 ? "step-primary" : ""}`}>
				Grab the moon
			</li>
		</ul>
	);
}
