import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { AdminForm } from './Admin/Components/AdminForm';
import { EditAdmin } from './Admin/Components/EditAdmin';
import { AdminLogin } from './Admin/Pages/AdminLogin';
import { AdminPage } from './Admin/Pages/AdminPage';
import { MAin } from './MAin';


export const AllRoutes = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<MAin/>} />
       <Route path='/adminform' element={<AdminForm/>} />
      <Route path='/adminpage' element={<AdminPage/>} />
        <Route path='/adminlogin' element={<AdminLogin/>} />
          <Route path='/edit/:id' element={<EditAdmin/>} />
        {/* <Route path='/user' element /> */}
       
       
        {/* <Route path='/' element /> */}
      </Routes>
    </>
  )
}
