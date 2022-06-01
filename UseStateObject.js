import React, { useState } from 'react'

const UseStateObject = () => {
  const [myObject,setMyObject] = useState({
    myName:"vinod thapa",  myAge:27, degree:"MCS"
  });
  const changeObject = () => { 
    setMyObject({...myObject,myAge:34});
  }
  return (
    <div>
      <h1>Name:{myObject.myName} & Age:{myObject.myAge} & Degree:{myObject.degree}</h1>
      <button className='btn' onClick={changeObject}>changeUpdate</button>
    </div>
  )
}

export default UseStateObject;

