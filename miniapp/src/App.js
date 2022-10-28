import './App.css';
import {Route,Routes} from 'react-router-dom';
import { Product } from './Pages/Product';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Product/>} />
          {/* <Route  /> */}
          {/* <Route  /> */}
          {/* <Route  /> */}
        </Routes>
    </div>
  );
}

export default App;
