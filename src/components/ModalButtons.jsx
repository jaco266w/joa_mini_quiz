export default function ModalButtons(props) {
  return (
    <div className="flex justify-end gap-4 mt-4">
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
