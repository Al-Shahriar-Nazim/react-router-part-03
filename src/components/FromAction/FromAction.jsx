import React from "react";

const FromAction = () => {
  const handleFromData = (fromData) => {
    console.log(fromData.get('name'));
    console.log(fromData.get('email'));
  };
  return (
    <div>
      <form action={handleFromData}>
        <input type="text" name="name" placeholder="Enter your name" />
        <br />
        <input type="text" name="email" placeholder="Enter your email" />
        <br />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FromAction;
