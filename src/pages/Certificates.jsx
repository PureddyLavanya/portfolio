import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "../components/Certificates/CertificateCard";
import merncert from "../assets/certificates/merncert.jpg";
import sqlcert from "../assets/certificates/sqlcert.jpg";
import pythoncert from "../assets/certificates/pythoncert.png";
import gitandgithubcert from "../assets/certificates/gitandgithubcert.jpg";
import flaskcert from "../assets/certificates/flaskcert.jpeg";
import codingcert from "../assets/certificates/codingcert.jpeg";

const Certificates = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h2 style={{color: "white"}}>
            My <strong className="yellow">Certifications </strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={merncert}
              title="MERN Stack Development Certification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={sqlcert}
              title="SQL Certification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={pythoncert}
              title="Python Certification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={gitandgithubcert}
              title="Git and GitHub Certification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={flaskcert}
              title="Flask Certification"
            />
          </Col>
          <Col md={4} className="project-card">
            <CertificateCard
              imgPath={codingcert}
              title="Coding Certification"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Certificates