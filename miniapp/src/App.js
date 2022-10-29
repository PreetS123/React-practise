import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Product } from './Pages/Product';
import { CartComponent } from './Components/CartComponent';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
           <Route  path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
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
