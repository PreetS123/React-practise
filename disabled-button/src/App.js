import { useState } from "react";
import "./App.css";

function App() {

  // writting code for handle four button with different useState///////
  let [btn1, setBtn1] = useState(false);
  let [btn2, setBtn2] = useState(false);
  let [btn3, setBtn3] = useState(false);
  let [btn4, setBtn4] = useState(false);
  let [reset, setReset] = useState(false);
  let [val, setVal] = useState('');

    const handleClick=(value)=>{
      if(value==='btn1'){
        setBtn2(true);
        setBtn3(true)
        setBtn4(true)
        setReset(true)
        setVal(value);
      }
      else if(value==='btn2'){
        setBtn1(true);
        setBtn3(true)
        setBtn4(true)
        setReset(true)
        setVal(value);
      }
      else if(value==='btn3'){
        setBtn1(true);
        setBtn2(true)
        setBtn4(true)
        setReset(true)
        setVal(value);
      }
      else if(value==='btn4'){
        setBtn1(true);
        setBtn2(true)
        setBtn3(true)
        setReset(true)
        setVal(value);
      }
      else{
        setBtn1(false);
        setBtn2(false);
        setBtn4(false);
        setBtn3(false);
        setReset(false);
        setVal('');
      }
    }



  return (
    <div className="App">
    
    <h1>{val}</h1>

    {/* /////////////////////////// toggling of four button with different useState ////////////////////// */}
      <button disabled={btn1}  onClick={()=>handleClick('btn1')}>
        Button 1
      </button>
     
      <button disabled={btn2} onClick={()=>handleClick('btn2')}>
        Button 2
      </button>
      
      <button disabled={btn3}  onClick={()=>handleClick('btn3')}>
        Button 3
      </button>
      
      <button disabled={btn4} onClick={()=>handleClick('btn4')}>
        Button 4
      </button>
      
     {reset?
      <button  onClick={()=>handleClick('reset')}>
        Reset
      </button>:null
     }
    </div>
  );
}

export default App;
