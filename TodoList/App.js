/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from "react-navigation";
import Home from "./pages/Home";
import Second from "./pages/Second";

const StackNavigagor = createStackNavigator({
  Home,
  Second,
});

const AppContainer = createAppContainer(StackNavigagor);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}
