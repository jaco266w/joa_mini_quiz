import React from "react";

export default function QuestionSlider(props) {
  const handleChange = (event) => {
    props.onChange(event);
  };

  return (
    <div className="flex flex-col gap-10 h-full justify-center z-50">
      <h3 className="font-medium font-serif text-center text-3xl">
        {props.question.question}
      </h3>
      <div className=" w-3/4 mx-auto ">
        <input
          type="range"
          min={0}
          max="100"
          value={props.svar}
          onChange={handleChange}
          className="range range-primary"
          step="25"
        />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </div>
  );
}
