import styled from 'styled-components'
import { FaPaw, FaSun, FaMoon } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: ${p => p.theme.text};
  @media(max-width: 768px){
    margin-bottom: 0px;
  }
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  display: flex;
  height: 40px;
  align-items: center;
  color: ${p => p.theme.text};
  &:hover{
    text-decoration: underline;
  }
`

function Header (props){
  return (
    <Container alt='dog licking cat' >
      <Logo {...props}>
        <FaPaw style={{marginRight: 4}}/>
        Adopty
      </Logo>
      <Logo onClick={() => props.toggleTheme()} {...props}>
        {props.theme === 'light' ? (<FaMoon/>) : (<FaSun/>)}
      </Logo>
    </Container>
  )
}
export default Header
