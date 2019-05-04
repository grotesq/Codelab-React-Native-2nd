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
import Form from "./pages/Form";
import {AppProvider} from './contexts/AppContext';

const StackNavigagor = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    }
  },
  Second: {
    screen: Second,
    navigationOptions: {
      header: null,
    }
  },
  Form: {
    screen: Form,
    navigationOptions: {
      header: null,
    }
  },
});

const AppContainer = createAppContainer(StackNavigagor);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppProvider>
        <AppContainer/>
      </AppProvider>
    );
  }
}
