import React, {Component} from 'react';
import {TouchableOpacity} from "react-native";
import {Body, Button, Card, CardItem, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";
import {AppConsumer} from "../contexts/AppContext";
import produce from 'immer';

class Second extends Component {
  remove = index => {
    this.props.context.update(produce(draft => {
      draft.items.splice(index, 1);
    }));
    this.props.navigation.navigate('Home');
  };

  render() {
    const index = this.props.navigation.state.params.index;
    const item = this.props.context.items[index];
    if (!item) {
      return <></>;
    }
    return <Container>
      <Header>
        <Left>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back"/>
          </TouchableOpacity>

        </Left>
        <Body>
          <Title>{item.subject}</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Text>{item.content}</Text>
          </CardItem>
        </Card>

        <Button full danger onPress={() => this.remove(index)}>
          <Text>삭제</Text>
        </Button>
      </Content>
    </Container>
  }
}

export default props => {
  return (<AppConsumer>
    {context => (
      <Second {...props} context={context}/>
    )}
  </AppConsumer>)
}
