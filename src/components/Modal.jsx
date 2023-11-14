import Slide from "./Slide";
import ModalButtons from "./ModalButtons";
import Steps from "./Steps";

import { useState } from "react";

export default function Modal() {
	const [currentSlide, setCurrentSlide] = useState(0);

	function nextSlide() {
		if (currentSlide === 2) {
			return;
		}
		setCurrentSlide((old) => old + 1);
	}

	function prevSlide() {
		if (currentSlide === 0) {
			return;
		}
		setCurrentSlide((old) => old - 1);
	}
	return (
		<dialog id="my_modal_3" className="modal">
			<div className="modal-box bg-[url('/quiz_bg.png')]">
				<form method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				<Slide title="Første Slide">
					<ul>
						<li>årsdag</li>
						<li>valentines</li>
						<li>gave</li>
						<li>gaveide</li>
					</ul>
				</Slide>
				<Steps currentStep={currentSlide} />
				<ModalButtons
					clickBackwards={() => prevSlide()}
					clickForwards={() => nextSlide()}
				/>
			</div>
		</dialog>
	);
}
