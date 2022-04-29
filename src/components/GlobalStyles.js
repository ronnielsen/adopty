import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: ${p => p.theme.background};
  display: flex;
  justify-content: center;
  b {
    font-weight: 900;
  }
  button {
    font-family: 'Heebo', sans-serif;
  }
`;

function GlobalStyles(props) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

export default GlobalStyles;
