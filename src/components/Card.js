import styled from 'styled-components';

const Item = styled.div`
  display: flex;
  width: 360px;
  background: ${p => p.theme.white};
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  img {
    height: 320px;
    object-fit: cover;
  }
`;

const Details = styled.div`
  font-size: 24px;
  font-weight: 700;
  padding: 16px;
  color: ${p => p.theme.text};
`;

const Secondary = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: ${p => p.theme.secondaryText};
`;

function Card(props) {
  return (
    <Item>
      <img src={props.photo} alt={props.name}/>
      <Details>
        <div>{props.name}</div>
        <Secondary>
          {props.bread} {props.age}yo
        </Secondary>
      </Details>
    </Item>
  )
}

export default Card
