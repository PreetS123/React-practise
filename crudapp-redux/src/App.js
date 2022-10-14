
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route  path='/' element={<Home/>} />
      {/* <Route  path='/' /> */}
      {/* <Route  path='/' /> */}
      {/* <Route  path='/' /> */}
    </Routes>
    </div>
  );
}

export default App;
