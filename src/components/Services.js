import React from 'react';
import styled from 'styled-components';
import { FaSalesforce, FaCode, FaDatabase, FaPencilRuler, FaCogs, FaCube } from 'react-icons/fa';

const Section = styled.div`
  background: radial-gradient(circle at center, #161616, #0f0f0f);
  color: white;
  padding: 70px 20px;
  text-align: center;
  border: 1px solid #2a2a2a;
`;

const Heading = styled.h2`
  font-size: 38px;
  margin-bottom: 50px;
  background: linear-gradient(45deg, #ff6ec7, #00ffe7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ServiceGrid = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #1b1b1b;
  border-radius: 14px;
  padding: 35px 25px;
  width: 260px;
  transition: all 0.4s ease;
  border: 1px solid #2a2a2a;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    border-color: #00ffe7;
    box-shadow: 0 0 12px rgba(0, 255, 231, 0.3);
  }

  h3 {
    margin: 18px 0 10px;
    font-size: 21px;
    color: #ffffff;
  }

  p {
    font-size: 15px;
    color: #bbbbbb;
  }

  /* Tablet */
  @media (max-width: 768px) {
    width: 220px;
    padding: 28px 20px;

    h3 {
      font-size: 19px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Mobile */
  @media (max-width: 480px) {
    width: 100%;
    padding: 24px 18px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 13.5px;
    }
  }
`;

const IconWrapper = styled.div`
  font-size: 40px;
  color: #ff6ec7;
  transition: color 0.4s ease;

  ${Card}:hover & {
    color: #00ffe7;
  }
`;

const ServicesSection = () => {
  return (
    <Section>
      <Heading>Our Services</Heading>
      <ServiceGrid>
        <Card>
          <IconWrapper><FaSalesforce /></IconWrapper>
          <h3>Salesforce Development</h3>
          <p>Salesforce solutions and development expertise.</p>
        </Card>
        <Card>
          <IconWrapper><FaDatabase /></IconWrapper>
          <h3>Oracle Applications</h3>
          <p>Oracle EBS, Fusion, and frontend development.</p>
        </Card>
        <Card>
          <IconWrapper><FaCode /></IconWrapper>
          <h3>Web Development</h3>
          <p>Responsive, modern web apps and interfaces.</p>
        </Card>
        <Card>
          <IconWrapper><FaPencilRuler /></IconWrapper>
          <h3>Logo Designing</h3>
          <p>Custom logo design to reflect your brand identity.</p>
        </Card>
        <Card>
          <IconWrapper><FaCogs /></IconWrapper>
          <h3>Tool Designing</h3>
          <p>Design and prototype tools tailored to your workflow.</p>
        </Card>
        <Card>
          <IconWrapper><FaCube /></IconWrapper>
          <h3>3D Modelling</h3>
          <p>Stunning 3D models and mockups for your projects.</p>
        </Card>
      </ServiceGrid>
    </Section>
  );
};

export default ServicesSection;