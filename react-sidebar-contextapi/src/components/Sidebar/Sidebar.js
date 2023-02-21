import React, { useContext, useState } from 'react';
import './styles';
import { SDivider, SLink, SLinkContainer, SLinkIcon, SLinkLabel, SLinkNotification, SLogo, SSearch, SSearchIcon, SSidebar, SSidebarButton, STheme, SThemeLabel, SThemeToggler, SToggleThumb } from './styles';
import {AiOutlineSearch,AiOutlineHome,AiOutlineApartment,AiOutlineSetting, AiOutlineLeft} from 'react-icons/ai';
import {MdOutlineAnalytics,MdLogout} from 'react-icons/md';
import {BsPeople} from 'react-icons/bs';
import {FaDiagnoses} from 'react-icons/fa';
import { ThemeContext } from '../../App';

export const Sidebar = () => {
    const {setTheme,theme}=useContext(ThemeContext);
    const [sidebarOpen,setSidebarOpen]= useState(false);
  return (
    <SSidebar>
        <>
        <SSidebarButton isOpen={sidebarOpen} onClick={()=>setSidebarOpen(p=>!p)}>
            <AiOutlineLeft/>
        </SSidebarButton>
        </>
        <SLogo>
            <img src='https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297__340.png' alt='logo'/>
        </SLogo>
        <SSearch style={!sidebarOpen?{width:`fit-content`}:{}}>
            <SSearchIcon>
                <AiOutlineSearch/>
            </SSearchIcon>
            <input placeholder='Search'  style={!sidebarOpen?{width:0,padding:0}:{}}/>
        </SSearch>
        <SDivider/>
           
           {linkArray.map(({icon,label,notification,to})=>(
                <SLinkContainer>
                <SLink to={to} style={!sidebarOpen?{width:'fit-content'}:{}}>
                    <SLinkIcon>{icon}</SLinkIcon>
                    <SLinkLabel>{label}</SLinkLabel>
                    {!!notification&&<SLinkNotification>{notification}</SLinkNotification>}
                </SLink>
               </SLinkContainer>
           ))}
           <SDivider/>
          {secondaryLinksArray.map(({icon,label})=>(
             <SLinkContainer>
                <SLink to='/'>
                    <SLinkIcon>{icon}</SLinkIcon>
                    <SLinkLabel>{label}</SLinkLabel>
                </SLink>
             </SLinkContainer>
          ))}
          <SDivider/>
          <STheme>
            <SThemeLabel>Dark Mode </SThemeLabel>
                <SThemeToggler
                isActive={theme==='dark'}
                 onClick={()=>setTheme(p=>p==='light'?'dark':'light')}>
                    <SToggleThumb style={theme==='dark'?{right:'1px'}:{}} />
                </SThemeToggler>
           
          </STheme>
        </SSidebar>
  )
}


const linkArray=[
    {
        label:'Home',
        icon:<AiOutlineHome/>,
        to:'/',
        notification:0,
    },
    {
        label:'Statistics',
        icon:<MdOutlineAnalytics/>,
        to:'/sta',
        notification:1,
    },
    {
        label:'Diagnosis',
        icon:<FaDiagnoses/>,
        to:'/diag',
        notification:0,
    },
    {
        label:'Diagram',
        icon:<AiOutlineApartment/>,
        to:'/dia',
        notification:2,
    },
    {
        label:'Customer',
        icon:<BsPeople/>,
        to:'/cust',
        notification:5,
    }
];

const secondaryLinksArray = [
    {
        label: "Settings",
        icon: <AiOutlineSetting />,
    },
    {
        label: "Logout",
        icon: <MdLogout />,
    },
];