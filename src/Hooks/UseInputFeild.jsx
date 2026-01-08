import React, { useState } from 'react';

const UseInputFeild = () => {
  const [feildValue,setFeildValue] = useState('');

  const handleChangeOnValue = e =>{
    setFeildValue(e.target.value);
  }
  return [feildValue,handleChangeOnValue];
};

export default UseInputFeild;