import React, {Component} from 'react';
import {AsyncStorage, Platform} from "react-native";
import {Constants} from "expo";
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    result: null,
  };

  verifyResult = async () => {
    const data = await AsyncStorage.getItem('ThanosClickResult');
    if (!data) {
      const result = Math.random(); // Number
      await AsyncStorage.setItem('ThanosClickResult', result.toString()); // String
      this.setState( { result } );
    } else {
      const result = Number( data );
      this.setState( { result } );
    }
  };

  constructor() {
    super();

    this.verifyResult();
  }

  render() {
    return <Container style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Body>
          <Title>당신의 운명</Title>
        </Body>
      </Header>
      <Content contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        { this.state.result === null && (
          <></>
        ) }
        { this.state.result < 0.5 && (
          <Text>우주의 균형을 위해 먼지가 되었습니다.</Text>
        ) }
        { this.state.result >= 0.5 && (
          <Text>당신은 살아남았습니다.</Text>
        ) }
      </Content>
    </Container>
  }
}
