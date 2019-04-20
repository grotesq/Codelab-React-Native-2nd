import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
export default class BlackRussian extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>
            블랙러시안
          </Text>

          <Image source={{uri: 'https://tipsybartender.com/wp-content/uploads/2018/01/Black-Russian.jpg'}}
                 resizeMode={ 'contain' }
                 style={{width: 300, height: 300 }}
          />

          <Text>보드카 + 깔루아</Text>
        </Content>
      </Container>
    );
  }
}
