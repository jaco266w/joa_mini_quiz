export default function ModalButtons(props) {
  return (
    <div className="flex justify-center mt-10">
      <button onClick={props.clickForwards} className="btn btn-primary ">
        Start
      </button>
    </div>
  );
}
