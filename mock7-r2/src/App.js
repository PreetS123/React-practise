
import { AllRoutes } from './AllRoutes';
import './App.css';
import { Navbar } from './Components/Navbar';
// import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      {/* <Main/> */}
    </div>
  );
}

export default App;
