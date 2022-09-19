// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Main } from './Main';
import userInfo from './data/nav.json'

function App() {
  return (
    <div>
     <Navbar {...userInfo.location}/>
     <Main/>
    </div>
  );
}

export default App;
