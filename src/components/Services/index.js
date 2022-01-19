import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServiceP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServiceP>
            We help reduce your fess and increase your overall revenue.
          </ServiceP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServiceP>
            You can access our platform online anywhere in the world.
          </ServiceP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServiceP>
            Unlock our special membership card that return 5% cash back.
          </ServiceP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
