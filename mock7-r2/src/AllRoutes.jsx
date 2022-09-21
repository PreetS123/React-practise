import React from 'react';
// import { Form } from 'react-router-dom';
import {Route,Routes, useParams} from 'react-router-dom'
import { CardDetails } from './Components/CardDetails';
import { Main } from './Main';

export const AllRoutes = () => {
 
  return (
    <div>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/name/:id' element={<CardDetails/>}/>
        </Routes>
    </div>
  )
}
