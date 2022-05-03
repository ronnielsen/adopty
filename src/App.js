import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme, darkTheme} from './theme';
import {
  Footer,
  Hero,
  Header,
  Pets,
  GlobalStyles
} from './components';

const Window = styled.div`
  height: 100%;
  width: 100vw;
  max-width: 1440px;
  display: block;
  background: ${p => p.theme.background};
  padding: 16px 32px;
  box-sizing: border-box;
  @media(max-width: 768px){
    padding: 8px 16px;
  }
`;

function App() {
  const [theme, setTheme] = useState('dark')
  function toggleTheme(){
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles>
        <Window>
          <Header theme={theme} toggleTheme={toggleTheme}/>
          <Hero/>
          <Pets/>
          <Footer/>
        </Window>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
