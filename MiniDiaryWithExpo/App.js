import React from 'react';
import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
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

export default class App extends React.Component {
  state = {
    loaded: false,
  };

  render() {
    if (!this.state.loaded) {
      return <></>;
    }
    return (
      <AppProvider>
        <AppContainer/>
      </AppProvider>
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
