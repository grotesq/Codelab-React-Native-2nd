import React, { Component } from 'react';
import {Container, Header, Content, Footer, Text, Button} from 'native-base';
export default class Detail extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Detail Page
          </Text>

          <Button onPress={ () => this.props.navigation.goBack()}>
            <Text>Go to Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
