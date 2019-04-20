import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const StackNavigator = createStackNavigator({
  Home,
  Detail,
});
const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer/>
      </>
    );
  }
}
