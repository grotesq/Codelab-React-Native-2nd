import React, { Component } from 'react';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Home from "./pages/Home";
import Detail from "./pages/Detail";

const StackNavigator = createStackNavigator({
  Home,
  Detail,
});
const AppContainer = createAppContainer(StackNavigator);

export default class App extends Component {
  state = {
    loaded: false,
  }
  render() {
    if(!this.state.loaded) {
      return <></>;
    }
    return (
      <>
        <AppContainer/>
      </>
    );
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({loaded:true});
  }
}
