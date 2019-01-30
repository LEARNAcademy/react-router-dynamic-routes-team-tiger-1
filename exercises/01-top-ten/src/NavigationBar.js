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
         <Navbar  color="light" expand="lg" light>
           <NavbarBrand  href="/">Team Tigers Restaurants</NavbarBrand>
             <Nav navbar>
             <NavItem>
               <NavLink href="/">Home</NavLink>
             </NavItem>
               <NavItem>
                 <NavLink href="/restaurants/">Restaurants</NavLink>
               </NavItem>
             </Nav>
         </Navbar>
    )
  }
}

export default NavigationLinks
