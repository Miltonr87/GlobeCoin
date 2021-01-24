import React from "react";
import {
  TestimonialsContent,
  TestimonialsBlockQuote,
  TestimonialsP,
  TestimonialsAuthor,
  TestimonialsImg,
  TestimonialsCredit,
} from "./TestimonialsElements";

const TestimonialAuthors = ({ blackQuote, img, credit, alt }) => {
  return (
    <>
      <TestimonialsContent>
        <TestimonialsBlockQuote>
          <TestimonialsP>{blackQuote}</TestimonialsP>
        </TestimonialsBlockQuote>
        <TestimonialsAuthor>
          <TestimonialsImg src={img} alt={alt} />
          <TestimonialsCredit>{credit}</TestimonialsCredit>
        </TestimonialsAuthor>
      </TestimonialsContent>
    </>
  );
};

export default TestimonialAuthors;
