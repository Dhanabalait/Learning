import React, { useState } from "react";
import "./DemoFormOne.css";
export const DemoFormOne = () => {
  const [user, setUser] = useState({
    name: "Ram Kumar",
    age: 26,
    gender: "Male",
    isMarried: false,
    country: "India",
  });
  function changeHandler(e) {
    const inputName = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setUser({ ...user, [inputName]: value });
  }
  return (
    <div>
      <h2>Building a Dynamic React Form with useState</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="form-box mb-3">
            <input
              onChange={changeHandler}
              type="text"
              name="name"
              id="name"
              value={user.name}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="form-box mb-3">
            <input
              onChange={changeHandler}
              type="number"
              name="age"
              id="age"
              value={user.age}
              className="form-control"
              placeholder="Age"
            />
          </div>
          <div className="form-box mb-3">
            <div className="form-check">
              <input
                onChange={changeHandler}
                class="form-check-input"
                type="radio"
                name="gender"
                id="Male"
                value="Male"
                checked={user.gender == "Male"}
              />
              <label class="form-check-label" htmlFor="Male">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={changeHandler}
                class="form-check-input"
                type="radio"
                name="gender"
                id="Female"
                checked={user.gender == "Female"}
                value="Female"
              />
              <label class="form-check-label" htmlFor="Female">
                Female
              </label>
            </div>
          </div>
          <div className="form-box mb-3">
            <div class="form-check">
              <input
                onChange={changeHandler}
                name="isMarried"
                class="form-check-input"
                type="checkbox"
                id="isMarried"
                checked={user.isMarried}
              />
              <label class="form-check-label" htmlFor="isMarried">
                Material Status
              </label>
            </div>
          </div>
          <div className="form-box mb-3">
            <select name="country" onChange={changeHandler} class="form-select" value={user.country} placeholder="Country">
              <option value="India">India</option>
              <option value="US">US</option>
              <option value="UK">UK</option>
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>Name</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Age</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Marital Status</td>
                <td>{user.isMarried ? "Married" : "Single"}</td>
              </tr>
              <tr>
                <td>Country</td>
                <td>{user.country}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
