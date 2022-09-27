import styled from "styled-components"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  /* outline: 1px solid; */
  margin-top: 3rem;
  
`

const ImgDiv = styled.div`
/* outline: 1px solid; */

`

const Img = styled.img`

  &.ground{
    width: 450px;
    height: 450px;
    
    @media screen and (max-width: 830px) {
      width: 350px;
      height: 350px;
      
    }
    @media screen and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`

const BtnDiv = styled.div`
  
  .save {
    margin-top: 2rem;
  }
`

export {
  Background,
  Img,
  ImgDiv,
  BtnDiv,
}