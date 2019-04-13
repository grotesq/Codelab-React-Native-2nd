/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import _ from 'underscore';

type Props = {};
export default class App extends Component<Props> {
  state = {
    numbers: [],
  };
  /*
  state = {
    numbers: [],
    label: '다시!',
  }
   */
  generate = () => {
    let numbers = [];
    _.times(45, n => numbers.push(n + 1));
    numbers = _.shuffle(numbers);
    numbers.length = 6;
    console.log( 'numbers', numbers );
    this.setState({numbers});
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.numbers.join(',')}</Text>
        <Button title={'다시!'} onPress={this.generate}/>
      </View>
    );
  }

  componentDidMount() {
    this.generate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
