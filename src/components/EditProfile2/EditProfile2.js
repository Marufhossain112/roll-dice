import React from "react";

const EditProfile = ({ setName2, setGender2 }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const gender = form.gender.value;
    setName2(name);
    setGender2(gender);
  };
  return (
    <>
      <input type="checkbox" id="RollDice2" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label htmlFor="name" className="font-bold mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered"
                  placeholder="User Name"
                  required
                />
              </div>
              <div className="form-control mt-3">
                <label htmlFor="Gender" className="font-bold mb-2">
                  Gender
                </label>
                <div className="flex">
                  {" "}
                  <input
                    type="radio"
                    name="gender"
                    className="radio radio-secondary"
                    id="male"
                    value="male"
                    checked
                  />
                  <label htmlFor="male" className="ml-2">
                    Male
                  </label>
                </div>
                <div className="flex mt-1">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="radio radio-secondary"
                  />
                  <label htmlFor="female" className="ml-2">
                    Female
                  </label>
                </div>
              </div>
              <input
                className="btn btn-outline mt-4"
                type="submit"
                value="Submit"
              />
            </form>
          </div>
          <div className="modal-action">
            <label
              htmlFor="RollDice2"
              className="btn btn-outline bg-red-500 text-white"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
