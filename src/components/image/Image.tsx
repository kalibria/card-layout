import styled from 'styled-components';

type ImagePropsType = {
  src: string
  alt: string
}

export const Image = ({src, alt}:ImagePropsType) =>{
  return <StyledImg src={src} alt={alt} />
}

const StyledImg = styled.img`
  width: 280px;
  height: 170px;
  margin: 10px 10px 0 10px
`
