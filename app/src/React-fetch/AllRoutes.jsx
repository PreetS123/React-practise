import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { All } from './Pages/All';
import { Css } from './Pages/Css';
import { Html } from './Pages/Html';
import { Javascript } from './Pages/Javascript';

export const AllRoutes = () => {
  return (
    <Routes>
       <Route  path='/' element={<All/>}  />
       <Route  path='/css' element={<Css/>}  />
       <Route  path='/html' element={<Html/>}  />
       <Route  path='/js' element={<Javascript/>}  />
    </Routes>
  )
}
