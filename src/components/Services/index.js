import React from 'react';
import Icon1 from '../../assets/images/svg-1.svg';
import Icon2 from '../../assets/images/svg-2.svg';
import Icon3 from '../../assets/images/svg-2.svg';
import {ServicesContainer, 
  ServicesH1, 
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
          <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
          <ServicesWrapper>
                {/*Card 1 */}
              <ServicesCard>
                  <ServicesIcon src={Icon1}></ServicesIcon>
                  <ServicesH2>Reduce Expenses</ServicesH2>
                  <ServicesP>Lorem ipsum sit amet Lorem ipsum sit amet</ServicesP>
              </ServicesCard>
                {/* Card 2 */}
              <ServicesCard>
                  <ServicesIcon src={Icon2}></ServicesIcon>
                  <ServicesH2>Virtual Offices</ServicesH2>
                  <ServicesP>Lorem ipsum sit amet Lorem ipsum sit amet</ServicesP>
              </ServicesCard>
              {/* Card 3 */}
              <ServicesCard>
                  <ServicesIcon src={Icon3}></ServicesIcon>
                  <ServicesH2>Many Coins</ServicesH2>
                  <ServicesP>Lorem ipsum sit amet Lorem ipsum sit amet</ServicesP>
              </ServicesCard>
          </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services;
