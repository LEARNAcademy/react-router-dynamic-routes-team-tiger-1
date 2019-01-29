import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import './App.css'
import NavigationLinks from "./NavigationBar"
import Home from "./pages/Home.js"
import Restaurants from "./pages/Restaurants.js"
import Restaurant from "./pages/Restaurant.js"



class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <NavigationLinks/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/restaurant/:id" exact component={Restaurant}/>
        <Route path="/restaurants" exact component={Restaurants}/>
      </Switch>
      </div>
      </Router>
    )
  }
}

export default App
