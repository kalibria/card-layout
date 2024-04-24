import styled from 'styled-components';
import {Button} from '../button/Button';
import {CardDescription} from '../сadrDescription/CardDescription';
import {CardTitle} from '../cardTitle/CardTitle';
import {Image} from '../image/Image';
import cardImg1 from '../../assets/imgs/img1.png'

export const Card = ()=> {
  return (
    <StyledCard>
      <Image src={cardImg1} alt={"image"}/>
      <CardTitle title={"Headline"}/>
      <CardDescription description={"Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."}/>
      <ButtonsWrapper>
        <Button text={"See more"}/>
        <Button text={"Save"}/>
      </ButtonsWrapper>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  width: 300px;
  min-height: 350px;
  border-radius: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
`

const ButtonsWrapper = styled.div`
  margin: 20px;
  display: flex;
  gap: 12px
`
