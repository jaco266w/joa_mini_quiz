function QuestionSelect(props) {
  return (
    <div className="flex flex-col justify-center pb-10">
      <h3>{props.title}</h3>
      <div className="grid place-content-center">
        <ul></ul>
      </div>
    </div>
  );
}

export default QuestionSelect;
