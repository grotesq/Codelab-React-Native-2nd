// contexts/AppContext.js
import React, { createContext, Component } from "react";

const { Provider, Consumer } = createContext();

class AppProvider extends Component {
  state = {
    name: 'AppName',
    update: state => {
      this.setState( state );
    }
  };
  render() {
    return (
      <Provider value={ this.state }>
        { this.props.children }
      </Provider>
    );
  }
}

const AppConsumer = Consumer;

export {
  AppProvider,
  AppConsumer,
}
