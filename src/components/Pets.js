import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { dogs, cats } from '../data';
import { Card, Emoji } from './';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 64px;
  font-size: 32px;
  justify-content: center;
`;

const Content = styled.div`
  border-radius: 32px;
  padding: 16px 0px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  @media(max-width: 768px){
    margin-top: 0px;
  }
  `;

const Title = styled.div`
  font-size: 24px;
  width: 100%;
  text-align: center;
  margin: 16px 0px;
  color: ${p => p.theme.text};
`;

const Tab = styled.div`
  line-height: 64px;
  color: ${p => p.active ? p.theme.text : p.theme.secondaryText};
  font-weight: ${p => p.active ? '700' : '400'};
  border-bottom: ${p => p.active ? '4px solid' + p.theme.text : 'none'};
  &:first-child {
    margin-right: 32px;
    @media(max-width: 768px){
      margin-right: 16px;
    }
  }
  @media(max-width: 768px){
    line-height: 40px;
    font-size: 24px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${p => p.theme.background};
  width: 100%;
  justify-content: center;
  align-items: flex-start;
  gap: 32px;
`;

const types = [
  {name:'Dogs', emoji:'🐶'},
  {name:'Cats', emoji:'🐱'},
];

function Pets() {
  const [active, setActive] = useState(types[0]);

  useEffect((active) => {
    setActive(types[0]);
  },[])

  return (
    <Container>
      <Title>Say hello to your next best friend</Title>
      <Row>
        {types.map(type => (
            <Tab
              key={type.name}
              active={active === type}
              onClick={() => setActive(type)}
            >
              <Emoji id={type} alt={type} value={type.emoji}/>
              {type.name}
            </Tab>
        ))}
      </Row>
      <Content>
        {active.name === 'Dogs' ? (
          <Grid>
            {dogs.map((x) =>
              <Card
                key={x.name + x.breed}
                photo={x.photo}
                name={x.name}
                breed={x.breed}
                age={x.age}
              />
            )}
          </Grid>
        ) : active.name === 'Cats' ? (
          <Grid>
            {cats.map((x) =>
              <Card
                key={x.name + x.breed}
                photo={x.photo}
                name={x.name}
                breed={x.breed}
                age={x.age}
              />
            )}
          </Grid>
        ) : (
          <div>
            No data
          </div>
        )}
      </Content>
    </Container>
  )
}
export default Pets
