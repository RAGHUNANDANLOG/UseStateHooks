//Project par jab state change karna ho ya dynamic content chahiye to hook use
//useState ek special fiunction hai
// import React, {useState} from 'react'
// import './App.css'

// const App = () => {
//   const [MyName,setMyName] = useState('thapa technical');
//   const changeName = () => {
//     let val = MyName;
//     // if(val === 'thapa technical'){
//     //   setMyName('vinod thapa');
//     // }else{
//     //   setMyName('thapa technical');
//     // }
//     (val === 'thapa technical')?
//       setMyName('vinod thapa'):setMyName('thapa technical');

//   }
//   return (
//     <div>
//         <h1>{MyName}</h1>
//         <button className='btn' onClick={changeName}>Click Me</button>
//     </div>
//   )
// }

// export default App
//=========================================================
// import React from 'react';
// import  './App.css'

// //import ShortCirEval from './components/ShortCirEval';
// //import UseStateArray from './components/UseStateArray';
// //import UseStateObject from './components/UseStateObject';
// //import HookRules from './components/HookRules';
// //import BasicForm from './components/forms/BasicForm';
// import UseEffects1 from './components/useEffect/UseEffects1';
// //import UseEffects2 from './components/useEffect/UseEffects2';
// //import Uncontrolled from './components/forms/Uncontrolled';
// //import UseReducer from './components/useReducer/UseReducer';
// //import ComA from './components/useContext/ComA';
// import Test from './components/useEffect/test';

// function App(){
//   return(
//     <div>
//       {/* <HookRules/> */}
//       {/* <UseStateArray/> */}
//       {/* {<UseStateObject/>} */}
//       {/* <ShortCirEval/> */}
//       {/* <BasicForm/> */}
//       <UseEffects1/>
//       {/* <UseEffects2/> */}
//       {/* <Uncontrolled/> */}
//       {/* <UseReducer/> */}
//       {/* <ComA/> */}
//       <Test/>
//     </div>
//   );
// }
// export default App;
//============================================================
import React from "react";
import './App.css';
import UseStateObject from "./components/UseStateObject";

function App(){
  return(
    <div>
      <UseStateObject/>
    </div>
  );
}
export default App;