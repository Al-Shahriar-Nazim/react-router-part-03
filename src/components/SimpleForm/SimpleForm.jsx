import React from "react";

const SimpleForm = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // console.log("Button clicked");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="name" name="name" />
        <br />
        <input type="text" placeholder="email" name="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
