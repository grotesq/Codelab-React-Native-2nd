import React, {Component} from 'react';
import {Platform} from "react-native";
import {Constants} from "expo";
import {Body, Button, Container, Content, Header, List, ListItem, Text, Title} from "native-base";
import {AppConsumer} from "../contexts/AppContext";

class Home extends Component {
  read = index => {
    this.props.navigation.navigate('Second', {index});
  };

  render() {
    return <Container style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Body>
          <Title>Home</Title>
        </Body>
      </Header>
      <Content>
        <Button full onPress={() => this.props.navigation.navigate('Form')}>
          <Text>작성</Text>
        </Button>
        <List>
          {this.props.context.items.map((item, i) => (
            <ListItem key={i} onPress={() => this.read(i)}>
              <Body>
                <Text>{item.subject}</Text>
              </Body>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  }
}

export default props => {
  return (<AppConsumer>
    {context => (
      <Home {...props} context={context}/>
    )}
  </AppConsumer>)
}
