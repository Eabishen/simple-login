import React, { useState } from "react";

function Spp() {
  const [nameholder, nameFunction] = useState({
    fName: "",
    lName: "",
    Email: ""
  });

  function changeHandler(event) {
    const { name, value } = event.target;

    nameFunction((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {nameholder.fName} {nameholder.lName}
      </h1>
      <p>{nameholder.Email}</p>
      <form>
        <input
          name="fName"
          value={nameholder.fName}
          onChange={changeHandler}
          placeholder="First Name"
        />
        <input
          name="lName"
          value={nameholder.lName}
          onChange={changeHandler}
          placeholder="Last Name"
        />
        <input
          name="Email"
          value={nameholder.Email}
          onChange={changeHandler}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Spp;
