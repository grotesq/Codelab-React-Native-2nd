/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
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

type Props = {};
export default class App extends Component<Props> {
  state = {
    keyword: '',
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
}
