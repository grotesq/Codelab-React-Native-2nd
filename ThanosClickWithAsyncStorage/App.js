import React from 'react';
import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import Home from "./pages/Home";
import {createAppContainer, createStackNavigator} from "react-navigation";
import Second from "./pages/Second";

const StackNavigagor = createStackNavigator({
  Home,
  Second,
});

const AppContainer = createAppContainer(StackNavigagor);

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  render() {
    if (!this.state.loaded) {
      return <></>;
    }
    return (
      <AppContainer/>
    );
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({loaded: true});
  }
}
