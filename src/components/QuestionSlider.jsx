import React, { useState } from "react";

export default function QuestionSlider(props) {
  const [value, setValue] = useState(400);

  const handleChange = (event) => {
    setValue(event.target.value);
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
          value={value}
          onChange={handleChange}
          className="range  range-lg range-primary"
        />
      </div>
      <div className="flex w-fit items-baseline justify-end gap-2 ">
        <div>
          <p className="text-base-content text-2xl text-right ">
            {props.svar === "2000" ? "2000+" : `${value}`}
          </p>
        </div>
        <p>DKK</p>
      </div>
    </div>
  );
}
