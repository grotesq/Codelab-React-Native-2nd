import React, {Component} from 'react';
import {Platform} from "react-native";
import {Constants} from "expo";
import {TouchableOpacity} from 'react-native';
import {Body, Button, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";

export default class Second extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return <Container style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Left>
          <TouchableOpacity onPress={ () => this.props.navigation.goBack() }>
            <Icon name="ios-arrow-back"/>
          </TouchableOpacity>

        </Left>
        <Body>
          <Title>Second</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <Text>Second Page</Text>
        <Button onPress={ () => this.props.navigation.goBack() }>
          <Text>Go Back Home</Text>
        </Button>
      </Content>
    </Container>
  }
}
