import './App.css';
import styled from 'styled-components';
import {Card} from './components/card/Card';


function App() {
    return (
        <div className="App">
          <StyledWrapper>
            <Card/>
          </StyledWrapper>
        </div>
    );
}

export default App;


const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
