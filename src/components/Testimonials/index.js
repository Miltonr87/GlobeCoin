import React from "react";
import {
  TestimonialsContainer,
  TestimonialsInner,
  TestimonialsInnerH2,
  TestimonialsInnerP,
  TestimonialsSection,
} from "./TestimonialsElements";
import TestimonialAuthors from "./TestimonialAuthors";
import { testimonialsData, testimonialsData2, testimonialsData3 } from "./Data";

const Testimonials = () => {
  return (
    <>
      <TestimonialsContainer id="clients">
        <TestimonialsInner>
          <TestimonialsInnerH2>What people say about us</TestimonialsInnerH2>
          <TestimonialsInnerP>
            In arcu accumsan arcu adipiscing accumsan orci ac. Felis id enim
            aliquet. Accumsan ac integer lobortis commodo ornare aliquet
            accumsan erat tempus amet porttitor.
          </TestimonialsInnerP>
        </TestimonialsInner>
        <TestimonialsSection>
          <TestimonialAuthors {...testimonialsData} />
          <TestimonialAuthors {...testimonialsData2} />
          <TestimonialAuthors {...testimonialsData3} />
        </TestimonialsSection>
      </TestimonialsContainer>
    </>
  );
};

export default Testimonials;
