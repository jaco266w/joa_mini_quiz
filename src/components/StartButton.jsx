export default function ModalButtons(props) {
  return (
    <div className="flex justify-center gap-4 mt-4">
      <button onClick={props.clickForwards} className="btn btn-primary">
        Start
      </button>
    </div>
  );
}
