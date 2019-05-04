import React, { Component } from "react";
import { Platform } from "react-native";
import { Constants } from "expo";
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
  CheckBox,
  Input
} from "native-base";
import produce from "immer";

export default class Home extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    input: "",
    items: [
      {
        content: "first one",
        done: false
      }
    ]
  };

  addItem = () => {
    this.setState(
      produce(draft => {
        draft.items.push({ content: this.state.input, done: false });
        draft.input = "";
      })
    );
  };

  onChangeText = text => {
    this.setState(
      produce(draft => {
        draft.input = text;
      })
    );
  };

  done = index => {
    this.setState(
      produce(draft => {
        draft.items[index].done = !draft.items[index].done;
      })
    );
  };

  delete = index => {
    this.setState(
      produce(draft => {
        draft.items.splice(index, 1);
      })
    );
  };

  render() {
    return (
      <Container
        style={{
          marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight
        }}
      >
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <Input
            placeholder={"할 일을 입력하세요."}
            onChangeText={this.onChangeText}
            value={this.state.input}
          />
          <Button full onPress={this.addItem}>
            <Text>추가</Text>
          </Button>
          <List>
            {this.state.items.map((item, i) => (
              <ListItem key={i}>
                <CheckBox checked={item.done} onPress={() => this.done(i)} />
                <Body>
                  <Text>{item.content}</Text>
                </Body>
                <Button danger small onPress={() => this.delete(i)}>
                  <Text>삭제</Text>
                </Button>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
