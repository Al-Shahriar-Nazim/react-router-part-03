import React, { useRef } from "react";

const UncontrolledForm = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("sb");
    // console.log(emailRef.current.value)
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email,password)
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="email" ref={emailRef} />
        <br />
        <input type="password" placeholder="password" ref={passwordRef} />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UncontrolledForm;
