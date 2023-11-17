export default function Q1() {
  return (
    <div className="flex flex-col justify-center pb-10">
      <div className="grid place-content-center">
        <ul>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Julegave</span>
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Fødselsdag</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Årsdag</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Bare fordi</span>
              </label>
            </div>
          </li>
          <li>
            {" "}
            <div className="form-control">
              <label className="label justify-start cursor-pointer">
                <input type="radio" name="radio-10" className="radio checked:bg-primary" />
                <span className="label-text pl-4">Undskyld gave</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
