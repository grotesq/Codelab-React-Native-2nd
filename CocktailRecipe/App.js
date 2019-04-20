/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from "react-navigation";
import CocktailList from "./pages/CocktailList";
import GinTonic from "./pages/GinTonic";
import BlackRussian from "./pages/BlackRussian";

const StackNavigator = createStackNavigator({
  CocktailList,
  GinTonic,
  BlackRussian,
});

const AppContainer = createAppContainer(StackNavigator);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer/>
    );
  }
}
