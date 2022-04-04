import React from 'react';
import './index.scss';
import SideNavbar from '../SideNavbar/index';
import { Outlet } from 'react-router-dom';



export default function Layout(){
    return(
    <div className="App">
     <SideNavbar /> 
        <div className="page">
            <Outlet />
        </div>
    </div>)
}