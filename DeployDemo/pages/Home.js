import React, {Component} from 'react';
import {Platform} from "react-native";
import {Constants} from "expo";
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <Container style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content>
        <Text>Home Page</Text>
        <Button onPress={ () => this.props.navigation.push( 'Second' )}>
          <Text>Go Second Page</Text>
        </Button>
      </Content>
    </Container>
  }
}
