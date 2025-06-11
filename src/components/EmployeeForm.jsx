import StateList from "./StateList";
import DeptList from "./DeptList";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../features/employeesSlice";

export default function EmployeeForm() {
  const [formContent, setFormContent] = useState({});
  const dispatch = useDispatch();

  function inputLogger({ target }) {
    const { id, value } = target;
    setFormContent({ ...formContent, [id]: value });
  }

  function submitForm(event) {
    event.preventDefault();
    dispatch(addEmployee(formContent));
  }

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col gap-4" onSubmit={submitForm} method="post">
        <label htmlFor="firstName" className="floating-label">
          <span>First Name</span>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="input input-md"
            onChange={inputLogger}
          />
        </label>

        <label htmlFor="lastName" className="floating-label">
          <span>Last Name</span>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="input input-md"
            onChange={inputLogger}
          />
        </label>

        <label htmlFor="dateofbirth" className="floating-label">
          <span>Date of Birth</span>
          <input
            type="date"
            id="dateofbirth"
            placeholder="Date of Birth"
            className="input input-md"
            onChange={inputLogger}
          />
        </label>

        <label htmlFor="startDate" className="floating-label">
          <span>Start Date</span>
          <input
            type="date"
            id="startDate"
            placeholder="Start Date"
            className="input input-md"
            onChange={inputLogger}
          />
        </label>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 gap-4">
          <legend className="fieldset-legend">Address</legend>

          <label htmlFor="street" className="floating-label">
            <span>Street</span>
            <input
              type="text"
              id="street"
              placeholder="Street"
              className="input input-md"
              onChange={inputLogger}
            />
          </label>

          <label htmlFor="city" className="floating-label">
            <span>City</span>
            <input
              type="text"
              id="city"
              placeholder="City"
              className="input input-md"
              onChange={inputLogger}
            />
          </label>

          <label htmlFor="state">State</label>
          <select
            defaultValue="Choose a State"
            name="state"
            id="state"
            className="select"
            onChange={inputLogger}
          >
            <StateList />
          </select>

          <label htmlFor="zipcode" className="floating-label">
            <span>Zip Code</span>
            <input
              type="number"
              id="zipcode"
              placeholder="Zip Code"
              className="input input-md"
              pattern="[0-9]{5}"
              autoComplete="postal-code"
              onChange={inputLogger}
            />
          </label>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 gap-4">
          <legend className="fieldset-legend">Department</legend>
          <label htmlFor="department" hidden>
            Department
          </label>
          <select
            defaultValue="Choose a Department"
            name="department"
            id="department"
            className="select"
            onChange={inputLogger}
          >
            <DeptList />
          </select>
        </fieldset>
        <input type="submit" value="Save" className="btn btn-neutral mt-4" />
      </form>
    </div>
  );
}
