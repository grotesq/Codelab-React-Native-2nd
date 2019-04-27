import React, {Component} from 'react';
import {TouchableOpacity} from "react-native";
import {Body, Card, CardItem, Container, Content, Header, Icon, Left, Right, Text, Title} from "native-base";


export default class Second extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    answer: {
      a: `A. 손등이 위로 오고 손가락 사이를 벌린사람
당신은 감정이 얼굴에 잘 드러나서 조금만 기쁜일이 생겨도 잘 웃는 성격을 가지고 있습니다.
또한 자신의 감정을 확실히 하는 성격으로 복잡하거나 피곤한 것을 싫어합니다.
자신이 좋아하지 않는 사람에게는 단 1%의 기회도 주지않으며 자신이 좋아하는 사람에게는 매우 관대한 편 입니다.
남에게 받은 호의는 반드시 되돌려주고싶어하는 멋진 성격을 가지고 있습니다.
단, 고집이 세서 틀린 길임을 알면서도 직진하는 경향이 있으니 가끔은 고집을 꺾을줄도 알아야 합니다.`,
      b: `B. 손등이 위로 오고 손가락 사이를 오므린 사람
배려심이 강해 자신보다 남에게 맞추는게 편하다고 생각하는 성격을 가지고 있습니다.
외관상으로는 열정이 넘치고 친절해보이지만 내적으로는 안일한 생활을 추구하려는 경향을 가지고 있습니다.
잠자기를 좋아해서 주변 사람과 일에 크게 신경 쓰지 않으며 자기중심적 입니다.
또한 감정의 기복이 심하기도 한 당신은 게을러서 가끔은 ‘어떻게든 되겠지’ 라는 마음을 가지고 있습니다.
그러나 인내심이 강한 당신은 모든지 자신이 이겨내려 하며 특정 사물 혹은 사람 때문에 다투고 빼앗기는 행위를 굉장히 싫어합니다.`,
      c: `C. 손바닥이 위로 오고 손가락 사이를 벌린 사람
당신은 무시당하는걸 싫어하며 누군가에게 호감이 있어도 잘 표현하지 않는 편입니다.
기분이 안좋은일이 생기면 혼자 숨어서 울때도 있습니다.
쉽게 감정이 얼굴에 드러나지 않아 자신의 슬픔은 숨기지만 누군가가 위로해 주기를 원합니다.
환상속의 완벽한 일들이 일어날 수 있다고 믿는 당신은 친절하고 낭만적인 성격을 가지고 있으나 낮선이의 앞에선 조용한 편입니다.
그러나 의외로 애교를 잘 부리는 귀여운 성격을 가지고 있습니다.
기분대로 행동하려는 것만 조심하면 굉장히 사랑받을 타입 입니다.`,
      d: `D. 손바닥이 위로 오고 손가락 사이를 오므린 사람
상처받기를 두려워하는 당신은 낮선 사람에게는 차갑게 대하나 내 사람이라고 생각되면 엄청 잘해줍니다.
당신은 무시와 무관심을 제일 싫어하여 살짝 관종끼가 있습니다.
강해보이고 싶어하나 의외로 여려서 상처를 잘 받는 타입으로 자존심은 하늘을 찌를듯이 높으나 자신감이 부족합니다.
사람들과의 만남보다는 집에 있는것을 좋아하며 멍때리는것을 좋아합니다.
친구가 부탁하면 잘 들어주는 편으로 사기를 당하기 쉬우니 조심해야합니다.`,
    }
  };

  render() {
    return <Container>
      <Header>
        <Left>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Icon name="ios-arrow-back"/>
          </TouchableOpacity>

        </Left>
        <Body>
          <Title>결과</Title>
        </Body>
        <Right/>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Body>
              <Text>
                {this.state.answer[this.props.navigation.state.params.type]}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  }
}
