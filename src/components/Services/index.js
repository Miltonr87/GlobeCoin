import React from "react";
import Icon1 from "../../assets/images/expensive.svg";
import Icon2 from "../../assets/images/transactions.svg";
import Icon3 from "../../assets/images/cryptoEcosystem.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          {/*Card 1 */}
          <ServicesCard>
            <ServicesIcon src={Icon1}></ServicesIcon>
            <ServicesH2>Trading Strategy</ServicesH2>
            <ServicesP>
              We have the lowest cost for financial operations with
              cryptocurrencies with the best strategy.
            </ServicesP>
          </ServicesCard>
          {/* Card 2 */}
          <ServicesCard>
            <ServicesIcon src={Icon2}></ServicesIcon>
            <ServicesH2>Online Transactions</ServicesH2>
            <ServicesP>
              In this neo-technological era, we use cryptography for online
              trading and transactions.{" "}
            </ServicesP>
          </ServicesCard>
          {/* Card 3 */}
          <ServicesCard>
            <ServicesIcon src={Icon3}></ServicesIcon>
            <ServicesH2>Crypto Ecosystem</ServicesH2>
            <ServicesP>
              Bitcoin is not the only currency in the ecosystem. We analyze the
              market and offer several other options.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
