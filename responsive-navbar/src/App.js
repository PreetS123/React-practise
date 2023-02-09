import './App.css';
import { SideBar } from './Components/SideBar';
import {Routes,Route} from 'react-router-dom';
import { Dashboard } from './Pages/Dashboard';
import { Product } from './Pages/Product';
import { ProductDescription } from './Pages/ProductDescription';
import { Cart } from './Pages/Cart';
import { Comments } from './Pages/Comments';
import { Faq } from './Pages/Faq';
import { About } from './Pages/About';
import { Analytics } from './Pages/Analytics';
import { Shipping } from './Pages/Shipping';


function App() {
  return (
    <div className="App">
      <SideBar>
      <Routes>
           <Route path='/' element={<Dashboard/>}    />
           <Route path='/product' element={<Product/>}    />
           <Route path='/desc' element={<ProductDescription/>}    />
           <Route path='/cart' element={<Cart/>}    />
           <Route path='/comment' element={<Comments/>}    />
           <Route path='/faq' element={<Faq/>}    />
           <Route path='/about' element={<About/>}    />
           <Route path='/analytics' element={<Analytics/>}    />
           <Route path='/shipping' element={<Shipping/>}    />
           {/* <Route path='/' element={}    /> */}
           {/* <Route path='/' element={}    /> */}
           {/* <Route path='/' element={}    /> */}
           {/* <Route path='/' element={}    /> */}
           {/* <Route path='/' element={}    /> */}
        </Routes>
        </SideBar>
    </div>
  );
}

export default App;
