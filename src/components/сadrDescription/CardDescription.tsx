import styled from 'styled-components';

type CardDescriptionPropsStyle = {
  description: string
}

export const CardDescription =({description}:CardDescriptionPropsStyle) => {
  return <StyledDescription>{description}</StyledDescription>
}


const StyledDescription = styled.p`
  margin: 20px;
  font-size: 12px;
  font-weight: 500;
  color: rgba(171, 179, 186, 1);
`
