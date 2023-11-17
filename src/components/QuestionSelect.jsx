function QuestionSelect(props) {
  return (
    <div className="flex flex-col justify-center gap-10">
      <h3 className="font-bold font-serif text-center text-3xl">
        {props.question.question}
      </h3>
      <div className="grid place-content-center">
        <ul>
          {props.question.options.map((option, index) => (
            <li key={index}>
              <div className="form-control">
                <label className="label justify-start cursor-pointer">
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-primary"
                    value={option}
                    onChange={props.onChange}
                    checked={props.svar === option}
                  />
                  <span className="label-text pl-4">{option}</span>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuestionSelect;
