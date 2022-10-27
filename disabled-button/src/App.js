import { useState } from "react";
import "./App.css";

function App() {
  // let [btn1, setBtn1] = useState(false);
  // let [btn2, setBtn2] = useState(false);
  // let [btn3, setBtn3] = useState(false);
  // let [btn4, setBtn4] = useState(false);

   const [btn, setBtn]= useState(false);

   const changeBtnVal=()=>{
     if(btn===false){
       setBtn(true);
      
     }
     else{
      setBtn(false)
     }
    //  console.log(btn)
   }
   console.log(btn);
  return (
    <div className="App">
    
      {/* <button disabled={btn1}  onClick={() => setBtn1(true)}>
        Button 1
      </button>
     
      <button disabled={btn2} onClick={() => setBtn2(true)}>
        Button 2
      </button>
      
      <button disabled={btn3}  onClick={() => setBtn3(true)}>
        Button 3
      </button>
      
      <button disabled={btn4} onClick={() => setBtn4(true)}>
        Button 4
      </button>
       */}
           <p>{btn}</p>
      {/* <button disabled={btn}  onClick={changeBtnVal}> Button 1</button>
      <button disabled={btn}  onClick={changeBtnVal}> Button 2</button>
      <button disabled={btn}  onClick={changeBtnVal}> Button 3</button>
      <button disabled={btn}  onClick={changeBtnVal}> Button 4</button> */}
     
     {
      btn?<button onClick={changeBtnVal}>Button1</button>:<button onClick={changeBtnVal}>Button2</button>
     }
    </div>
  );
}

export default App;
