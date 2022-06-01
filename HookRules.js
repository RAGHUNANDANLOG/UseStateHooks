// 1.Always write it inside the component or function
// 2.Component name must be pascalCase(first letter should be uppercase)
// 3.We can directly import or we can directly write in using React.hook
// 4.Don't call hooks inside loops, conditions, or nested function

import React, { useState } from 'react'

const HookRules = () => {
    const [MyName,setMyName] = useState('thapa technical');
    const changeName = () =>{
        setMyName('chandan kumar');
    }
  return (
    <div>
      <h1 onClick={changeName}>{MyName}</h1>
    </div>
  )
}

export default HookRules
