import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import moonstride from "../../Assets/Projects/moonstride-logo.svg";
import integral from "../../Assets/Projects/integral-logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Tourengine"
              description="I developed and maintained an advanced tour booking website using React and Next.js, with a strong emphasis on enhancing the user interface and overall user experience. This project also involved implementing robust server-side logic and backend functionality using Node.js, ensuring seamless integration with the frontend, particularly through integration with Moonstride."
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="AI Buddy"
              description="AI Buddy is an innovative platform I developed using React and Next.js, currently implemented within the Moonstride ecosystem. This dynamic tool leverages the power of Chat GPT APIs to generate personalized trip plans, making travel planning intuitive and seamless."
              demoLink="https://www.moonstride.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Zoho"
              description="As part of enhancing the accounting capabilities within Moonstride, I implemented an integration with Zoho Accounting Software. This integration streamlines the management of user accounts by synchronizing invoice and payment details between Moonstride and Zoho, ensuring accurate and efficient financial tracking."
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Xero"
              description="I developed a seamless integration between Moonstride and Xero Accounting Software to enhance financial management for Moonstride users. This integration synchronizes invoice and payment details between the two platforms, ensuring accurate and efficient account management."
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moonstride}
              isBlog={false}
              title="Quick books"
              description="To streamline financial management for Moonstride users, I developed an integration with QuickBooks Accounting Software. This integration facilitates the synchronization of invoice and payment details between Moonstride and QuickBooks, ensuring efficient and accurate account management."
              demoLink="https://www.moonstride.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={integral}
              isBlog={false}
              title="Integral"
              description="I developed a web scraping solution using Selenium in Python to collect and analyze data from Integral. This project involved automating the data extraction process and performing detailed analysis on the collected data to derive valuable insights."
              demoLink="https://www.integralmemory.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
