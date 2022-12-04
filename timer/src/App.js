import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hrs,setHrs]= useState(0);
  const [min,setMin]= useState(0);
  const [sec,setSec]= useState(0);
  const [mili,setMili]= useState(0);
  const [stop,setStop]= useState(false);

  const onStop=()=>{
    setStop(false);
    setHrs(0);
    setMin(0);
    setSec(0);
    setMili(0);
  }
  const onPause=()=>{
    setStop(false);
  }
  const onStart=()=>{
    setStop(true);
  }

  useEffect(()=>{
     let interval=null;
     interval= setInterval(()=>{
      if(stop){
        if(min>59){
          setHrs(hrs+1);
          setMin(0)
        }
        if(sec>59){
          setMin(min+1);
          setSec(0)
        }
        if(mili>99){
          setSec(sec+1);
          setMili(0);
        }
          if(mili<=99){
            setMili(mili+1)
          }else{
            clearInterval(interval)
          }
        }
     },0.001)
     return ()=>{
      clearInterval(interval)
     }
  })

  return (
    <div className="App">
          
          <h1>{hrs} : {min} : {sec} : {mili}</h1>
          <button onClick={onStart}>Start</button>
          <button onClick={onPause}>Pause</button>
          <button onClick={onStop}>Stop</button>
          
    </div>
  );
}

export default App;
