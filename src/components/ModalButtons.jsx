export default function ModalButtons(props) {
	return (
		<div className="flex justify-end gap-4">
			<button onClick={props.clickBackwards} className="btn btn-neutral">
				Tilbage
			</button>
			<button onClick={props.clickForwards} className="btn btn-primary">
				Næste
			</button>
		</div>
	);
}