export default function Q1() {
  return (
    <div className="flex flex-col justify-center pb-10">
      <div className="grid place-content-center">
        <ul>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Make up</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Hårpleje</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Dufte</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Negle</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Body care</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
