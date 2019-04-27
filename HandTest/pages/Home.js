import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {Body, Container, Content, Header, Text, Title} from "native-base";
import Styles from "../styles/Styles";

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <Container>
      <Header>
        <Body>
          <Title>심리테스트</Title>
        </Body>
      </Header>
      <Content>
        <Text style={Styles.heading}>Q. 마주보고 앉은 사람이 "손 줘봐" 라고 말을 하면 당신은 어떻게 손을 내밉니까?</Text>
        <View style={[Styles.hGroup, Styles.justifyCenter]}>
          <TouchableOpacity onPress={() => this.props.navigation.push('Second', {type: 'a'})}>
            <Image source={require('../assets/hand-type-a.png')} style={{width: 150, height: 194}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.push('Second', {type: 'b'})}>
            <Image source={require('../assets/hand-type-b.png')} style={{width: 150, height: 194}}/>
          </TouchableOpacity>
        </View>
        <View style={[Styles.hGroup, Styles.justifyCenter]}>
          <TouchableOpacity onPress={() => this.props.navigation.push('Second', {type: 'c'})}>
            <Image source={require('../assets/hand-type-c.png')} style={{width: 150, height: 194}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.push('Second', {type: 'd'})}>
            <Image source={require('../assets/hand-type-d.png')} style={{width: 150, height: 194}}/>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  }
}
