import Slide from "./Slide";

import ModalButtons from "./ModalButtons";
import StartButton from "./StartButton";
import Steps from "./Steps";

import { useState } from "react";
import Qstart from "./Qstart";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";

export default function Modal() {
	const [currentSlide, setCurrentSlide] = useState(0);

	function nextSlide() {
		if (currentSlide === 4) {
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
			<div className="modal-box bg-cover bg-no-repeat bg-center bg-[url('/quiz_bg.png')]  w-9/12 max-w-2xl  ">
				<form className="h-44" method="dialog">
					{/* if there is a button in form, it will close the modal */}
					<button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
						✕
					</button>
				</form>
				{currentSlide === 0 && (
					<div>
						<Qstart />
						<StartButton clickForwards={nextSlide} />
					</div>
				)}
				{currentSlide === 1 && (
					<Slide title="Første Spørgsmål">
						<Q1 />
					</Slide>
				)}
				{currentSlide === 2 && (
					<Slide title="Andet Spørgsmål">
						<Q2 />
					</Slide>
				)}
				{currentSlide === 3 && (
					<Slide title="Tredje Spørgsmål">
						<Q3 />
					</Slide>
				)}
				{currentSlide === 4 && (
					<Slide title="Fjerde Spørgsmål">
						<Q4 />
					</Slide>
				)}
				{currentSlide !== 0 && (
					<>
						<Steps currentStep={currentSlide} />
						<ModalButtons
							clickBackwards={prevSlide}
							clickForwards={nextSlide}
						/>
					</>
				)}
			</div>
		</dialog>
	);
}
