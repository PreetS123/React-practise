
import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { AddUser } from './Pages/AddUser';
import {EditUser} from './Pages/EditUser';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addUser' element={<AddUser/>} />
      <Route path='/editUser/:id' element={<EditUser/>} />

    </Routes>
    </div>
  );
}

export default App;


//   http://localhost:8080/user
