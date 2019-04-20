import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base';
import { Image } from 'react-native';
export default class GinTonic extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text>
            진토닉
          </Text>

          <Image source={{uri: 'https://www.thespruceeats.com/thmb/YlhdecRcUlxy5o5TFfcmqv1CQiw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/gin-tonic-5a8f334b8e1b6e0036a9631d.jpg'}}
                 resizeMode={ 'contain' }
                 style={{width: 300, height: 300 }}
          />

          <Text>진 + 토닉워터</Text>
        </Content>
      </Container>
    );
  }
}
