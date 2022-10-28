import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Product } from './Pages/Product';
import { CartComponent } from './Components/CartComponent';
// import { MIniNav } from './Components/MIniNav';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path='/' element={<Product/>} />
          <Route path='/cart' element={<CartComponent/>}  />
          {/* <Route  /> */}
          {/* <Route  /> */}
        </Routes>
    </div>
  );
}

export default App;
