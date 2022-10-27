import { useState } from "react";
import "./App.css";

function App() {

  // writting code for handle four button with different useState///////
  // let [btn1, setBtn1] = useState(false);
  // let [btn2, setBtn2] = useState(false);
  // let [btn3, setBtn3] = useState(false);
  // let [btn4, setBtn4] = useState(false);

  //   const handleBtn1=()=>{
  //     if(btn1===false){
  //          setBtn1(true)
  //     }
  //     else{
  //       setBtn1(false)
  //     }
  //   }
  //   const handleBtn2=()=>{
  //     if(btn2===false){
  //          setBtn2(true)
  //     }
  //     else{
  //       setBtn2(false)
  //     }
  //   }
  //   const handleBtn3=()=>{
  //     if(btn3===false){
  //          setBtn3(true)
  //     }
  //     else{
  //       setBtn3(false)
  //     }
  //   }
  //   const handleBtn4=()=>{
  //     if(btn4===false){
  //          setBtn4(true)
  //     }
  //     else{
  //       setBtn4(false)
  //     }
  //   }


  // working of four button with single useState

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
    {/* /////////////////////////// toggling of four button with different useState ////////////////////// */}
      {/* <button disabled={btn1}  onClick={handleBtn1}>
        Button 1
      </button>
     
      <button disabled={btn2} onClick={handleBtn2}>
        Button 2
      </button>
      
      <button disabled={btn3}  onClick={handleBtn3}>
        Button 3
      </button>
      
      <button disabled={btn4} onClick={handleBtn4}>
        Button 4
      </button> */}
      

           {/* <p>{btn}</p> */}

           {/* /////////////////////////toggling of four button with single useState is not working/////////////////// */}

    {btn?(<button  onClick={changeBtnVal}> Disable1</button>):(<button  onClick={changeBtnVal}>Enable1</button>)}  
      <button   onClick={changeBtnVal}> Button 2</button>
      <button   onClick={changeBtnVal}> Button 3</button>
      <button   onClick={changeBtnVal}> Button 4</button>
     
     {/* //////////////// Toggling of two button with single useState//////////////// */}
     {/* {
      btn?<button onClick={changeBtnVal}>Button1</button>:<button onClick={changeBtnVal}>Button2</button>
     } */}

    </div>
  );
}

export default App;
