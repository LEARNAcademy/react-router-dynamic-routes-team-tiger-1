import React, { Component } from 'react'
import restaurantsData from "../store/restaurantsData.js"

class Restaurant extends Component {
  constructor(props){
    super(props)
    //deconstructing props to match
    const { match } = props

    this.state={
      //State is set to the current product ID
      recipeId: match.params.id
    }
  }

  componentDidUpdate(prevProps){
    //assign previous props to a variable
    const prevMatch = prevProps.match


  }
  render() {
    console.log(this.props);
    return (
      <h1>res</h1>
    )
  }
}

export default Restaurant
