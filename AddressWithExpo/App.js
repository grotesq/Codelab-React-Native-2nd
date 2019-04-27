import React from 'react';
import {Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import {Body, Button, Container, Content, Header, Title, Text, Input, List, ListItem} from "native-base";
import ENV from './config/ENV';
import axios from 'axios';
import getIndex from "./utils/getIndex";
import queryString from 'query-string';

const AddressItem = props => {
  return <ListItem>
    <Text>
      {props.item.zipNo}
      {'\n'}
      {props.item.roadAddr}
      {'\n'}
      {props.item.jibunAddr}
    </Text>
  </ListItem>
};

export default class App extends React.Component {
  state = {
    loaded: false,
    list: [],
  };

  onChanteText = text => {
    this.setState({keyword: text});
  };
  search = () => {
    if (this.state.keyword === '') {
      alert('검색어를 입력하세요.');
      return;
    }

    const params = {
      confmKey: ENV.API_KEY,
      currentPage: 1,
      countPerPage: 100,
      resultType: 'json',
      keyword: this.state.keyword,
    };

    axios.get(`https://www.juso.go.kr/addrlink/addrLinkApi.do?${queryString.stringify(params)}`)
      .then(response => {
        this.setState({list: response.data.results.juso});
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      })
  };

  render() {
    if (!this.state.loaded) {
      return <></>;
    }
    return (
      <Container>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content>
          <Input value={this.state.keyword} placeholder={'검색어를 입력하세요'} onChangeText={this.onChanteText}/>
          <Button full onPress={this.search}>
            <Text>검색</Text>
          </Button>
          <List>
            {this.state.list.map((item, i) => <AddressItem key={getIndex(i)} item={item}/>)}
          </List>
        </Content>
      </Container>
    );
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({loaded: true});
  }
}
