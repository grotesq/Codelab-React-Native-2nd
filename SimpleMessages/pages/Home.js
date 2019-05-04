import React, {Component} from 'react';
import {Platform} from "react-native";
import {Constants} from "expo";
import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Title,
  List,
  ListItem,
  Input
} from "native-base";
import firebaseApp from '../firebaseApp';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    message: '',
    messages: [],
  };

  constructor() {
    super();

    firebaseApp.firestore().collection('messages')
      .onSnapshot(snapshot => {
        const messages = [];
        snapshot.forEach(doc => messages.push(doc.data()));
        this.setState({messages});
      });
  }

  onChangeText = text => this.setState({message: text});

  submit = () => {
    firebaseApp.firestore().collection('messages')
      .doc(new Date().toString())
      .set({
        message: this.state.message
      })
      .then(() => {
        this.setState({message: ''});
      });
  };

  render() {
    return <Container style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content>
        <Input placeholder={'메시지를 입력하세요.'}
               onChangeText={ this.onChangeText }
               value={this.state.message}/>
        <Button full onPress={ this.submit }>
          <Text>전송</Text>
        </Button>
        <List>
          {this.state.messages.map((item, i) => (
            <ListItem key={i}>
              <Body>
                <Text>{item.message}</Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  }
}
