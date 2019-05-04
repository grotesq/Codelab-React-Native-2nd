import React, { Component } from 'react';
import { AppConsumer } from "./contexts/AppContext";

class Editor extends Component {
  onChangeText = event => {
    this.props.context.update( {
      name: event.target.value,
    } );
  };
  render() {
    return(
      <div>
        <input onChange={ this.onChangeText } value={ this.props.context.name }/>
      </div>
    )
  }
}

export default props => (
  <AppConsumer>
    { context => (
      <Editor { ...props } context={ context }/>
    ) }
  </AppConsumer>
)

