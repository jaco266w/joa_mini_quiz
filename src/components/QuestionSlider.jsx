import React from "react";

export default function QuestionSlider(props) {
  const handleChange = (event) => {
    props.onChange(event);
  };

  return (
    <div className="flex flex-col gap-10 h-full justify-center items-center z-50">
      <h3 className="font-medium font-serif text-center text-3xl">
        {props.question.question}
      </h3>
      <div className=" w-3/4 mx-auto">
        <input
          type="range"
          min={0}
          max="2000"
          value={props.svar}
          onChange={handleChange}
          className="range  range-lg range-primary"
        />
      </div>
      <p>
        <span className="text-primary  text-2xl">
          {props.svar === "2000" ? "2000+ DKK" : `${props.svar} DKK`}
        </span>
      </p>
    </div>
  );
}
