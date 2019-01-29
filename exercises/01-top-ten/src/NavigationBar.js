import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import Home from "./pages/Home.js"
import Restaurants from "./pages/Restaurants.js"
import Restaurant from "./pages/Restaurant.js"

class NavigationLinks extends Component {

  render() {
    return (
      <div>
         <Navbar color="light" light expand="md">
           <NavbarBrand href="/">Team Tigers Restaurants</NavbarBrand>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/restaurants/">Restaurants</NavLink>
               </NavItem>

             </Nav>

         </Navbar>
       </div>
    )
  }
}

export default NavigationLinks
