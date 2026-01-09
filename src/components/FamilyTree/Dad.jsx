import React from "react";
import Myself from "./Myself";
import Sister from "./Sister";
import Brother from "./Brother";

const Dad = ({assets}) => {
  return (
    <div>
      <h3>Dad</h3>
      <section style={{ display: "flex" }}>
        <Myself assets={assets}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
