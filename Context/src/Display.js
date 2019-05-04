import React, { Component } from 'react';
import { AppConsumer } from "./contexts/AppContext";

class Display extends Component {
  render() {
    return(
      <div>
        <h1>{ this.props.context.name }</h1>
      </div>
    )
  }
}

export default props => (
  <AppConsumer>
    { context => (
      <Display { ...props } context={ context }/>
    ) }
  </AppConsumer>
)

