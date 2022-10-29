import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Product } from './Pages/Product';
import { CartComponent } from './Components/CartComponent';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';


function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/cart' element={<CartComponent/>}  />
          <Route  path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>} />
          {/* <Route  /> */}
          {/* <Route  /> */}
        </Routes>
    </div>
  );
}

export default App;
