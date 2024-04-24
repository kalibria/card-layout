import styled from 'styled-components';

type CardTitlePropsType = {
  title: string
}

export const CardTitle = ({title}:CardTitlePropsType) => {
  return <StyledTitle>{title}</StyledTitle>
}

const StyledTitle = styled.h3`
  margin: 20px;
  font-size: 16px;
  font-weight: 700;
`
