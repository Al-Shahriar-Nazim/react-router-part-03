import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");


  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3>Controlled from </h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" required />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="password"
          required
        />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledForm;
