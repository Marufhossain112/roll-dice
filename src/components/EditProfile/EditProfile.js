import React from "react";

const EditProfile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
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
              htmlFor="my-modal-6"
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
