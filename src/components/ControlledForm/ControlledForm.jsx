import React, { useState } from "react";

const ControlledForm = () => {
  const [password, setPassword] = useState("");
  const [error,setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
if(password.length<6){
  setError('6 characters required');
}
else{
  setError('');
  alert('form submitted successfully');
}

  };
  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
    // if(password.length<6){
    //   setError('password must be at least 6 characters');
    // }
    // else{
    //   setError('');
    // }
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
          defaultValue={password}
          onChange={handlePasswordChange}
          placeholder="password"
          required
        />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
        <p style={{color:"red"}}>
          <small>{error}</small>
        </p>
      </form>
    </div>
  );
};

export default ControlledForm;
