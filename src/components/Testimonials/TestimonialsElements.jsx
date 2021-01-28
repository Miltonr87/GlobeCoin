import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  padding: 6rem 0 6rem 0;
  background-color: #010606;
`;

export const TestimonialsInner = styled.div`
  margin: 0 auto;
  width: 75rem;
  max-width: calc(100% - 6rem);
`;

export const TestimonialsInnerH2 = styled.h2`
  justify-content: center;
  font-size: 48px;
  color: #fff;
  margin: 1em 0 1em 0;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const TestimonialsInnerP = styled.p`
  max-width: 75%;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  line-height: 24px;
`;

export const TestimonialsSection = styled.section`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    margin-left: 18px;
  }
`;

export const TestimonialsContent = styled.div`
  margin: 30px;
  border-radius: 10px 10px 10px 10px;
  width: 30%;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const TestimonialsBlockQuote = styled.blockquote`
  border-left: solid 0.5rem #e58900;
  border-radius: 10px 0px;
  font-style: italic;
  margin: 0 10px 5px 0;
`;

export const TestimonialsP = styled.p`
  margin-left: 8px;
  font-size: 1rem;
  /*line-height: 24px;*/
  color: #010606;
  text-align: justify;
  padding: 5px;
`;

export const TestimonialsAuthor = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  text-align: center;
`;

export const TestimonialsImg = styled.img`
  border-radius: 100%;
  max-width: 33%;
  border: 3px solid #e58900;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.02);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const TestimonialsCredit = styled.p`
  margin: 0 1rem 2rem 20px;
  text-align: center;
  color: #010606;
`;
