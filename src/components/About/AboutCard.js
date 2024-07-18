import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">HARIPRASAD </span>
            from <span className="purple"> Kerala, India.</span>
            <br /><br />
            I am currently employed as a software developer at Squad Technologies Pvt. Ltd.
            <br /><br />
            Also I am presuming my Masters of Computer Application at Bharathiyar university. I graduated in Bachelor of SCience in Information of Technology at Calicut university. 
            <br /><br />
            My strong technical expertise, coupled with a
 passion for continuous learning and problem-solving, ensures that I stay
 at the forefront of industry trends and best practices. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Having fun with Friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hariprasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
