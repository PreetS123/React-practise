
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { AddUser } from './Pages/AddUser';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addUser' element={<AddUser/>} />
    </Routes>
    </div>
  );
}

export default App;


//   http://localhost:8080/user
