import React, { Component } from 'react';
import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Constants, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default class App extends Component {
  state = {
    loaded: false,
  }
  render() {
    if( !this.state.loaded ) {
      return <></>;
    }
    return (
      <Container style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({loaded: true})
  }
}
