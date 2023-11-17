import React, { useState } from "react";

export default function Q4() {
  const [value, setValue] = useState(25);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-2 z-50">
      <input
        type="range"
        min={0}
        max="100"
        value={value}
        onChange={handleChange}
        className="range"
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
  );
}
