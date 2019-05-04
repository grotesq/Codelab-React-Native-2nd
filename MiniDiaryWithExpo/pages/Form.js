import React, {Component} from 'react';
import {Platform} from "react-native";
import {Constants} from "expo";
import {Body, Button, Container, Content, Header, Input, Text, Textarea, Title} from "native-base";
import {AppConsumer} from "../contexts/AppContext";
import produce from 'immer';

class Form extends Component {
  state = {
    subject: '',
    content: '',
  };
  onChangeSubject = text => {
    this.setState({subject: text});
  };
  onChangeContent = text => {
    this.setState({content: text});
  };
  save = () => {
    this.props.context.update(produce(draft => {
      draft.items.push({
        subject: this.state.subject,
        content: this.state.content,
      })
    }));
    this.setState({subject: '', content: ''});
    this.props.navigation.navigate('Home');
  };

  render() {
    return <Container style={{marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
      <Header>
        <Body>
          <Title>작성</Title>
        </Body>
      </Header>
      <Content>
        <Input placeholder={'제목을 입력하세요'}
               onChangeText={this.onChangeSubject}
               value={this.state.subject}/>
        <Textarea rowSpan={5}
                  bordered
                  placeholder="내용을 입력하세요"
                  onChangeText={this.onChangeContent}
                  value={this.state.content}/>
        <Button full onPress={this.save}>
          <Text>작성</Text>
        </Button>
      </Content>
    </Container>
  }
}

export default props => {
  return (<AppConsumer>
    {context => (
      <Form {...props} context={context}/>
    )}
  </AppConsumer>)
}
