import React from "react";
import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaShopify,
  FaModx,
  FaShippingFast,
  FaQuestionCircle,
  FaBars,
} from "react-icons/fa";
import {NavLink} from 'react-router-dom'

export const SideBar = ({children}) => {
  const menuitem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comments",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShopify />,
    },
    {
      path: "/desc",
      name: "Product Description",
      icon: <FaModx />,
    },
    {
      path: "/cart",
      name: "Cart",
      icon: <FaShoppingBag />,
    },
    {
      path: "/faq",
      name: "Faq",
      icon: <FaQuestionCircle/>,
    },
    {
      path: "/shipping",
      name: "Shipping",
      icon: <FaShippingFast/>,
    },
  ];
  return (<>
       <div className='container'>
        <div className='sidebar'>
            <div className='top_section'>
                <h1 className='logo'>Logo</h1>
                <div className='bars'>
                    <FaBars/>
                </div>
            </div>
            {
                menuitem?.map((item,index)=>(
                   <NavLink to={item.path} key={index} className='link'
                   activeclassName='active'
                   >
                    <div className='icon'>{item.icon}</div>
                    <div className='link-text'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
       </div>
  </>);
};
