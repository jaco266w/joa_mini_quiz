import { useState } from "react";

useState;

export default function Q3(props) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col justify-center pb-10">
      <div className="grid place-content-center">
        <ul>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  value="Make up"
                  onChange={props.onChange}
                />
                <span className="label-text pl-4">Make up</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  value="Hudpleje"
                  onChange={props.onChange}
                />
                <span className="label-text pl-4">Hårpleje</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  value="Hårpleje"
                  onChange={props.onChange}
                />
                <span className="label-text pl-4">Dufte</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-primary"
                  value="Hårpleje"
                  onChange={props.onChange}
                />
                <span className="label-text pl-4">Negle</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input
                  type="radio"
                  name="radio-10"
                  value="Hårpleje"
                  className="radio checked:bg-primary"
                  onChange={props.onChange}
                />
                <span className="label-text pl-4">Body care</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
