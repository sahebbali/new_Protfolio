import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperBoardOff } from "react-icons/md";
import { MdOutlineIntegrationInstructions } from "react-icons/md";
import { GrVmMaintenance } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { FcCustomerSupport } from "react-icons/fc";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"ui/ux designer"}
            disc={`As a UI/UX (User Interface/User Experience) designer, your role is to create visually appealing and user-friendly interfaces for web and mobile applications. You focus on understanding user needs, designing intuitive layouts, and optimizing the overall user experience`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Web service and API Development"}
            disc={`Web service and API development are essential components of modern web applications.
             As a MERN stack developer, you can provide services in web service and API development, enabling communication and data exchange between different systems and applications`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Enterprise Applications Developer"}
            disc={`As an enterprise applications developer, you specialize in developing software solutions tailored to the specific needs of large-scale organizations. These applications are designed to address complex business processes, data management, and integration requirements within an enterprise environment`}
          />
        </Slide>
        
      </Cards>
      <Cards>
      <Slide direction="left">
          <Card
            Icon={MdDeveloperBoardOff}
            title={"Web application development"}
            disc={`Web application development involves creating dynamic and interactive applications that are accessed through web browsers. These applications can be used across various industries and domains, providing functionality and services to users over the internet`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FcCustomerSupport}
            title={"Support and Maintenance"}
            disc={`MERN stack support and maintenance services typically involve providing ongoing assistance, updates, bug fixes, and performance optimization for applications built using the MERN stack (MongoDB, Express.js, React.js, and Node.js)`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={MdOutlineIntegrationInstructions}
            title={"MERN stack integration"}
            disc={`MERN stack integration refers to the process of connecting and integrating various components within the MERN stack (MongoDB, Express.js, React.js, and Node.js) as well as integrating external services or systems with the MERN stack application.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  
  gap: 1rem;
`;
