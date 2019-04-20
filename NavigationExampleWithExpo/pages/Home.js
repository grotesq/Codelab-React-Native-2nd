import React, { Component } from 'react';
import { Button, Container, Header, Content, Footer, Text } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Text>
            Home Page
          </Text>

          <Button onPress={ () => this.props.navigation.push( 'Detail' )}>
            <Text>Go to Detail Page</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
