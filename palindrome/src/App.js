import './App.css';


function App() {

  let max=100000;
  let arr=[];
  for(let i=100; i<max; i++){
    let num= i.toString();
    let s=0,e=num.length-1;
    let flag=false;
    while(s<=e){
      if(num[s]===num[e]){
        s++;
        e--;
        flag=true;
      }else{
        flag=false;
        break;
      }
    }
    if(flag===true){
      arr.push(num);
    }
  }

  return (
    <div className="App">
          <div>
            <h4>Palindromic Number from 100 to 100000</h4>
          </div>
          <div className='palindrome'>
            {
              arr.map(item=>{
                return <h6 key={item}>{item}</h6>
              })
            }
          </div>
    </div>
  );
}

export default App;
