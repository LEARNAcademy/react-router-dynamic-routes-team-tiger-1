import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'



class ResturantCard extends Component {
  render() {
    return (
      <div className="resturant-card">
      <Card body className="text-center">
        <CardTitle>{this.props.title}</CardTitle>
        <CardText>{this.props.location}</CardText>
        <Button href={this.props.link}>View</Button>
      </Card>
      </div>

    )
  }
}

export default ResturantCard
