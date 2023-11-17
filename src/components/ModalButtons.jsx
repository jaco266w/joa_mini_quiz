export default function ModalButtons(props) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button onClick={props.clickBackwards} className="btn btn-neutral">
        Tilbage
      </button>
      <button
        onClick={props.clickForwards}
        className="btn btn-primary"
        disabled={!props.isOptionSelected}
      >
        Næste
      </button>
    </div>
  );
}
