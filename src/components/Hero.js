import styled from 'styled-components'
import Button from './Button';

const Container = styled.div`
  width: 100%;
  height: 420px;
  border-radius: 32px;
  display: flex;
  margin-bottom: 32px;
  overflow: hidden;
  object-fit: cover;
  background: no-repeat center url('./hero.jpg');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media(max-width: 768px){
    height: 240px;
  }
`;

const Text = styled.div`
  font-size: 64px;
  line-height: 80px;
  font-weight: 700;
  margin-bottom: 8px;
  font-family: 'Heebo', sans-serif;
  color: #000;
  user-select: none;
  @media(max-width: 768px){
    font-size: 40px;
    line-height: 48px;
  }
`;

const Group = styled.div`
  padding: 64px;
  @media(max-width: 768px){
    padding: 32px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeroButton = styled(Button)`
  background: #000;
  color: #F1F1F4;
`;

function Hero (){
  return (
    <Container>
      <Group>
        <Text>Join the family</Text>
        <Row>
          <HeroButton text='Volunteer'/>
          <HeroButton text='Adopt'/>
        </Row>
      </Group>
    </Container>
  )
}
export default Hero
