import React, {Component, createContext} from 'react';
import {AsyncStorage} from 'react-native';

const {Provider, Consumer} = createContext();

const AppConsumer = Consumer;

class AppProvider extends Component {
  state = {
    items: [],
    update: (state, callback) => {
      this.setState(state, () => {
        AsyncStorage.setItem('diary', JSON.stringify(this.state.items));
      }, callback);
    }
  };

  getDiaryOrCreate = async () => {
    let items = await AsyncStorage.getItem('diary');
    if (!items) {
      items = [];
    } else {
      items = JSON.parse(items);
    }

    this.setState({items});
  };

  constructor() {
    super();

    this.getDiaryOrCreate();
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  AppProvider,
  AppConsumer,
}
