import React from "react";
import { Button } from "../Buttons/ButtonElement";
/*import { ReactComponent as Img } from '../../assets/images/svg-1.svg';*/
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Header,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./DataElements";

const DataSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine src={img}>{topLine}</TopLine>
                <Header lightText={lightText}> {headLine} </Header>
                <SubTitle darkText={darkText}>{description}</SubTitle>
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default DataSection;
