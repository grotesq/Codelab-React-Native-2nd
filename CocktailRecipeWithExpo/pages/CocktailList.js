import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
export default class CocktailList extends Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={()=>this.props.navigation.push( 'GinTonic' )}>
              <Text>진토닉</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.push( 'BlackRussian' )}>
              <Text>블랙 러시안</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
