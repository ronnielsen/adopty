import styled from 'styled-components';
import { FaPaw } from "react-icons/fa";

const Container = styled.div`
  height: 240px;
  background: ${p => p.theme.light};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.secondary};
  border-radius: 32px;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  flex-direction: column;
  @media(max-width: 768px){
    font-size: 18px;
    line-height: 24px;
    height: 200px;
  }
`;

const Logo = styled.div`
  font-size: 48px;
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-bottom: 16px;
  @media(max-width: 768px){
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

function Footer (props){
  return (
    <Container {...props}>
      <Logo>
        <FaPaw style={{marginRight: 8}}/>
        Adopty
      </Logo>
      <div>123 Main St.</div>
      <div>San Francisco, CA 94107</div>
      <div>(415) 987-6543</div>
    </Container>
  )
}

export default Footer
