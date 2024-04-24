import styled from 'styled-components';

type ButtonPropsType = {
  text: string
}

export const Button =({text}: ButtonPropsType) => {
  return <StyledButton>{text}</StyledButton>
}


const StyledButton = styled.button`
  min-width: 86px;
  min-height: 30px;
  border: 2px solid #4E71FE;
  border-radius: 5px;
  color: #4E71FE;
  font-weight: 700;
  background-color: transparent;
  
  &:active{
    background-color: rgba(78, 113, 254, 1);
    color: rgba(255, 255, 255, 1);
  ;
  }

`
