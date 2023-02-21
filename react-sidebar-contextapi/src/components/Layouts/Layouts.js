import React from 'react';
import './styles';
import { SLayout, SMain } from './styles';
import { Sidebar } from '../Sidebar/Sidebar';


export const Layouts = ({children}) => {
  return (
    <SLayout>
        <Sidebar/>
        <SMain>{children}</SMain>
    </SLayout>
  )
}
